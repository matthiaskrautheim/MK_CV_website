function ContactPanel() {
  return (
    <Panel title="Contact">
      <p style={{ margin: '0 0 16px', color: 'var(--fg-3)', lineHeight: 1.65 }}>
        I welcome professional conversations regarding digital leadership, business-facing IT roles,
        regulated environments, digital solutions and related opportunities.
      </p>
      <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 10 }}>
        <ContactLine icon="mail" label="Email" value="matthiaskrautheim@yahoo.de" href="mailto:matthiaskrautheim@yahoo.de" />
        <ContactLine icon="linkedin" label="LinkedIn" value="linkedin.com/in/matthias-krautheim" href="#" />
        <ContactLine icon="pin" label="Location" value="Penzing, Bavaria, Germany" />
      </ul>
    </Panel>
  );
}

function ContactLine({ icon, label, value, href }) {
  return (
    <li style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
      <span style={{
        width: 36, height: 36, borderRadius: 10,
        background: 'var(--mk-navy-tint)', color: 'var(--mk-navy)',
        display: 'grid', placeItems: 'center', flex: 'none',
      }}><Icon name={icon} size={18} /></span>
      <div style={{ paddingTop: 3 }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.09em', textTransform: 'uppercase', color: 'var(--fg-3)' }}>{label}</div>
        {href
          ? <a href={href} style={{ color: 'var(--mk-navy)', fontWeight: 600, textDecoration: 'none' }}>{value}</a>
          : <span style={{ color: 'var(--fg-1)', fontWeight: 600 }}>{value}</span>
        }
      </div>
    </li>
  );
}

window.ContactPanel = ContactPanel;
