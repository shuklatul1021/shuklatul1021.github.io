export const SUPPORTED_LANGUAGES = {
  python: 'Python',
  cpp: 'C++',
  java: 'Java'
} as const;

export type SupportedLanguage = keyof typeof SUPPORTED_LANGUAGES;