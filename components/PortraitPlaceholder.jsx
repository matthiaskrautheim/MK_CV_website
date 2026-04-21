function PortraitPlaceholder({ src = '../../assets/portrait-blazer.jpg' }) {
  return (
    <div style={{
      width: '100%', aspectRatio: '4 / 5',
      borderRadius: 18,
      overflow: 'hidden',
      background: 'var(--mk-navy-tint)',
      border: '1px solid var(--mk-line)',
      marginBottom: 20,
      position: 'relative',
    }}>
      <img src={src} alt="Matthias Krautheim"
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
    </div>
  );
}

window.PortraitPlaceholder = PortraitPlaceholder;
