function SiteHeader({ active = 'home', onNav }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const items = [
    { id: 'home', label: 'Home' },
    { id: 'profile', label: 'Profile' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: 'rgba(249,251,253,0.92)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      borderBottom: `1px solid ${scrolled ? 'var(--mk-line)' : 'rgba(225,230,236,0.6)'}`,
      transition: 'border-color .22s var(--ease-out)',
    }}>
      <div style={{
        width: 'min(92%, var(--container))', margin: '0 auto',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '14px 0', gap: 24,
      }}>
        <a href="#home"
          onClick={(e) => onNav?.(e, 'home')}
          style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: 'var(--fg-1)' }}>
          <img src="../../assets/logo.png" alt="" style={{ height: 30 }} />
          <span style={{ fontWeight: 700, fontSize: 15, letterSpacing: '0.01em' }}>Matthias Krautheim</span>
        </a>
        <nav style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
          {items.map(it => (
            <a key={it.id} href={`#${it.id}`}
              onClick={(e) => onNav?.(e, it.id)}
              style={{
                color: active === it.id ? 'var(--mk-navy)' : 'var(--fg-3)',
                textDecoration: 'none', fontSize: 14, fontWeight: 600,
              }}>
              {it.label}
            </a>
          ))}
          <Button variant="primary" href="#">Download CV</Button>
        </nav>
      </div>
    </header>
  );
}

window.SiteHeader = SiteHeader;
