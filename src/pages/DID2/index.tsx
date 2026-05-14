import React, { useCallback, useRef, useState } from 'react';
import {
  Button,
  ConfigProvider,
  Form,
  Input,
  message,
  Select,
  theme,
  Typography,
} from 'antd';
import { LinkOutlined, ReloadOutlined } from '@ant-design/icons';
import { createTalk, pollTalk } from './utils';
import type { TalkResult } from './utils';
import styles from './styles.module.css';

const { Text } = Typography;

const DEFAULT_SOURCE_URL =
  'https://create-images-results.d-id.com/DefaultPresenters/Noelle_f/image.jpeg';

const POLL_INTERVAL_MS = 2000;
const POLL_TIMEOUT_MS = 120_000;

const VOICE_OPTIONS = [
  { value: '21m00Tcm4TlvDq8ikWAM', label: 'English — Rachel (elevenlabs)' },
  { value: 'AZnzlk1XvdvUeBnXmlld', label: 'English — Domi (elevenlabs)' },
  { value: 'EXAVITQu4vr4xnSDxMaL', label: 'English — Bella (elevenlabs)' },
  { value: 'ErXwobaYiN019PkySvjV', label: 'English — Antoni (elevenlabs)' },
  { value: 'MF3mGyEYCl7XYWbV9V6O', label: 'English — Elli (elevenlabs)' },
  { value: 'TxGEqnHWrfWFTfGW9XjX', label: 'English — Josh (elevenlabs)' },
  { value: 'VR6AewLTigWG4xSOukaG', label: 'English — Arnold (elevenlabs)' },
  { value: 'pNInz6obpgDQGcFmaJgB', label: 'English — Adam (elevenlabs)' },
  { value: 'yoZ06aMxZJJ28mfd3POQ', label: 'English — Sam (elevenlabs)' },
  { value: 'ThT5KcBeYPX3keUQqHPh', label: 'English — Dorothy (elevenlabs)' },
  { value: 'D38z5RcWu1voky8WS1ja', label: 'English — Fin (elevenlabs)' },
  { value: 'IKne3meq5aSn9XLyUdCD', label: 'English — Charlie (elevenlabs)' },
  { value: 'XB0fDUnXU5powFXDhCwa', label: 'English — Charlotte (elevenlabs)' },
  { value: 'onwK4e9ZLuTAKqWW03F9', label: 'English — Daniel (elevenlabs)' },
  { value: 'cgSgspJ2msm6clMCkdW9', label: 'English — Jessica (elevenlabs)' },
];

interface FormValues {
  imageUrl: string;
  voice: string;
  text: string;
}

type Status = 'idle' | 'creating' | 'polling' | 'done' | 'error';

const STATUS_LABELS: Record<Status, string> = {
  idle: '',
  creating: 'Submitting to D-ID…',
  polling: 'Generating video, please wait…',
  done: 'Video ready!',
  error: 'Something went wrong. Please try again.',
};

