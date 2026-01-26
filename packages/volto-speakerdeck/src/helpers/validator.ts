export const isValidSpeakerdeckUrl = (value: string): boolean => {
  const pattern: RegExp = /^https:\/\/speakerdeck\.com\/[\w-]+\/.+/i;
  return pattern.test(value);
};
