import { C } from '../theme.js';

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
  const Icon = icon;
  return (
    <div
      className="slide-scroll h-full w-full overflow-y-auto"
      style={{ backgroundColor: dark ? C.slideDark : C.bg }}
    >
      <div className="min-h-full w-full max-w-6xl mx-auto flex flex-col px-5 sm:px-8 md:px-12 lg:px-16 pt-7 md:pt-10 pb-24 md:pb-28">
        {title && (
          <header
            className="flex items-start gap-3 mb-6 md:mb-8 pb-5 md:pb-7"
            style={{ borderBottom: `1px solid ${dark ? 'rgba(255,255,255,.1)' : C.line}` }}
          >
            {Icon && (
              <span
                className="inline-flex items-center justify-center h-7 w-7 rounded-md shrink-0 mt-0.5"
                style={{ backgroundColor: accent }}
              >
                <Icon size={14} color="#fff" strokeWidth={2.3} />
              </span>
            )}
            <div className="min-w-0 flex-1">
              <h2
                className="text-xl sm:text-2xl md:text-[30px] font-bold leading-tight"
                style={{ color: dark ? '#fff' : C.heading }}
              >
                {title}
              </h2>
              {subtitle && (
                <p
                  className="text-xs sm:text-[13px] mt-1.5"
                  style={{ color: dark ? 'rgba(202,220,252,.65)' : C.muted }}
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
