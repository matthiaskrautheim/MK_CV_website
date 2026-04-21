function Section({ id, alt = false, narrow = false, children, label }) {
  return (
    <section id={id} data-screen-label={label || id}
      style={{
        padding: '56px 0',
        background: alt
          ? 'linear-gradient(180deg, rgba(232,240,246,0.55) 0%, rgba(245,247,250,0.25) 100%)'
          : 'transparent',
      }}>
      <div style={{
        width: 'min(92%, var(--container))', margin: '0 auto',
        maxWidth: narrow ? 860 : 'none',
      }}>
        {children}
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, lead }) {
  return (
    <div style={{ marginBottom: 28, maxWidth: 820 }}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 style={{
        margin: '0 0 10px',
        fontFamily: 'var(--font-display)', fontWeight: 600,
        fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
        letterSpacing: '-0.01em', lineHeight: 1.2, color: 'var(--fg-1)',
      }}>{title}</h2>
      {lead && (
        <p style={{ margin: 0, fontSize: 17, lineHeight: 1.65, color: 'var(--fg-3)' }}>{lead}</p>
      )}
    </div>
  );
}

window.Section = Section;
window.SectionHeading = SectionHeading;
