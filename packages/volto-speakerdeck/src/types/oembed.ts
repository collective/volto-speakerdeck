export interface SpeakerDeckOEmbedResponse {
  type?: 'rich' | 'photo' | 'video' | 'link' | string;
  version?: number;
  html?: string;
  width?: number;
  height?: number;
  provider_name?: string;
  provider_url?: string;
  title?: string;
  author_name?: string;
  author_url?: string;
  thumbnail_url?: string;
  thumbnail_width?: number;
  thumbnail_height?: number;
  cache_age?: number;
  [key: string]: unknown;
}
