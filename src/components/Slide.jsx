import { IconBadge } from './ui.jsx';
import { C } from '../theme.js';

/*
 * Moldura padrão de um slide. É responsiva por padrão:
 * - ocupa a altura toda da tela e rola internamente se o conteúdo passar (mobile);
 * - centraliza o conteúdo num container com largura máxima;
 * - a barra de título (ícone + título + subtítulo) é opcional.
 *
 * variant: 'light' (fundo branco) ou 'dark' (fundo navy).
 */
export default function Slide({
  variant = 'light',
  icon,
  title,
  subtitle,
  accent = C.blue,
  children,
  contentClassName = '',
}) {
  const dark = variant === 'dark';
  return (
    <div
      className="slide-scroll h-full w-full overflow-y-auto"
      style={{ backgroundColor: dark ? C.navy : '#fff' }}
    >
      <div className="min-h-full w-full max-w-6xl mx-auto flex flex-col px-5 sm:px-8 md:px-12 lg:px-16 pt-7 md:pt-12 pb-24 md:pb-28">
        {title && (
          <header className="flex items-center gap-3 sm:gap-4 mb-6 md:mb-9">
            {icon && <IconBadge icon={icon} color={accent} size="md" />}
            <div className="min-w-0">
              <h2
                className="text-[22px] leading-tight sm:text-3xl md:text-4xl font-extrabold"
                style={{ color: dark ? '#fff' : C.navy }}
              >
                {title}
              </h2>
              {subtitle && (
                <p
                  className="text-xs sm:text-sm md:text-base italic mt-1"
                  style={{ color: dark ? C.ice : C.muted }}
                >
                  {subtitle}
                </p>
              )}
            </div>
          </header>
        )}
        <div className={`flex-1 ${contentClassName}`}>{children}</div>
      </div>
    </div>
  );
}
