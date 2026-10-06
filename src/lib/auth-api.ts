/** Lambda Function URL used by the mobile app. Override with PUBLIC_AUTH_API_BASE. */
export const DEFAULT_AUTH_API_BASE =
  'https://gvh67vejz2flmzu2yxzxdhyima0hkhrk.lambda-url.eu-central-1.on.aws';

export const MIN_PASSWORD_LENGTH = 6;

export function getAuthApiBase(): string {
  const fromEnv = import.meta.env.PUBLIC_AUTH_API_BASE?.trim();
  return (fromEnv || DEFAULT_AUTH_API_BASE).replace(/\/$/, '');
}

/** Lambda handler gate (same as the app). Email JWT stays in the JSON body only. */
export const LAMBDA_GATE_QUERY = 'token=doarbo';

export function buildAuthUrl(path: string): string {
  const base = getAuthApiBase();
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${base}${p}?${LAMBDA_GATE_QUERY}`;
}

export async function postAuthJson<T>(path: string, body: { token: string } & Record<string, unknown>): Promise<T> {
  const res = await fetch(`/api${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  const data = (await res.json().catch(() => ({}))) as Record<string, unknown>;

  if (!res.ok) {
    const message =
      typeof data.message === 'string'
        ? data.message
        : Array.isArray(data.message)
          ? data.message.join(', ')
          : typeof data.error === 'string'
            ? data.error
            : 'Request failed. Try again or request a new link in the app.';
    throw new Error(message);
  }

  return data as T;
}

export function readQueryToken(): string {
  if (typeof window === 'undefined') return '';
  return new URLSearchParams(window.location.search).get('token')?.trim() ?? '';
}

export function readQueryKind(): string {
  if (typeof window === 'undefined') return '';
  return new URLSearchParams(window.location.search).get('kind')?.trim() ?? '';
}
