import React, { useState } from 'react';
import { Card, Form, Input, Button, Typography, Space, message, Divider } from 'antd';
import { SendOutlined, CopyOutlined, FileTextOutlined } from '@ant-design/icons';
import { generateGeminiContent } from '../api/gemini';
import './WriteMyCV.css';

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;

const WriteMyCV: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const handleGenerate = async (values: { role: string; skills?: string; experience?: string }) => {
    setLoading(true);
    
    const fullPrompt = `
      You are a professional career coach. Generate a high-quality CV section for a person with the following details:
      - Role: ${values.role}
      - Skills: ${values.skills}
      - Experience: ${values.experience}
      
      Instructions:
      1. Write a professional summary.
      2. Provide 3-4 impact bullet points for the experience section.
      3. Use professional and active English.
      4. Format the output with clear headers.
    `;

    try {
      const response = await generateGeminiContent(fullPrompt);
      setResult(response);
      message.success("CV content generated!");
    } catch {
      message.error("Failed to generate content.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="cv-page">
      <Space direction="vertical" size="large" className="cv-stack">
        <header>
          <Title level={2}>
            <FileTextOutlined /> AI CV Generator
          </Title>
          <Paragraph>
            Provide your details and let AI craft your professional story.
          </Paragraph>
        </header>

        <Card bordered={false} className="cv-card">
          <Form form={form} layout="vertical" onFinish={handleGenerate}>
            <Form.Item 
              name="role" 
              label={<Text strong>Target Job Role</Text>} 
              rules={[{ required: true }]}
            >
              <Input placeholder="e.g. Senior Frontend Engineer" />
            </Form.Item>

            <Form.Item name="skills" label={<Text strong>Key Skills</Text>}>
              <Input placeholder="e.g. React, TypeScript, Tailwind" />
            </Form.Item>

            <Form.Item name="experience" label={<Text strong>Experience Summary</Text>}>
              <TextArea rows={4} placeholder="Summarize your main responsibilities..." />
            </Form.Item>

            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              icon={<SendOutlined />}
              block
              className="cv-generate-btn"
            >
              Generate Content
            </Button>
          </Form>
        </Card>

        {result && (
          <Card
            title="Generated Result"
            extra={<Button type="link" icon={<CopyOutlined />} onClick={() => {
              navigator.clipboard.writeText(result);
              message.success("Copied!");
            }}>Copy</Button>}
          >
            <div className="cv-result-text">
              {result}
            </div>
            
            <Divider />
            
            <Paragraph type="secondary">
              Review this text, then manually copy and paste it into src/data/cv-data.ts.
            </Paragraph>
          </Card>
        )}

      </Space>
    </div>
  );
};

export default WriteMyCV;