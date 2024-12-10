import React from 'react';
import { SUPPORTED_LANGUAGES, SupportedLanguage } from '../../lib/constants/languages';

interface LanguageSelectorProps {
  value: SupportedLanguage;
  onChange: (language: SupportedLanguage) => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ value, onChange }) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as SupportedLanguage)}
      className="px-3 py-2 border border-gray-300 rounded-md"
    >
      {Object.entries(SUPPORTED_LANGUAGES).map(([key, label]) => (
        <option key={key} value={key}>
          {label}
        </option>
      ))}
    </select>
  );
};