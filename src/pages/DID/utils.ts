const DID_API_BASE =
  (import.meta.env.VITE_DID_API_BASE as string | undefined)?.trim() ||
  (import.meta.env.DEV ? '/did-api' : 'https://api.d-id.com');

function getAuthHeader(): string {
  const raw = import.meta.env.VITE_DID_API_KEY;
  if (typeof raw !== 'string' || !raw.trim()) {
    throw new Error(
      'Missing VITE_DID_API_KEY. Add it to your .env file for D-ID requests.',
    );
  }
  const trimmed = raw.trim();
  const credentials = trimmed.includes(':') ? trimmed : `${trimmed}:`;
  return `Basic ${btoa(credentials)}`;
}

export interface CreateTalkParams {
  sourceUrl: string;
  voiceId: string;
  text: string;
}

export interface TalkResult {
  id: string;
  status: 'created' | 'started' | 'done' | 'error' | 'rejected';
  result_url?: string;
  error?: { kind: string; description: string };
}

export async function createTalk(params: CreateTalkParams): Promise<string> {
  const response = await fetch(`${DID_API_BASE}/talks`, {
    method: 'POST',
    headers: {
      Authorization: getAuthHeader(),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      source_url: params.sourceUrl,
      script: {
        type: 'text',
        input: params.text,
        provider: {
          type: 'microsoft',
          voice_id: params.voiceId,
        },
      },
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`D-ID createTalk failed (${response.status}): ${errorBody}`);
  }

  const data = (await response.json()) as { id: string };
  return data.id;
}

export async function pollTalk(talkId: string): Promise<TalkResult> {
  const response = await fetch(`${DID_API_BASE}/talks/${talkId}`, {
    headers: {
      Authorization: getAuthHeader(),
    },
  });

  if (!response.ok) {
    throw new Error(`D-ID pollTalk failed (${response.status})`);
  }

  return response.json() as Promise<TalkResult>;
}
