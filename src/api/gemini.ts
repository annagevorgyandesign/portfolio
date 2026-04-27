import axios from 'axios';
import type { GeminiResponse, GeminiError } from '../types/gemini';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const MODEL = "gemini-2.5-flash";
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`;

export const generateGeminiContent = async (prompt: string): Promise<string> => {
  const payload = {
    contents: [
      {
        parts: [
          { text: prompt }
        ]
      }
    ]
  };

  try {
    const response = await axios.post<GeminiResponse>(API_URL, payload, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    // Extract text from the response structure defined in slides
    const generatedText = response.data.candidates?.[0]?.content?.parts?.[0]?.text;
    
    return generatedText || "";
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      const apiError = error.response.data as GeminiError;
      console.error("API Error:", apiError.error.message);
      return `Error: ${apiError.error.message}`;
    }
    
    console.error("Unexpected Error:", error);
    return "An unexpected error occurred.";
  }
};