/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Canonical production origin used for absolute social/canonical URLs (e.g. https://inmobiliariamym.com.co). */
  readonly VITE_SITE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
