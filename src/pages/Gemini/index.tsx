import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  Typography,
  Form,
  Input,
  Button,
  Space,
  Card,
  message,
  Tag,
  Spin,
} from 'antd'
import { SendOutlined, ReloadOutlined, FileTextOutlined } from '@ant-design/icons'
import { sendGeminiChat } from '../../api/gemini'
import type { GeminiChatTurn } from '../../types/gemini'
import {
  BUTTON_ROW_GAP_PX,
  buildSystemInstruction,
  GEMINI_CONVERSATION_LABEL,
  GEMINI_HEADING,
  GEMINI_HINT_TEXT,
  GEMINI_RESUME_PAGE_NOTE_PARTS,
  GEMINI_SHOW_RESUME_LABEL,
  GEMINI_SUBTITLE,
  GEMINI_WELCOME_MESSAGE,
  SHOW_RESUME_USER_PROMPT,
  SUGGESTED_PROMPTS,
} from './consts'
import styles from './styles.module.css'

const { Title, Paragraph, Text } = Typography

export interface GeminiProps {
  onOpenCv?: () => void
}

const Gemini: React.FC<GeminiProps> = ({ onOpenCv }) => {
  const [form] = Form.useForm<{ message: string }>()
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
    scrollToBottom()
  }, [conversation, loading, scrollToBottom])

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
    form.resetFields(['message'])

    try {
      const reply = await sendGeminiChat(historyForApi, systemInstruction)
      setConversation([...historyForApi, { role: 'model', text: reply }])
    } catch (err) {
      setConversation(previous)
      const detail =
        err instanceof Error ? err.message : 'Could not fetch response from Gemini API.'
      messageApi.error(detail)
    } finally {
      setLoading(false)
    }
  }

  const handleSend = async (values: { message: string }) => {
    await submitUserText(values.message ?? '')
  }

  const handleShowResume = () => {
    void submitUserText(SHOW_RESUME_USER_PROMPT)
  }

  const handleClear = () => {
    form.resetFields()
    setConversation([])
  }

  return (
    <div className={styles.geminiPage}>
      {contextHolder}
      <Space direction="vertical" size="large" className={styles.geminiStack}>
        <header className={styles.geminiHero}>
          <Title level={2} className={styles.geminiMainTitle}>
            {GEMINI_HEADING}
          </Title>
          <Paragraph className={styles.geminiSubtitle}>{GEMINI_SUBTITLE}</Paragraph>
        </header>

        <Space wrap size={BUTTON_ROW_GAP_PX} className={styles.geminiActionsRow}>
          <Button
            type="default"
            icon={<FileTextOutlined />}
            onClick={handleShowResume}
            className={styles.geminiOutlineBtn}
          >
            {GEMINI_SHOW_RESUME_LABEL}
          </Button>
          {onOpenCv ? (
            <Button type="link" onClick={onOpenCv} className={styles.geminiCvLink}>
              <span className={styles.geminiCvLinkRest}>{GEMINI_RESUME_PAGE_NOTE_PARTS.before}</span>
              <span className={styles.geminiCvLinkHighlight}>
                {GEMINI_RESUME_PAGE_NOTE_PARTS.highlight}
              </span>
              <span className={styles.geminiCvLinkRest}>{GEMINI_RESUME_PAGE_NOTE_PARTS.after}</span>
            </Button>
          ) : (
            <Text type="secondary" className={styles.geminiCvNote}>
              <span className={styles.geminiCvLinkRest}>{GEMINI_RESUME_PAGE_NOTE_PARTS.before}</span>
              <span className={styles.geminiCvLinkHighlight}>
                {GEMINI_RESUME_PAGE_NOTE_PARTS.highlight}
              </span>
              <span className={styles.geminiCvLinkRest}>{GEMINI_RESUME_PAGE_NOTE_PARTS.after}</span>
            </Text>
          )}
        </Space>

        <Card bordered={false} className={styles.geminiChatCard} title={GEMINI_CONVERSATION_LABEL}>
          <Paragraph type="secondary" className={styles.geminiHint}>
            {GEMINI_HINT_TEXT}
          </Paragraph>

          <div ref={scrollRef} className={styles.chatScroll}>
            <div className={styles.chatThread}>
              <div className={`${styles.bubble} ${styles.bubbleModel}`}>
                <Text className={styles.bubbleText}>{GEMINI_WELCOME_MESSAGE}</Text>
              </div>

              {conversation.map((turn, index) => (
                <div
                  key={`${turn.role}-${index}-${turn.text.slice(0, 24)}`}
                  className={`${styles.bubble} ${
                    turn.role === 'user' ? styles.bubbleUser : styles.bubbleModel
                  }`}
                >
                  <Text className={styles.bubbleText}>{turn.text}</Text>
                </div>
              ))}

              {loading ? (
                <div className={styles.chatLoading}>
                  <Spin size="small" />
                  <Text type="secondary">Thinking…</Text>
                </div>
              ) : null}
            </div>
          </div>

          <div className={styles.suggestedRow}>
            <Text type="secondary" className={styles.suggestedLabel}>
              Quick prompts:
            </Text>
            <div className={styles.suggestedTagsScroll}>
              <Space wrap className={styles.suggestedTagsSpace}>
                {SUGGESTED_PROMPTS.map((p) => (
                  <Tag
                    key={p}
                    className={styles.suggestedTag}
                    onClick={() => void submitUserText(p)}
                  >
                    {p}
                  </Tag>
                ))}
              </Space>
            </div>
          </div>

          <Form form={form} layout="vertical" onFinish={handleSend} className={styles.chatForm}>
            <Form.Item name="message" className={styles.chatFormItem}>
              <Input.TextArea
                rows={4}
                placeholder="Message"
                className={styles.geminiTextarea}
                onPressEnter={(e) => {
                  if (!e.shiftKey) {
                    e.preventDefault()
                    void form.submit()
                  }
                }}
              />
            </Form.Item>

            <Space wrap size={BUTTON_ROW_GAP_PX}>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                icon={<SendOutlined />}
                className={styles.geminiSendBtn}
              >
                Send
              </Button>
              <Button
                onClick={handleClear}
                icon={<ReloadOutlined />}
                disabled={loading}
                className={styles.geminiGhostBtn}
              >
                Clear chat
              </Button>
            </Space>
          </Form>
        </Card>
      </Space>
    </div>
  )
}

export default Gemini
