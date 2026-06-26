import { Megaphone, Lightbulb, LightbulbOff } from 'lucide-react';
import { useSettings, usePick } from '../store.jsx';
import { BrazilFlag, USAFlag } from './flags.jsx';
import { C } from '../theme.js';

export default function TopBar() {
  const { theme, toggleTheme, lang, setLang } = useSettings();
  const pick = usePick();

  return (
    <header
      className="shrink-0 h-14 flex items-center justify-between px-3 sm:px-5 z-40"
      style={{ backgroundColor: C.surface, borderBottom: `1px solid ${C.line}` }}
    >
      <div className="flex items-center gap-2.5 min-w-0">
        <span className="h-8 w-8 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: C.blue }}>
          <Megaphone size={17} color="#fff" />
        </span>
        <span className="font-bold text-sm sm:text-base truncate" style={{ color: C.heading }}>
          {pick({ pt: 'Guia do Inbox de Leads — LSA', en: 'Leads Inbox Guide — LSA' })}
        </span>
      </div>

      <div className="flex items-center gap-2 sm:gap-3 shrink-0">
        {/* Idioma */}
        <div className="flex items-center rounded-full p-0.5" style={{ backgroundColor: C.card, border: `1px solid ${C.line}` }}>
          <FlagButton active={lang === 'pt'} onClick={() => setLang('pt')} label="Português (Brasil)">
            <BrazilFlag />
          </FlagButton>
          <FlagButton active={lang === 'en'} onClick={() => setLang('en')} label="English (US)">
            <USAFlag />
          </FlagButton>
        </div>

        {/* Tema */}
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={pick({ pt: 'Alternar tema claro/escuro', en: 'Toggle light/dark theme' })}
          title={pick({ pt: 'Tema claro/escuro', en: 'Light/dark theme' })}
          className="h-9 w-9 rounded-full flex items-center justify-center transition-colors"
          style={{ backgroundColor: C.card, border: `1px solid ${C.line}`, color: theme === 'dark' ? C.muted : C.amber }}
        >
          {theme === 'dark' ? <LightbulbOff size={18} /> : <Lightbulb size={18} />}
        </button>
      </div>
    </header>
  );
}

function FlagButton({ active, onClick, label, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      aria-pressed={active}
      className="px-2 py-1 rounded-full transition-all"
      style={{
        opacity: active ? 1 : 0.45,
        outline: active ? `2px solid ${C.blue}` : '2px solid transparent',
        outlineOffset: '-2px',
      }}
    >
      {children}
    </button>
  );
}
