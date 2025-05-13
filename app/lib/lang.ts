export const supportedLangs = ['en-US', 'hi', 'zh-TW'] as const;

export type Lang = (typeof supportedLangs)[number];