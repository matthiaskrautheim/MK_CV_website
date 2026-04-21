const EXPERTISE = [
  { t: 'Digital Solutions', d: 'Designing, expanding and supporting digital solutions for business-critical functions in regulated environments.' },
  { t: 'IT Business Partnering', d: 'Acting as a trusted interface between business functions and IT to identify needs, shape initiatives and support delivery.' },
  { t: 'R&D and Product Supply', d: 'Strong experience in supporting R&D teams and Product Supply organizations in their digitalization efforts.' },
  { t: 'Leadership & International Collaboration', d: 'Leading teams and working across international organizations to align, coordinate and drive initiatives forward.' },
  { t: 'Project & Portfolio Coordination', d: 'Supporting planning, prioritization, budgeting and oversight for software projects and their operations.' },
  { t: 'Automation & Generative AI', d: 'Exploring practical use cases for automation and Generative AI to improve business processes and operational robustness.' },
];

function ExpertiseGrid() {
  return (
    <CardGrid columns={3}>
      {EXPERTISE.map((e, i) => (
        <Card key={i} title={e.t}>
          <p style={{ margin: 0, color: 'var(--fg-3)', fontSize: 15, lineHeight: 1.6 }}>{e.d}</p>
        </Card>
      ))}
    </CardGrid>
  );
}

window.ExpertiseGrid = ExpertiseGrid;
