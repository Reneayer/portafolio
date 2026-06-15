<<<<<<< HEAD
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
=======
function Technologies() {
  const techs = [
    {
      icon: "bi-filetype-html",
      name: "HTML5",
    },
    {
      icon: "bi-filetype-css",
      name: "CSS3",
    },
    {
      icon: "bi-filetype-js",
      name: "JavaScript",
    },
    {
      icon: "bi-bootstrap",
      name: "Bootstrap",
    },
    {
      icon: "bi-code-slash",
      name: "React",
    },
    {
      icon: "bi-git",
      name: "Git",
    },
  ];

  return (
    <section
      id="tecnologias"
      className="py-5"
    >
      <div className="container">

        <h2 className="section-title">
          Tecnologías
        </h2>

        <div className="row g-4">

          {techs.map((tech, index) => (
            <div
              className="col-md-4"
              key={index}
            >
              <div className="tech-card">

                <i
                  className={`bi ${tech.icon}`}
                ></i>

                <h5>{tech.name}</h5>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Technologies;
>>>>>>> 89f1908c9364af888c5887630e9223bb548a3771