const DID2: React.FC = () => {
  const [form] = Form.useForm<FormValues>();
  const [status, setStatus] = useState<Status>('idle');
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [messageApi, contextHolder] = message.useMessage();
  const pollTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearPollTimer = () => {
    if (pollTimerRef.current !== null) {
      clearTimeout(pollTimerRef.current);
      pollTimerRef.current = null;
    }
  };

  const startPolling = useCallback(
    (talkId: string, deadline: number) => {
      setStatus('polling');

      const tick = async () => {
        if (Date.now() > deadline) {
          setStatus('error');
          messageApi.error('Timed out waiting for D-ID to generate the video.');
          return;
        }

        try {
          const result: TalkResult = await pollTalk(talkId);

          if (result.status === 'done' && result.result_url) {
            setVideoUrl(result.result_url);
            setStatus('done');
            return;
          }

          if (result.status === 'error' || result.status === 'rejected') {
            setStatus('error');
            messageApi.error(
              result.error?.description ??
                (result.status === 'rejected'
                  ? 'D-ID rejected this talk.'
                  : 'D-ID returned an error status.'),
            );
            return;
          }

          pollTimerRef.current = setTimeout(() => void tick(), POLL_INTERVAL_MS);
        } catch (err) {
          setStatus('error');
          messageApi.error(err instanceof Error ? err.message : 'Polling failed.');
        }
      };

      void tick();
    },
    [messageApi],
  );

  const onFinish = async (values: FormValues) => {
    clearPollTimer();
    setVideoUrl(null);
    setStatus('creating');

    try {
      const talkId = await createTalk({
        sourceUrl: values.imageUrl || DEFAULT_SOURCE_URL,
        voiceId: values.voice,
        text: values.text,
      });
      startPolling(talkId, Date.now() + POLL_TIMEOUT_MS);
    } catch (err) {
      setStatus('error');
      messageApi.error(err instanceof Error ? err.message : 'Failed to create talk.');
    }
  };

  const handleReset = () => {
    clearPollTimer();
    form.resetFields();
    setVideoUrl(null);
    setStatus('idle');
  };

  const isLoading = status === 'creating' || status === 'polling';

  return (
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
    <div className={styles.page}>
      {contextHolder}

      <section className={styles.main}>
        <div className={styles.shell}>
          <h1 className={styles.pageTitle}>
            <span className={styles.accent}>Video</span> Avatar
          </h1>

          <div className={styles.columns}>
            {/* Left: form card */}
            <div className={styles.card}>
              <Form<FormValues>
                form={form}
                layout="vertical"
                className={styles.form}
                onFinish={onFinish}
                initialValues={{ voice: '21m00Tcm4TlvDq8ikWAM', imageUrl: DEFAULT_SOURCE_URL }}
              >
                <Form.Item
                  label="Source image URL"
                  name="imageUrl"
                  rules={[{ required: true, message: 'Please enter a source image URL' }]}
                  extra={
                    <Text className={styles.hint}>
                      Must be a reachable https (or s3) URL. You can use any image URL.
                    </Text>
                  }
                >
                  <Input
                    placeholder="https://d-id-public-bucket.s3.us-west-2.amazonaws.com/alice.jpg"
                  />
                </Form.Item>

                <Form.Item
                  label="What should the avatar say?"
                  name="text"
                  rules={[{ required: true, message: 'Please enter the script' }]}
                >
                  <Input.TextArea
                    rows={5}
                    placeholder="Enter the text you want the avatar to say."
                  />
                </Form.Item>

                <Form.Item
                  label="Voice / TTS"
                  name="voice"
                  rules={[{ required: true, message: 'Please select a voice' }]}
                >
                  <Select options={VOICE_OPTIONS} placeholder="Select a voice" />
                </Form.Item>

                <Form.Item className={styles.actionsItem}>
                  <div className={styles.buttonRow}>
                    <Button
                      htmlType="submit"
                      loading={isLoading}
                      className={styles.createBtn}
                    >
                      Create video
                    </Button>
                    <Button
                      onClick={handleReset}
                      disabled={isLoading}
                      icon={<ReloadOutlined />}
                      className={styles.resetBtn}
                    >
                      Reset
                    </Button>
                  </div>
                  {status !== 'idle' && (
                    <Text className={styles.statusText}>{STATUS_LABELS[status]}</Text>
                  )}
                </Form.Item>
              </Form>
            </div>

            {/* Right: result card */}
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>Result</h2>

              <div className={styles.resultBox}>
                {videoUrl ? (
                  <video
                    className={styles.resultVideo}
                    src={videoUrl}
                    controls
                    autoPlay
                    playsInline
                  />
                ) : (
                  <p className={styles.resultPlaceholder}>
                    The rendered video appears here when ready.
                  </p>
                )}
              </div>

              {videoUrl && (
                <a
                  href={videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.openLink}
                >
                  <LinkOutlined /> Open video in a new tab
                </a>
              )}
              {!videoUrl && (
                <p className={styles.openLinkPlaceholder}>The rendered video appears here when ready.</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
    </ConfigProvider>
  );
};

export default DID2;
