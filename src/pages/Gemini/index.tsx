import React, { useState } from 'react';
import { Typography, Form, Input, Button, Space, Card, Divider, message } from 'antd';
import { SendOutlined, ReloadOutlined } from '@ant-design/icons';
import { generateGeminiContent } from '../../api/gemini';
import styles from './styles.module.css';

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

const Gemini: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<string>('');
  const [messageApi, contextHolder] = message.useMessage();

  const handleSend = async (values: { prompt: string }) => {
    setLoading(true);
    try {
      const result = await generateGeminiContent(values.prompt);
      setResponse(result);
    } catch (err) {
      const detail =
        err instanceof Error ? err.message : 'Could not fetch response from Gemini API.';
      setResponse(`Error: ${detail}`);
      messageApi.error('Failed to fetch Gemini response.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    form.resetFields();
    setResponse('');
  };

  const copyResponse = async () => {
    try {
      await navigator.clipboard.writeText(response);
      messageApi.success('Response copied to clipboard.');
    } catch {
      messageApi.error('Could not copy response.');
    }
  };

  return (
    <div className={styles.geminiPage}>
      {contextHolder}
      <Space direction="vertical" size="large" className={styles.geminiStack}>
        <div>
          <Title level={2}>Gemini AI Chat</Title>
          <Paragraph>Ask any question or provide a prompt, and the AI will generate a response.</Paragraph>
        </div>

        <Card bordered={false} className={styles.geminiCard}>
          <Form form={form} layout="vertical" onFinish={handleSend}>
            <Form.Item
              name="prompt"
              label={<strong>Your Prompt</strong>}
              rules={[{ required: true, message: 'Please enter a prompt.' }]}
            >
              <TextArea rows={5} placeholder="Type your message here..." className={styles.geminiTextarea} />
            </Form.Item>

            <Space>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                icon={<SendOutlined />}
                className={styles.geminiSendBtn}
              >
                Send Request
              </Button>
              <Button onClick={handleReset} icon={<ReloadOutlined />}>
                Clear
              </Button>
            </Space>
          </Form>
        </Card>

        {response && (
          <Card title="AI Response" className={styles.geminiResponseCard}>
            <div className={styles.geminiResponseText}>{response}</div>
            <Divider />
            <Button size="small" onClick={copyResponse}>
              Copy Response
            </Button>
          </Card>
        )}
      </Space>
    </div>
  );
};

export default Gemini;
