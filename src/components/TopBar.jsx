import { Megaphone, Lightbulb, LightbulbOff } from 'lucide-react';
import { useSettings, usePick } from '../store.jsx';
import { BrazilFlag, USAFlag } from './flags.jsx';
import { C } from '../theme.js';

export default function TopBar() {
  const { theme, toggleTheme, lang, setLang } = useSettings();
  const pick = usePick();

  return (
    <header
      className="shrink-0 h-13 flex items-center justify-between px-4 sm:px-6 z-40"
      style={{
        backgroundColor: C.surface,
        borderBottom: `1px solid ${C.line}`,
        boxShadow: '0 1px 4px rgba(0,0,0,.06)',
      }}
    >
      <div className="flex items-center gap-2.5 min-w-0">
        <span
          className="h-7 w-7 rounded-md flex items-center justify-center shrink-0"
          style={{ backgroundColor: C.blue }}
        >
          <Megaphone size={14} color="#fff" strokeWidth={2.3} />
        </span>
        <span className="font-semibold text-sm truncate hidden sm:inline" style={{ color: C.heading }}>
          {pick({ pt: 'Guia do Inbox de Leads · LSA', en: 'Leads Inbox Guide · LSA' })}
        </span>
        <span className="font-semibold text-sm sm:hidden" style={{ color: C.heading }}>
          LSA
        </span>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <div
          className="flex items-center rounded-full p-0.5"
          style={{ backgroundColor: C.card, border: `1px solid ${C.line}` }}
        >
          <FlagButton active={lang === 'pt'} onClick={() => setLang('pt')} label="Português (Brasil)">
            <BrazilFlag />
          </FlagButton>
          <FlagButton active={lang === 'en'} onClick={() => setLang('en')} label="English (US)">
            <USAFlag />
          </FlagButton>
        </div>

        <button
          type="button"
          onClick={toggleTheme}
          aria-label={pick({ pt: 'Alternar tema', en: 'Toggle theme' })}
          className="h-8 w-8 rounded-full flex items-center justify-center transition-colors"
          style={{
            backgroundColor: C.card,
            border: `1px solid ${C.line}`,
            color: theme === 'dark' ? C.muted : C.amber,
          }}
        >
          {theme === 'dark' ? <LightbulbOff size={16} /> : <Lightbulb size={16} />}
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
      className="px-1.5 py-1 rounded-full transition-all"
      style={{
        opacity: active ? 1 : 0.4,
        outline: active ? `2px solid ${C.blue}` : '2px solid transparent',
        outlineOffset: '-2px',
      }}
    >
      {children}
    </button>
  );
}
