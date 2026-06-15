export default function Technologies() {
  const techs = [
    { name: "React", char: "R" },
    { name: "HTML5", char: "H" },
    { name: "CSS3", char: "C" },
    { name: "Tableau", char: "T" },
    { name: "SQL & DB", char: "S" },
    { name: "Power BI", char: "P" }
  ];

  return (
    <section id="tecnologias" className="section" style={{ maxWidth: '1024px', margin: '0 auto', padding: '60px 20px' }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h2>Tecnologías y Herramientas</h2>
        <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Mi stack técnico especializado en desarrollo web y analítica.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
        {techs.map((tech, index) => (
          <div key={index} className="tech-card" style={{ padding: '30px', borderRadius: '15px' }}>
            <div className="tech-icon">{tech.char}</div>
            <h3 style={{ margin: '0', fontSize: '1.1rem', trackingSpacing: '1px' }}>{tech.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}