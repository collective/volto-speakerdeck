import { getProxiedExternalContent } from '@eeacms/volto-corsproxy/actions';
import { isValidSpeakerdeckUrl } from './validator';
import type { SpeakerDeckOEmbedResponse } from '../types/oembed';

export function oEmbedURL(href: string): string {
  if (!isValidSpeakerdeckUrl(href)) {
    throw new Error('Invalid Speakerdeck URL');
  }
  return encodeURI(`https://speakerdeck.com/oembed.json?url=${href}`);
}

export async function fetchSpeakerdeckOembed(
  dispatch: any,
  href: string,
): Promise<SpeakerDeckOEmbedResponse> {
  const url = oEmbedURL(href);
  const oembed = await dispatch(
    getProxiedExternalContent(url, {
      headers: { Accept: 'application/json' },
    }),
  );
  return oembed || {};
}
