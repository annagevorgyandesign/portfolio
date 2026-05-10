import axios from 'axios'
import type { GeminiChatTurn, GeminiResponse, GeminiError } from '../types/gemini'

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY
const MODEL = 'gemini-2.5-flash'

export const sendGeminiChat = async (
  history: GeminiChatTurn[],
  systemInstruction: string,
): Promise<string> => {
  if (!API_KEY || typeof API_KEY !== 'string') {
    throw new Error(
      'Gemini API key is not configured. Add VITE_GEMINI_API_KEY to your environment.',
    )
  }

  const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`

  const contents = history.map((turn) => ({
    role: turn.role,
    parts: [{ text: turn.text }],
  }))

  const payload: {
    contents: typeof contents
    systemInstruction?: { parts: Array<{ text: string }> }
  } = { contents }

  if (systemInstruction.trim()) {
    payload.systemInstruction = {
      parts: [{ text: systemInstruction }],
    }
  }

  try {
    const response = await axios.post<GeminiResponse>(API_URL, payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const generatedText = response.data.candidates?.[0]?.content?.parts?.[0]?.text

    if (!generatedText?.trim()) {
      throw new Error('The model returned an empty response.')
    }

    return generatedText
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        const apiError = error.response.data as GeminiError
        const message = apiError.error?.message ?? 'Gemini API request failed'
        console.error('API Error:', message)
        throw new Error(message)
      }
      console.error('Network Error:', error.message)
      throw new Error(error.message || 'Could not reach the Gemini API.')
    }

    if (error instanceof Error) {
      throw error
    }

    console.error('Unexpected Error:', error)
    throw new Error('An unexpected error occurred.')
  }
}
