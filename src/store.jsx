import { createContext, useContext, useEffect, useState, useCallback } from 'react';

const SettingsContext = createContext(null);

const THEME_KEY = 'lsa-theme';
const LANG_KEY = 'lsa-lang';

function readInitial(key, fallback) {
  try {
    return localStorage.getItem(key) || fallback;
  } catch {
    return fallback;
  }
}

export function SettingsProvider({ children }) {
  const [theme, setThemeState] = useState(() => readInitial(THEME_KEY, 'light'));
  const [lang, setLangState] = useState(() => readInitial(LANG_KEY, 'pt'));

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem(THEME_KEY, theme); } catch { /* ignore */ }
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en-US';
    try { localStorage.setItem(LANG_KEY, lang); } catch { /* ignore */ }
  }, [lang]);

  const toggleTheme = useCallback(() => setThemeState((t) => (t === 'dark' ? 'light' : 'dark')), []);
  const setLang = useCallback((l) => setLangState(l), []);

  return (
    <SettingsContext.Provider value={{ theme, toggleTheme, lang, setLang }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error('useSettings deve ser usado dentro de <SettingsProvider>');
  return ctx;
}

export const useLang = () => useSettings().lang;

// Helper para textos bilíngues: pick({ pt: '...', en: '...' })
export function usePick() {
  const lang = useLang();
  return useCallback((obj) => obj[lang], [lang]);
}
