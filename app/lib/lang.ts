export const supportedLangs = ['en-US', 'hi-IN', 'zh-TW'] as const;

export type Lang = (typeof supportedLangs)[number];