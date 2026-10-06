/** Lambda Function URL used by the mobile app. Override with PUBLIC_AUTH_API_BASE. */
export const DEFAULT_AUTH_API_BASE =
  'https://gvh67vejz2flmzu2yxzxdhyima0hkhrk.lambda-url.eu-central-1.on.aws';

export const MIN_PASSWORD_LENGTH = 6;

export function getAuthApiBase(): string {
  const fromEnv = import.meta.env.PUBLIC_AUTH_API_BASE?.trim();
  return (fromEnv || DEFAULT_AUTH_API_BASE).replace(/\/$/, '');
}

/** Extra query the Lambda handler expects (same role as EXPO_PUBLIC_API_SECRET). */
export function getAuthApiQuery(): string {
  return import.meta.env.PUBLIC_AUTH_API_QUERY?.trim() ?? '';
}

export function buildAuthUrl(path: string): string {
  const base = getAuthApiBase();
  const p = path.startsWith('/') ? path : `/${path}`;
  const full = `${base}${p}`;
  const extra = getAuthApiQuery();
  if (!extra) return full;
  const sep = full.includes('?') ? '&' : '?';
  return `${full}${sep}${extra}`;
}

export async function postAuthJson<T>(path: string, body: unknown): Promise<T> {
  const res = await fetch(buildAuthUrl(path), {
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
