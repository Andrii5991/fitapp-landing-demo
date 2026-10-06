import type { APIRoute } from 'astro';
import { buildAuthUrl } from '../../../lib/auth-api';

export const prerender = false;

const ALLOWED = new Set(['reset-password', 'verify-email']);

export const POST: APIRoute = async ({ params, request }) => {
  const rest = Array.isArray(params.path) ? params.path.join('/') : (params.path ?? '');
  const action = rest.split('/').pop() ?? '';
  if (!ALLOWED.has(action)) {
    return new Response(JSON.stringify({ error: 'Not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  let body: { token?: string; password?: string };
  try {
    body = (await request.json()) as { token?: string; password?: string };
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (!body.token || typeof body.token !== 'string') {
    return new Response(JSON.stringify({ error: 'Missing token' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const lambdaRes = await fetch(buildAuthUrl(`/auth/${action}`), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  const text = await lambdaRes.text();
  return new Response(text, {
    status: lambdaRes.status,
    headers: { 'Content-Type': lambdaRes.headers.get('Content-Type') || 'application/json' },
  });
};
