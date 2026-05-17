import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Button, Input, Spin, message } from 'antd'
import { CloseOutlined, SendOutlined } from '@ant-design/icons'
import { sendGeminiChat } from '../../api/gemini'
import type { GeminiChatTurn } from '../../types/gemini'
import { buildSystemInstruction } from '../../pages/Gemini/consts'
import {
  STICKY_CHAT_CLOSE_LABEL,
  STICKY_CHAT_HEADER,
  STICKY_CHAT_PLACEHOLDER,
  STICKY_CHAT_SEND_LABEL,
  STICKY_CHAT_TOGGLE_LABEL,
  STICKY_CHAT_WELCOME_LINES,
} from './consts'
import styles from './styles.module.css'

const ChatBubbleIcon: React.FC<{ className: string }> = ({ className }) => (
  <span className={className} aria-hidden />
)

export interface StickyChatBotProps {
  hidden?: boolean
}

const StickyChatBot: React.FC<StickyChatBotProps> = ({ hidden = false }) => {
  const [open, setOpen] = useState(false)
  const [draft, setDraft] = useState('')
  const [conversation, setConversation] = useState<GeminiChatTurn[]>([])
  const [loading, setLoading] = useState(false)
  const [messageApi, contextHolder] = message.useMessage()
  const scrollRef = useRef<HTMLDivElement>(null)

  const systemInstruction = useMemo(() => buildSystemInstruction(), [])

  const scrollToBottom = useCallback(() => {
    const el = scrollRef.current
    if (el) {
      el.scrollTop = el.scrollHeight
    }
  }, [])

  useEffect(() => {
    if (open) {
      scrollToBottom()
    }
  }, [conversation, loading, open, scrollToBottom])

  const submitUserText = async (raw: string) => {
    if (loading) {
      return
    }
    const text = raw.trim()
    if (!text) {
      messageApi.warning('Please enter a message.')
      return
    }

    const previous = conversation
    const historyForApi: GeminiChatTurn[] = [...previous, { role: 'user', text }]

    setConversation(historyForApi)
    setLoading(true)
    setDraft('')

    try {
      const reply = await sendGeminiChat(historyForApi, systemInstruction)
      setConversation([...historyForApi, { role: 'model', text: reply }])
    } catch (err) {
      setConversation(previous)
      setDraft(text)
      const detail =
        err instanceof Error ? err.message : 'Could not fetch response from Gemini API.'
      messageApi.error(detail)
    } finally {
      setLoading(false)
    }
  }

  const handleSend = () => {
    void submitUserText(draft)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      void submitUserText(draft)
    }
  }

  if (hidden) {
    return null
  }

  return (
    <>
      {contextHolder}
      <div className={styles.root} role="presentation">
        {open ? (
          <section className={styles.panel} aria-label="Portfolio assistant chat">
            <header className={styles.header}>
              <span className={styles.headerIcon} aria-hidden>
                <ChatBubbleIcon className={`${styles.chatIcon} ${styles.chatIconHeader}`} />
              </span>
              <h2 className={styles.headerTitle}>{STICKY_CHAT_HEADER}</h2>
              <Button
                type="text"
                icon={<CloseOutlined />}
                onClick={() => setOpen(false)}
                className={styles.closeBtn}
                aria-label={STICKY_CHAT_CLOSE_LABEL}
              />
            </header>

            <div ref={scrollRef} className={styles.messages}>
              <div className={styles.thread}>
                <div
                  className={`${styles.bubble} ${styles.bubbleModel} ${styles.welcomeBubble}`}
                >
                  {STICKY_CHAT_WELCOME_LINES.map((line) => (
                    <p key={line} className={styles.welcomeLine}>
                      {line}
                    </p>
                  ))}
                </div>

                {conversation.map((turn, index) => (
                  <div
                    key={`${turn.role}-${index}-${turn.text.slice(0, 24)}`}
                    className={`${styles.bubble} ${
                      turn.role === 'user' ? styles.bubbleUser : styles.bubbleModel
                    }`}
                  >
                    {turn.text}
                  </div>
                ))}

                {loading ? (
                  <div className={styles.loadingRow}>
                    <Spin size="small" />
                    <span>Thinking…</span>
                  </div>
                ) : null}
              </div>
            </div>

            <footer className={styles.footer}>
              <Input.TextArea
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={STICKY_CHAT_PLACEHOLDER}
                autoSize={{ minRows: 1, maxRows: 4 }}
                disabled={loading}
                className={styles.input}
                aria-label="Chat message"
              />
              <Button
                type="text"
                icon={<SendOutlined className={styles.sendIcon} />}
                onClick={handleSend}
                loading={loading}
                disabled={!draft.trim()}
                className={styles.sendBtn}
                aria-label={STICKY_CHAT_SEND_LABEL}
              />
            </footer>
          </section>
        ) : null}

        {!open ? (
          <Button
            type="primary"
            shape="circle"
            icon={<ChatBubbleIcon className={`${styles.chatIcon} ${styles.chatIconLauncher}`} />}
            onClick={() => setOpen(true)}
            className={styles.launcher}
            aria-label={STICKY_CHAT_TOGGLE_LABEL}
          />
        ) : null}
      </div>
    </>
  )
}

export default StickyChatBot
