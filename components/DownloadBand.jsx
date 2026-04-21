function DownloadBand() {
  return (
    <section style={{ padding: '36px 0' }}>
      <div style={{ width: 'min(92%, var(--container))', margin: '0 auto' }}>
        <div style={{
          background: 'var(--mk-navy)',
          color: '#fff',
          borderRadius: 22,
          padding: '28px 32px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: 24, flexWrap: 'wrap',
          boxShadow: 'var(--shadow-lg)',
          position: 'relative', overflow: 'hidden',
        }}>
          <img src="../../assets/logo-white.png" alt=""
            style={{ position: 'absolute', right: -40, top: '50%', transform: 'translateY(-50%)', height: 220, opacity: 0.06 }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{
              margin: '0 0 6px', fontFamily: 'var(--font-display)',
              fontWeight: 600, fontSize: 28, letterSpacing: '-0.01em',
            }}>CV Download</h2>
            <p style={{ margin: 0, color: 'rgba(255,255,255,0.75)', fontSize: 15 }}>
              A PDF version of my CV is available for download.
            </p>
          </div>
          <a href="#" style={{
            position: 'relative', zIndex: 1,
            background: '#fff', color: 'var(--mk-navy)',
            borderRadius: 999, padding: '13px 22px',
            fontWeight: 700, fontSize: 14, textDecoration: 'none',
            display: 'inline-flex', alignItems: 'center', gap: 8,
          }}>
            Download PDF CV <Icon name="download" size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

window.DownloadBand = DownloadBand;
