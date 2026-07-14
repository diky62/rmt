import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'id';

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: <T>(translations: { en: T; id: T }) => T;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Clear default to 'en' (English as default) or load from localStorage if already saved
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('rmt_language');
    return (saved === 'id' ? 'id' : 'en');
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('rmt_language', lang);
  };

  // Helper function to resolve the translation object based on target language
  const t = <T,>(translations: { en: T; id: T }): T => {
    return translations[language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
