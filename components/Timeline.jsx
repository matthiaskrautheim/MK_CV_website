function Timeline({ items }) {
  return (
    <div style={{ display: 'grid', gap: 14 }}>
      {items.map((it, i) => <TimelineItem key={i} {...it} />)}
    </div>
  );
}

function TimelineItem({ role, company, location, period, bullets, summary }) {
  return (
    <article style={{
      background: 'var(--mk-paper)',
      border: '1px solid var(--mk-line)',
      borderRadius: 22, padding: 24,
      boxShadow: 'var(--shadow-lg)',
      position: 'relative',
    }}>
      <div style={{
        position: 'absolute', left: 0, top: 24, bottom: 24, width: 3,
        background: 'linear-gradient(180deg, var(--mk-navy), var(--mk-magenta))',
        borderRadius: '0 3px 3px 0',
      }} />
      <div style={{ paddingLeft: 6 }}>
        <h3 style={{
          margin: '0 0 6px', fontSize: 18, fontWeight: 600, lineHeight: 1.3, color: 'var(--fg-1)',
        }}>{role}</h3>
        <p style={{ margin: '0 0 14px', fontSize: 13, fontWeight: 600, color: 'var(--fg-3)', letterSpacing: '0.02em' }}>
          <span style={{ color: 'var(--mk-navy)' }}>{company}</span>
          {' · '}{location}{' · '}{period}
        </p>
        {summary && (
          <p style={{ margin: 0, fontSize: 15, lineHeight: 1.65, color: 'var(--fg-3)' }}>{summary}</p>
        )}
        {bullets && (
          <ul style={{ margin: 0, paddingLeft: 18, fontSize: 15, lineHeight: 1.65, color: 'var(--fg-2)' }}>
            {bullets.map((b, i) => <li key={i} style={{ marginBottom: 4 }}>{b}</li>)}
          </ul>
        )}
      </div>
    </article>
  );
}

window.Timeline = Timeline;
window.TimelineItem = TimelineItem;
