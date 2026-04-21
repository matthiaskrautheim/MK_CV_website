function TagList({ tags, highlight = [] }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 12 }}>
      {tags.map((t, i) => {
        const hot = highlight.includes(t);
        return (
          <span key={i} style={{
            display: 'inline-flex', alignItems: 'center',
            padding: '8px 14px', borderRadius: 999,
            background: hot ? 'var(--mk-magenta-tint)' : 'var(--mk-navy-tint)',
            color: hot ? 'var(--mk-magenta-deep)' : 'var(--mk-navy)',
            fontSize: 13, fontWeight: 600,
          }}>{t}</span>
        );
      })}
    </div>
  );
}

window.TagList = TagList;
