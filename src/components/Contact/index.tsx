import React, { useState } from 'react';
import {
  Button,
  ConfigProvider,
  Form,
  Input,
  message,
  theme,
} from 'antd';
import { EnvironmentOutlined, MailOutlined } from '@ant-design/icons';
import heroImage from '../../assets/hero.png';
import { CONTACT_COPY, CONTACT_TOPICS } from './consts';
import styles from './styles.module.css';

export interface ContactFormValues {
  fullName: string;
  email: string;
  phone?: string;
  message: string;
}

const JSON_PLACEHOLDER_URL = 'https://jsonplaceholder.typicode.com/posts';

const Contact: React.FC = () => {
  const [form] = Form.useForm<ContactFormValues>();
  const [submitting, setSubmitting] = useState(false);

  const onFinish = async (values: ContactFormValues) => {
    setSubmitting(true);
    try {
      const response = await fetch(JSON_PLACEHOLDER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: `Contact from ${values.fullName}`,
          body: values.message,
          userId: 1,
          email: values.email,
          phone: values.phone ?? '',
        }),
      });

      if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
      }

      form.resetFields();
      void message.success(CONTACT_COPY.successMessage);
    } catch {
      void message.error(CONTACT_COPY.errorMessage);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-label="Contact hero">
        <img
          className={styles.heroImage}
          src={heroImage}
          alt=""
          decoding="async"
        />
        <div className={styles.heroOverlay} />
        <h1 className={styles.heroTitle}>{CONTACT_COPY.heroTitle}</h1>
      </section>

      <ConfigProvider
        theme={{
          algorithm: theme.defaultAlgorithm,
          token: {
            colorPrimary: '#FA8C16',
            borderRadius: 8,
            fontFamily: 'Inter, Segoe UI, Roboto, Arial, sans-serif',
            colorText: '#111',
            colorTextSecondary: '#4a4a4a',
            colorBorder: '#d9d9d9',
          },
        }}
      >
        <section className={styles.main}>
          <div className={styles.shell}>
            <div className={styles.grid}>
              <div className={styles.infoBlock}>
                <div className={styles.infoIntro}>
                  <h2 className={styles.infoTitle}>
                    <span className={styles.infoTitleSegment}>
                      {CONTACT_COPY.infoTitleLead}{' '}
                    </span>
                    <span className={styles.infoTitleAccent}>
                      {CONTACT_COPY.infoTitleAccent}
                    </span>
                    <span className={styles.infoTitleSegment}>
                      {' '}
                      {CONTACT_COPY.infoTitleTrail}
                    </span>
                  </h2>
                  <p className={styles.lead}>{CONTACT_COPY.infoSubheading}</p>
                </div>
                <div className={styles.infoTopics}>
                  <p className={styles.topicsHeading}>{CONTACT_COPY.topicsHeading}</p>
                  <ul className={styles.topicList}>
                    {CONTACT_TOPICS.map((topic) => (
                      <li key={topic}>{topic}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.contactRows}>
                  <div className={styles.locationRow}>
                    <MailOutlined className={styles.locationIcon} aria-hidden />
                    <a className={styles.emailLink} href={`mailto:${CONTACT_COPY.contactEmail}`}>
                      {CONTACT_COPY.contactEmail}
                    </a>
                  </div>
                  <div className={styles.locationRow}>
                    <EnvironmentOutlined className={styles.locationIcon} aria-hidden />
                    <span>{CONTACT_COPY.locationLabel}</span>
                  </div>
                </div>
              </div>

              <div className={styles.formBlock}>
                <Form<ContactFormValues>
                  form={form}
                  layout="vertical"
                  className={styles.form}
                  onFinish={onFinish}
                  scrollToFirstError
                >
                  <Form.Item
                    label="Full name"
                    name="fullName"
                    rules={[{ required: true, message: 'Please enter your full name' }]}
                  >
                    <Input placeholder="Your full name" size="large" />
                  </Form.Item>
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      { required: true, message: 'Please enter your email' },
                      { type: 'email', message: 'Please enter a valid email' },
                    ]}
                  >
                    <Input placeholder="you@example.com" size="large" />
                  </Form.Item>
                  <Form.Item label="Phone (optional)" name="phone">
                    <Input placeholder="+374 00 00 00 00" size="large" />
                  </Form.Item>
                  <Form.Item
                    label="Message"
                    name="message"
                    rules={[{ required: true, message: 'Please enter a message' }]}
                  >
                    <Input.TextArea
                      placeholder={CONTACT_COPY.messagePlaceholder}
                      rows={5}
                      size="large"
                    />
                  </Form.Item>
                  <Form.Item className={styles.submitRow}>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className={styles.submitBtn}
                      loading={submitting}
                    >
                      {CONTACT_COPY.submitLabel}
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        </section>
      </ConfigProvider>
    </div>
  );
};

export default Contact;
