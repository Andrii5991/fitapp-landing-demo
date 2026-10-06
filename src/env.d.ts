/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_AUTH_API_BASE?: string;
  readonly PUBLIC_AUTH_API_QUERY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
