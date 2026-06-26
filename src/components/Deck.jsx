import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { slides } from '../slides/index.jsx';
import { C } from '../theme.js';

const variants = {
  enter: (dir) => ({ x: dir >= 0 ? '100%' : '-100%', opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir >= 0 ? '-100%' : '100%', opacity: 0 }),
};

export default function Deck() {
  const N = slides.length;
  const [[index, dir], setState] = useState([0, 0]);

  const go = useCallback(
    (d) =>
      setState(([i]) => {
        const ni = Math.min(Math.max(i + d, 0), N - 1);
        return [ni, ni === i ? 0 : d];
      }),
    [N],
  );

  const goTo = useCallback(
    (target) => setState(([i]) => [Math.min(Math.max(target, 0), N - 1), target >= i ? 1 : -1]),
    [N],
  );

  // Navegação por teclado (setas, espaço, Home/End)
  useEffect(() => {
    const onKey = (e) => {
      if (['ArrowRight', 'PageDown', ' '].includes(e.key)) {
        e.preventDefault();
        go(1);
      } else if (['ArrowLeft', 'PageUp'].includes(e.key)) {
        e.preventDefault();
        go(-1);
      } else if (e.key === 'Home') {
        goTo(0);
      } else if (e.key === 'End') {
        goTo(N - 1);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [go, goTo, N]);

  // Swipe no mobile (só conta deslize predominantemente horizontal,
  // preservando a rolagem vertical do slide)
  const touch = useRef(null);
  const onTouchStart = (e) => {
    touch.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  };
  const onTouchEnd = (e) => {
    if (!touch.current) return;
    const dx = e.changedTouches[0].clientX - touch.current.x;
    const dy = e.changedTouches[0].clientY - touch.current.y;
    if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy) * 1.5) go(dx < 0 ? 1 : -1);
    touch.current = null;
  };

  const Current = slides[index].Component;
  const progress = ((index + 1) / N) * 100;

  return (
    <div
      className="relative h-full w-full overflow-hidden select-none"
      style={{ backgroundColor: C.bg }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Barra de progresso no topo */}
      <div className="absolute top-0 inset-x-0 h-1 z-30" style={{ backgroundColor: 'rgba(0,0,0,.06)' }}>
        <motion.div
          className="h-full"
          style={{ backgroundColor: C.blue }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
      </div>

      {/* Slides com transição animada */}
      <AnimatePresence custom={dir} mode="wait" initial={false}>
        <motion.div
          key={index}
          custom={dir}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'tween', ease: [0.4, 0, 0.2, 1], duration: 0.45 },
            opacity: { duration: 0.25 },
          }}
          className="absolute inset-0"
        >
          <Current />
        </motion.div>
      </AnimatePresence>

      <Controls index={index} N={N} go={go} goTo={goTo} />
    </div>
  );
}

function NavButton({ onClick, disabled, children, label }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className="h-11 w-11 sm:h-12 sm:w-12 rounded-full flex items-center justify-center transition-all active:scale-95 disabled:opacity-35 disabled:cursor-not-allowed"
      style={{ backgroundColor: C.surface, border: `1px solid ${C.line}`, boxShadow: `0 4px 14px ${C.shadow || 'rgba(0,0,0,.12)'}`, color: C.heading }}
    >
      {children}
    </button>
  );
}

function Controls({ index, N, go, goTo }) {
  return (
    <div className="absolute bottom-0 inset-x-0 z-30 flex items-center justify-between gap-3 px-4 sm:px-6 pb-4 pt-3 sm:pb-5">
      <NavButton onClick={() => go(-1)} disabled={index === 0} label="Slide anterior">
        <ChevronLeft size={24} />
      </NavButton>

      <div className="flex items-center gap-3">
        {/* Pontos (desktop) */}
        <div className="hidden md:flex items-center gap-1.5">
          {Array.from({ length: N }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Ir para o slide ${i + 1}`}
              onClick={() => goTo(i)}
              className="h-2 rounded-full transition-all"
              style={{
                width: i === index ? 20 : 8,
                backgroundColor: i === index ? C.blue : '#CBD2DA',
              }}
            />
          ))}
        </div>
        {/* Contador */}
        <span
          className="text-xs sm:text-sm font-semibold tabular-nums px-2.5 py-1 rounded-full"
          style={{ color: C.muted, backgroundColor: 'rgba(0,0,0,.04)' }}
        >
          {index + 1} / {N}
        </span>
      </div>

      <NavButton onClick={() => go(1)} disabled={index === N - 1} label="Próximo slide">
        <ChevronRight size={24} />
      </NavButton>
    </div>
  );
}
