function Card({ eyebrow, title, children, as = 'article', padded = true, style }) {
  const Tag = as;
  return (
    <Tag style={{
      background: 'var(--mk-paper)',
      border: '1px solid var(--mk-line)',
      borderRadius: 22,
      boxShadow: 'var(--shadow-lg)',
      padding: padded ? 22 : 0,
      ...style,
    }}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      {title && (
        <h3 style={{
          margin: '0 0 10px', fontFamily: 'var(--font-sans)',
          fontSize: 18, fontWeight: 600, lineHeight: 1.3, color: 'var(--fg-1)',
        }}>{title}</h3>
      )}
      {children}
    </Tag>
  );
}

function Panel({ title, children }) {
  return (
    <article style={{
      background: 'var(--mk-paper)',
      border: '1px solid var(--mk-line)',
      borderRadius: 22,
      boxShadow: 'var(--shadow-lg)',
      padding: 26,
    }}>
      {title && (
        <h2 style={{
          margin: '0 0 14px', fontFamily: 'var(--font-display)',
          fontSize: 26, fontWeight: 600, letterSpacing: '-0.01em', color: 'var(--fg-1)',
        }}>{title}</h2>
      )}
      {children}
    </article>
  );
}

function CardGrid({ columns = 3, children, gap = 20 }) {
  return (
    <div style={{
      display: 'grid', gap,
      gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
    }} className={`cardgrid-${columns}`}>
      {children}
    </div>
  );
}

window.Card = Card;
window.Panel = Panel;
window.CardGrid = CardGrid;
