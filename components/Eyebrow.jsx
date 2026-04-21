function Eyebrow({ children, color = 'var(--mk-magenta)' }) {
  return (
    <p style={{
      margin: '0 0 14px',
      fontFamily: 'var(--font-sans)',
      fontSize: 12, fontWeight: 700,
      letterSpacing: '0.12em', textTransform: 'uppercase',
      color,
    }}>{children}</p>
  );
}

window.Eyebrow = Eyebrow;
