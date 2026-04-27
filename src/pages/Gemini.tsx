import React, { useState } from 'react';
import { Typography, Form, Input, Button, Space, Card, Divider } from 'antd';
import { SendOutlined, ReloadOutlined } from '@ant-design/icons';
import { generateGeminiContent } from '../api/gemini';
import './Gemini.css';

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

const Gemini: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<string>('');

  const handleSend = async (values: { prompt: string }) => {
    setLoading(true);
    try {
      const result = await generateGeminiContent(values.prompt);
      setResponse(result);
    } catch {
      setResponse("Error: Could not fetch response from Gemini API.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    form.resetFields();
    setResponse('');
  };

  return (
    <div className="gemini-page">
      <Space direction="vertical" size="large" className="gemini-stack">
        <div>
          <Title level={2}>Gemini AI Chat</Title>
          <Paragraph>
            Ask any question or provide a prompt, and the AI will generate a response.
          </Paragraph>
        </div>

        <Card bordered={false} className="gemini-card">
          <Form form={form} layout="vertical" onFinish={handleSend}>
            <Form.Item
              name="prompt"
              label={<strong>Your Prompt</strong>}
              rules={[{ required: true, message: 'Please enter a prompt.' }]}
            >
              <TextArea rows={5} placeholder="Type your message here..." className="gemini-textarea" />
            </Form.Item>

            <Space>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                icon={<SendOutlined />}
                className="gemini-send-btn"
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
          <Card title="AI Response" className="gemini-response-card">
            <div className="gemini-response-text">{response}</div>
            <Divider />
            <Button size="small" onClick={() => navigator.clipboard.writeText(response)}>
              Copy Response
            </Button>
          </Card>
        )}

      </Space>
    </div>
  );
};

export default Gemini;