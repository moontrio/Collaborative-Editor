import React from 'react';
import { languages } from '../utils/languages';

interface LanguageSelectorProps {
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
}

export default function LanguageSelector({ selectedLanguage, onLanguageChange }: LanguageSelectorProps) {
  return (
    <select
      value={selectedLanguage}
      onChange={(e) => onLanguageChange(e.target.value)}
      className="bg-gray-700 text-white border border-gray-600 rounded-md px-3 py-1.5 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
    >
      {languages.map((lang) => (
        <option key={lang.id} value={lang.name}>
          {lang.name}
        </option>
      ))}
    </select>
  );
}