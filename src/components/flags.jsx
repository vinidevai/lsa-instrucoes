// Bandeiras desenhadas em SVG (não dependem de emoji, que o Windows não
// renderiza como bandeira).
export function BrazilFlag({ size = 18 }) {
  return (
    <svg width={size * 1.4} height={size} viewBox="0 0 28 20" aria-hidden="true" className="block">
      <rect width="28" height="20" fill="#009B3A" />
      <polygon points="14,2.5 25.5,10 14,17.5 2.5,10" fill="#FEDF00" />
      <circle cx="14" cy="10" r="4.2" fill="#002776" />
      <rect x="0.5" y="0.5" width="27" height="19" fill="none" stroke="rgba(0,0,0,.15)" />
    </svg>
  );
}

export function USAFlag({ size = 18 }) {
  const h = 20 / 13;
  return (
    <svg width={size * 1.4} height={size} viewBox="0 0 28 20" aria-hidden="true" className="block">
      <rect width="28" height="20" fill="#FFFFFF" />
      {Array.from({ length: 7 }).map((_, i) => (
        <rect key={i} y={i * 2 * h} width="28" height={h} fill="#B22234" />
      ))}
      <rect width="11.5" height={h * 7} fill="#3C3B6E" />
      {Array.from({ length: 6 }).map((_, i) => (
        <circle key={i} cx={2 + (i % 3) * 3.6} cy={2.2 + Math.floor(i / 3) * 3.4} r="0.7" fill="#fff" />
      ))}
      <rect x="0.5" y="0.5" width="27" height="19" fill="none" stroke="rgba(0,0,0,.15)" />
    </svg>
  );
}
