import { Link } from 'react-router-dom';

export default function PlanUp() {
  const modulos = [
    { num: "01", titulo: "Planificación Estratégica", desc: "Modelado e ingeniería de flujos de trabajo optimizados y control presupuestario ágil." },
    { num: "02", titulo: "Control de Métricas (KPIs)", desc: "Integración analítica avanzada mediante cuadros de mando en Tableau y procesamiento SQL." },
    { num: "03", titulo: "Mitigación de Riesgos", desc: "Estructuras modulares diseñadas para erradicar cuellos de botella en la entrega de proyectos corporativos." }
  ];

  return (
    <div style={{ backgroundColor: '#f8f9fa', color: '#212529', minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      
      {/* Navbar Superior Financiera */}
      <nav style={{ background: '#0f172a', borderBottom: '1px solid #1e293b', padding: '20px 40px' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '12px', height: '12px', background: '#38bdf8', borderRadius: '2px' }}></div>
            <span style={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#ffffff', letterSpacing: '0.5px' }}>PLAN UP ACADEMY</span>
          </div>
          <Link to="/" style={{ textDecoration: 'none', background: '#38bdf8', color: '#0f172a', padding: '8px 18px', borderRadius: '4px', fontSize: '0.85rem', fontWeight: 'bold', transition: '0.3s' }}>
            Regresar al Menú
          </Link>
        </div>
      </nav>

      {/* Sección Titular */}
      <header style={{ maxWidth: '850px', margin: '0 auto', padding: '70px 20px 40px 20px', textAlign: 'center' }}>
        <span style={{ color: '#0284c7', fontSize: '0.8rem', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase' }}>Programa de Alta Dirección</span>
        <h1 style={{ fontSize: '2.8rem', fontWeight: '800', color: '#0f172a', margin: '15px 0 20px 0', lineHeight: '1.2' }}>
          Optimización Operativa para la Toma de Decisiones
        </h1>
        <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: '1.6', maxWidth: '650px', margin: '0 auto' }}>
          Capacitación institucional corporativa de alto rendimiento. Ofiplaza El Retiro, Edificio 3, Managua. Consultas directas: +505 8739-1284.
        </p>
      </header>

      {/* Grid Corporativa */}
      <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '20px 20px 80px 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
          {modulos.map((m, i) => (
            <div key={i} style={{ backgroundColor: '#ffffff', padding: '35px 30px', borderRadius: '6px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span style={{ color: '#0284c7', fontWeight: 'bold', fontSize: '1.4rem', display: 'block', marginBottom: '15px' }}>{m.num}.</span>
                <h3 style={{ color: '#0f172a', fontSize: '1.3rem', margin: '0 0 12px 0', fontWeight: '700' }}>{m.titulo}</h3>
                <p style={{ color: '#334155', fontSize: '0.9rem', lineHeight: '1.6', margin: '0' }}>{m.desc}</p>
              </div>
              <div style={{ borderTop: '1px solid #f1f5f9', marginTop: '25px', paddingTop: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 'bold', letterSpacing: '0.5px' }}>MODALIDAD PRESENCIAL</span>
                <span style={{ fontSize: '0.85rem', color: '#16a34a', background: '#dcfce7', padding: '2px 8px', borderRadius: '4px', fontWeight: 'bold' }}>ACTIVO</span>
              </div>
            </div>
          ))}
        </div>
      </main>

    </div>
  );
}