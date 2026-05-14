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
import { ReloadOutlined, VideoCameraOutlined } from '@ant-design/icons';
import avatarImg from '../../assets/did-avatar.png';
import { createTalk, pollTalk } from './utils';
import type { TalkResult } from './utils';
import styles from './styles.module.css';

const { Text } = Typography;

const DEFAULT_SOURCE_URL =
  'https://create-images-results.d-id.com/DefaultPresenters/Noelle_f/image.jpeg';

const POLL_INTERVAL_MS = 2000;
const POLL_TIMEOUT_MS = 120_000;

const VOICE_OPTIONS = [
  { value: 'en-US-JennyNeural', label: 'English — Jenny (en-US-JennyNeural)' },
  { value: 'en-US-GuyNeural', label: 'English — Guy (en-US-GuyNeural)' },
  { value: 'en-GB-SoniaNeural', label: 'English UK — Sonia (en-GB-SoniaNeural)' },
  { value: 'fr-FR-DeniseNeural', label: 'French — Denise (fr-FR-DeniseNeural)' },
  { value: 'fr-FR-HenriNeural', label: 'French — Henri (fr-FR-HenriNeural)' },
  { value: 'de-DE-KatjaNeural', label: 'German — Katja (de-DE-KatjaNeural)' },
  { value: 'es-ES-ElviraNeural', label: 'Spanish — Elvira (es-ES-ElviraNeural)' },
  { value: 'it-IT-ElsaNeural', label: 'Italian — Elsa (it-IT-ElsaNeural)' },
  { value: 'ar-AE-FatimaNeural', label: 'Arabic — Fatima (ar-AE-FatimaNeural)' },
  { value: 'hy-AM-AnahitNeural', label: 'Armenian — Anahit (hy-AM-AnahitNeural)' },
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

const DID: React.FC = () => {
  const [form] = Form.useForm<FormValues>();
  const [status, setStatus] = useState<Status>('idle');
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string>(DEFAULT_SOURCE_URL);
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

          if (result.status === 'error') {
            setStatus('error');
            messageApi.error(
              result.error?.description ?? 'D-ID returned an error status.',
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
    <div className={styles.page}>
      {contextHolder}

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
          components: {
            Button: {
              contentFontSize: 16,
              contentFontSizeLG: 16,
              contentFontSizeSM: 16,
              fontWeight: 500,
            },
          },
        }}
      >
        <section className={styles.main}>
          <div className={styles.shell}>
            <div className={styles.grid}>
              {/* Left column – avatar / video */}
              <div className={styles.mediaBlock}>
                <div className={styles.avatarWrap}>
                  {videoUrl ? (
                    <video
                      className={styles.resultVideo}
                      src={videoUrl}
                      controls
                      autoPlay
                      playsInline
                    />
                  ) : status === 'done' ? (
                    <div className={styles.resultPlaceholder}>
                      <VideoCameraOutlined className={styles.resultIcon} />
                      <Text type="secondary">Video URL unavailable</Text>
                    </div>
                  ) : (
                    <img
                      className={styles.avatarImg}
                      src={imageUrl || avatarImg}
                      alt="Avatar preview"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = avatarImg;
                      }}
                    />
                  )}
                </div>

                {status !== 'idle' && (
                  <Text className={styles.statusText}>{STATUS_LABELS[status]}</Text>
                )}
              </div>

              {/* Right column – form */}
              <div className={styles.formBlock}>
                <h2 className={styles.formTitle}>AI Avatar Generator</h2>

                <Form<FormValues>
                  form={form}
                  layout="vertical"
                  className={styles.form}
                  onFinish={onFinish}
                  initialValues={{ voice: 'en-US-JennyNeural', imageUrl: DEFAULT_SOURCE_URL }}
                >
                  <Form.Item
                    label="Source image URL"
                    name="imageUrl"
                    rules={[{ required: true, message: 'Please enter a source image URL' }]}
                    extra={
                      <Text className={styles.hint}>
                        Must be a reachable https (or s3) URL ending in .jpg, .jpeg, or .png.
                      </Text>
                    }
                  >
                    <Input
                      size="large"
                      placeholder="https://d-id-public-bucket.s3.us-west-2.amazonaws.com/alice.jpg"
                      onChange={(e) => setImageUrl(e.target.value)}
                    />
                  </Form.Item>

                  <Form.Item
                    label="Voice (Azure neural)"
                    name="voice"
                    rules={[{ required: true, message: 'Please select a voice' }]}
                  >
                    <Select
                      size="large"
                      options={VOICE_OPTIONS}
                      placeholder="Select a voice"
                    />
                  </Form.Item>

                  <Form.Item
                    label="What should the avatar say?"
                    name="text"
                    rules={[{ required: true, message: 'Please enter the script' }]}
                    extra={
                      <Text className={styles.hint}>
                        D-ID passes this as Microsoft TTS; ids match{' '}
                        <a
                          href="https://learn.microsoft.com/en-us/azure/ai-services/speech-service/language-support"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Azure neural voices
                        </a>
                        .
                      </Text>
                    }
                  >
                    <Input.TextArea
                      rows={6}
                      size="large"
                      placeholder="Hello, this is a quick test of animating a photo with D-ID."
                    />
                  </Form.Item>

                  <Form.Item style={{ marginBottom: 0 }}>
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

export default DID;
