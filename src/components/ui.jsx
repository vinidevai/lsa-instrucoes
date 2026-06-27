import { MousePointer2 } from 'lucide-react';
import { C } from '../theme.js';

/* Círculo colorido com ícone branco (Lucide) no centro. */
export function IconBadge({ icon: Icon, color = C.blue, size = 'md', className = '', shadow = true }) {
  const dims = { sm: 'h-9 w-9', md: 'h-12 w-12', lg: 'h-16 w-16', xl: 'h-20 w-20' }[size];
  const px = { sm: 18, md: 24, lg: 30, xl: 38 }[size];
  return (
    <div
      className={`shrink-0 rounded-full flex items-center justify-center ${shadow ? 'shadow-sm' : ''} ${dims} ${className}`}
      style={{ backgroundColor: color }}
    >
      <Icon size={px} color="#fff" strokeWidth={2.1} />
    </div>
  );
}

/* Cartão arredondado com leve sombra e borda. */
export function Card({ children, tint = C.surface, border = C.line, className = '', style = {} }) {
  return (
    <div
      className={`rounded-xl shadow-sm ${className}`}
      style={{ backgroundColor: tint, border: `1px solid ${border}`, ...style }}
    >
      {children}
    </div>
  );
}

/* Etiqueta/"botão" arredondado — usado para os nomes em inglês da interface. */
export function Pill({ children, color = C.blue, text = '#fff', className = '' }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs sm:text-[13px] font-bold leading-none whitespace-nowrap ${className}`}
      style={{ backgroundColor: color, color: text }}
    >
      {children}
    </span>
  );
}

/* Círculo numerado. */
export function NumberBadge({ n, color = C.blue, className = '' }) {
  return (
    <div
      className={`shrink-0 h-9 w-9 rounded-full flex items-center justify-center text-sm font-bold text-white shadow-sm ${className}`}
      style={{ backgroundColor: color }}
    >
      {n}
    </div>
  );
}

/* Linha "ícone + termo em inglês + explicação em PT". */
export function IconRow({ icon, color = C.blue, term, children, className = '' }) {
  return (
    <div className={`flex items-start gap-3 sm:gap-4 ${className}`}>
      <IconBadge icon={icon} color={color} size="sm" className="mt-0.5" />
      <p className="text-sm sm:text-base leading-snug" style={{ color: C.ink }}>
        {term && (
          <span className="font-bold" style={{ color: C.heading }}>
            {term}
            {' — '}
          </span>
        )}
        {children}
      </p>
    </div>
  );
}

/* Banner de destaque para telas interativas. */
export function InteractiveBanner({ children }) {
  return (
    <div
      className="flex items-center gap-2.5 rounded-lg px-4 py-3 mb-5"
      style={{ backgroundColor: C.blue }}
    >
      <MousePointer2 size={16} color="#fff" className="shrink-0" />
      <span className="text-sm font-bold text-white">{children}</span>
    </div>
  );
}

/* Moldura branca para as imagens (screenshots). */
export function Frame({ src, alt, className = '', imgClassName = '' }) {
  return (
    <div
      className={`rounded-xl overflow-hidden bg-white ${className}`}
      style={{ border: `1px solid ${C.line}`, boxShadow: '0 8px 24px rgba(0,0,0,.10)' }}
    >
      <img src={src} alt={alt} loading="lazy" className={`block w-full h-auto ${imgClassName}`} />
    </div>
  );
}
