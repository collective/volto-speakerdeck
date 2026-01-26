import type { SpeakerDeckOEmbedResponse } from './oembed';
import type { BlocksDataBlocks } from '@plone/types';

export interface LinkItem {
  '@id': string;
  [key: string]: unknown;
}

export interface BlockData extends BlocksDataBlocks {
  href?: LinkItem[];
  speakerdeckOembed?: SpeakerDeckOEmbedResponse;
  styles?: {
    align?: string;
    size?: string;
  };
  [key: string]: unknown;
}
