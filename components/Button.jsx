const buttonStyles = {
  base: {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
    borderRadius: 999, padding: '12px 22px', fontWeight: 700, fontSize: 14,
    fontFamily: 'var(--font-sans)',
    border: '1px solid transparent', cursor: 'pointer', textDecoration: 'none',
    transition: 'background .22s var(--ease-out), transform .22s var(--ease-out), color .22s var(--ease-out)',
    whiteSpace: 'nowrap',
  },
  primary: { background: 'var(--mk-navy)', color: '#fff' },
  secondary: { background: 'transparent', borderColor: 'var(--mk-navy)', color: 'var(--mk-navy)' },
  ghost: { background: 'transparent', color: 'var(--mk-navy)' },
  primaryHover:   { background: 'var(--mk-navy-deep)', transform: 'translateY(-1px)' },
  secondaryHover: { background: 'rgba(26,43,65,0.06)' },
  ghostHover:     { background: 'var(--mk-navy-tint)' },
};

function Button({ variant = 'primary', href, onClick, children, iconRight }) {
  const [hover, setHover] = React.useState(false);
  const base = { ...buttonStyles.base, ...buttonStyles[variant] };
  if (hover) Object.assign(base, buttonStyles[variant + 'Hover'] || {});
  const Tag = href ? 'a' : 'button';
  return (
    <Tag
      href={href} onClick={onClick} style={base}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
      {iconRight && <Icon name={iconRight} size={16} />}
    </Tag>
  );
}

window.Button = Button;
