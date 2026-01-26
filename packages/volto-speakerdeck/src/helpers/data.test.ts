import { describe, it, expect } from 'vitest';
import { oEmbedURL } from './data';

describe('URL', () => {
  describe('oEmbedURL', () => {
    it('accepts valid urls', () => {
      expect(
        oEmbedURL('https://speakerdeck.com/ericof/nem-tudo-e-codigo'),
      ).toEqual(
        'https://speakerdeck.com/oembed.json?url=https://speakerdeck.com/ericof/nem-tudo-e-codigo',
      );
      expect(oEmbedURL('https://speakerdeck.com/ericof/other')).toEqual(
        'https://speakerdeck.com/oembed.json?url=https://speakerdeck.com/ericof/other',
      );
    });
    it('denies invalid urls', () => {
      expect(() => oEmbedURL('https://speakerdeck.com/ericof')).toThrow(
        'Invalid Speakerdeck URL',
      );
      expect(() => oEmbedURL('https://speakerdeck.com')).toThrow(
        'Invalid Speakerdeck URL',
      );
    });
  });
});
