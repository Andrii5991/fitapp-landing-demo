/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_AUTH_API_BASE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
