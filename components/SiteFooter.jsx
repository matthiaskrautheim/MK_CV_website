function SiteFooter() {
  return (
    <footer style={{
      borderTop: '1px solid var(--mk-line)',
      padding: '32px 0 48px', marginTop: 16,
    }}>
      <div style={{
        width: 'min(92%, var(--container))', margin: '0 auto',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: 16, flexWrap: 'wrap',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <img src="../../assets/logo.png" alt="" style={{ height: 22 }} />
          <p style={{ margin: 0, color: 'var(--fg-3)', fontSize: 13 }}>
            © Matthias Krautheim · Professional Profile Website
          </p>
        </div>
        <nav style={{ display: 'flex', gap: 18 }}>
          <a href="#" style={{ color: 'var(--fg-3)', fontSize: 13, textDecoration: 'none' }}>Imprint</a>
          <a href="#" style={{ color: 'var(--fg-3)', fontSize: 13, textDecoration: 'none' }}>Privacy Policy</a>
        </nav>
      </div>
    </footer>
  );
}

window.SiteFooter = SiteFooter;
