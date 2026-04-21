function Hero() {
  return (
    <section id="home" data-screen-label="Hero" style={{ padding: '72px 0 40px' }}>
      <div style={{
        width: 'min(92%, var(--container))', margin: '0 auto',
        display: 'grid', gridTemplateColumns: 'minmax(0,1.45fr) minmax(320px, 0.8fr)',
        gap: 40, alignItems: 'start',
      }}>
        <div>
          <Eyebrow>Professional Profile</Eyebrow>
          <h1 style={{
            margin: '0 0 16px',
            fontFamily: 'var(--font-display)',
            fontWeight: 600,
            fontSize: 'clamp(2.5rem, 4.6vw, 4rem)',
            lineHeight: 1.08,
            letterSpacing: '-0.02em',
            color: 'var(--fg-1)',
            textWrap: 'balance',
          }}>
            IT partnering and digital leadership<br />for life sciences.
          </h1>
          <p style={{
            margin: '0 0 14px',
            fontFamily: 'var(--font-display)', fontStyle: 'italic',
            fontWeight: 500, fontSize: 22, color: 'var(--mk-magenta)',
          }}>
            Matthias Krautheim
          </p>
          <p style={{ margin: '0 0 14px', fontSize: 19, lineHeight: 1.6, color: 'var(--fg-2)', maxWidth: 640 }}>
            More than 15 years of experience in digitalization, process improvement and business-facing IT
            across R&amp;D, Product Supply and other highly regulated environments.
          </p>
          <p style={{ margin: '0 0 28px', fontSize: 16, lineHeight: 1.65, color: 'var(--fg-3)', maxWidth: 620 }}>
            I support organizations in translating business needs into practical digital solutions,
            structured collaboration and sustainable progress — with a strong focus on life sciences,
            regulated industries and international environments.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <Button variant="primary" href="#experience" iconRight="arrow">View Experience</Button>
            <Button variant="secondary" href="#" iconRight="download">Download PDF CV</Button>
            <Button variant="ghost" href="#contact">Contact</Button>
          </div>
        </div>

        <aside style={{
          background: 'var(--mk-paper)',
          border: '1px solid var(--mk-line)',
          borderRadius: 22,
          padding: 22,
          boxShadow: 'var(--shadow-lg)',
        }}>
          <PortraitPlaceholder />
          <dl style={{ display: 'grid', gap: 14, margin: 0 }}>
            <Fact label="Current focus" value="Digital solutions · business-facing IT · global teams" />
            <Fact label="Industry context" value="Pharma, Life Sciences, regulated environments" />
            <Fact label="Business areas" value="R&D · Product Supply · global collaboration" />
            <Fact label="Location" value="Penzing / Munich, Bavaria, Germany" />
          </dl>
        </aside>
      </div>
    </section>
  );
}

function Fact({ label, value }) {
  return (
    <div>
      <dt style={{
        margin: '0 0 4px',
        fontSize: 11, fontWeight: 700, textTransform: 'uppercase',
        letterSpacing: '0.09em', color: 'var(--fg-3)',
      }}>{label}</dt>
      <dd style={{ margin: 0, fontSize: 14, fontWeight: 600, color: 'var(--fg-1)' }}>{value}</dd>
    </div>
  );
}

window.Hero = Hero;
