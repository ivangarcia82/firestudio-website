/// <reference types="astro/client" />

interface ImportMetaEnv {
  /** Meta Pixel id. When unset, the pixel is not loaded at all. */
  readonly PUBLIC_META_PIXEL_ID?: string;
  /** GA4 measurement id. When unset, GA4 is not loaded at all. */
  readonly PUBLIC_GA4_ID?: string;
  /** HubSpot private app token. Server-side only — never exposed to the client. */
  readonly HUBSPOT_PRIVATE_APP_TOKEN?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

/** Conversion tracking, defined by `src/components/Analytics.astro`. */
type FsTrackIntent = 'lead' | 'contact' | 'schedule';

interface Window {
  fsTrack?: (intent: FsTrackIntent, params?: Record<string, unknown>) => void;
  fsConsentGranted?: () => boolean;
  fbq?: (...args: unknown[]) => void;
  gtag?: (...args: unknown[]) => void;
  dataLayer?: unknown[];
}
