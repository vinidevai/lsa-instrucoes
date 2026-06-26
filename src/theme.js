// As cores apontam para variáveis CSS (definidas em index.css), então o mesmo
// código funciona nos temas claro e escuro. Trocar o data-theme no <html>
// re-tematiza tudo. Usado em estilos inline pelos componentes.
export const C = {
  bg: 'var(--bg)',
  surface: 'var(--surface)',
  white: 'var(--surface)',
  card: 'var(--surface-2)',
  text: 'var(--text)',
  ink: 'var(--text)',
  heading: 'var(--heading)',
  navyText: 'var(--heading)',
  muted: 'var(--muted)',
  line: 'var(--line)',

  slideDark: 'var(--slide-dark)',
  navy: 'var(--brand-navy)',
  navy2: 'var(--brand-navy2)',

  blue: 'var(--blue)',
  blueDk: 'var(--blue-dk)',
  green: 'var(--green)',
  amber: 'var(--amber)',
  red: 'var(--red)',
  ice: 'var(--ice)',
  grey: 'var(--grey)',

  blueTint: 'var(--blue-tint)',
  greenTint: 'var(--green-tint)',
  amberTint: 'var(--amber-tint)',
  redTint: 'var(--red-tint)',
};
