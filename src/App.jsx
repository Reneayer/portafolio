import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dental from './pages/Dental'; 
import Mukul from './pages/Mukul';
import PlanUp from './pages/PlanUp';
import Ranchos from './pages/Ranchos';
import TryFitness from './pages/TryFitness';

function Home() {
  const proyectos = [
    { nombre: "DentalCare", ruta: "/dental", desc: "Clínica Integral Dental. Plataforma médica con gestión de servicios, especialidades y contacto directo.", tipo: "Sitio Web" },
    { nombre: "Mukul Resort", ruta: "/mukul", desc: "Diseño premium e inmersivo para hotel de lujo en el Pacífico.", tipo: "Diseño Exclusivo" },
    { nombre: "Plan Up Academy", ruta: "/planup", desc: "Plataforma corporativa enfocada en optimización operativa y datos.", tipo: "Corporativo" },
    { nombre: "Los Ranchos", ruta: "/ranchos", desc: "Menú digital y presentación gastronómica para restaurante tradicional.", tipo: "Gastronómico" },
    { nombre: "TryFitness", ruta: "/tryfitness", desc: "Interfaz moderna de planes, tarifas y comunidad deportiva.", tipo: "Fitness" }
  ];

  const equipo = [
    { nombre: "Geovanny Ruiz", rol: "Desarrollador Web & Analista de Datos" },
    { nombre: "Juana Diaz", rol: "Desarrolladora Web & Analista de Datos" },
    { nombre: "David Espinoza", rol: "Desarrollador Web & Analista de Datos" }
  ];

  return (
    <div style={{ backgroundColor: '#0f172a', color: '#f1f5f9', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      {/* Navbar */}
      <nav style={{ padding: '20px 40px', background: '#1e293b', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #334155' }}>
        <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#38bdf8', letterSpacing: '0.5px' }}>ESTUDIO DE DESARROLLO</span>
      </nav>

      {/* Hero Section */}
      <header style={{ padding: '90px 20px', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: '800', color: '#ffffff', margin: '0 0 20px 0', lineHeight: '1.2' }}>
          Soluciones Digitales & Análisis Eficiente
        </h1>
        <p style={{ maxWidth: '650px', margin: '0 auto', color: '#94a3b8', fontSize: '1.1rem', lineHeight: '1.7' }}>
          Creamos experiencias web optimizadas y estructuras funcionales diseñadas para resolver necesidades reales de negocios e instituciones.
        </p>
      </header>

      {/* Sección del Equipo */}
      <section style={{ padding: '40px 20px', maxWidth: '1000px', margin: '0 auto 60px auto' }}>
        <h2 style={{ fontSize: '1.5rem', textAlign: 'center', marginBottom: '30px', color: '#ffffff', fontWeight: '700' }}>Nuestro Equipo</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          {equipo.map((miembro, i) => (
            <div key={i} style={{ background: '#1e293b', padding: '25px', borderRadius: '12px', textAlign: 'center', border: '1px solid #334155' }}>
              <div style={{ width: '50px', height: '50px', background: '#38bdf8', color: '#0f172a', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px auto', fontWeight: 'bold', fontSize: '1.2rem' }}>
                {miembro.nombre.charAt(0)}
              </div>
              <h3 style={{ fontSize: '1.15rem', color: '#ffffff', margin: '0 0 5px 0' }}>{miembro.nombre}</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.85rem', margin: '0' }}>{miembro.rol}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Grid de Proyectos */}
      <section style={{ padding: '20px 20px 80px 20px', maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.75rem', marginBottom: '40px', color: '#ffffff', textAlign: 'center', fontWeight: '800' }}>Proyectos Desarrollados</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
          {proyectos.map((p, i) => (
            <div key={i} style={{ background: '#1e293b', padding: '30px', borderRadius: '16px', border: '1px solid #334155', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span style={{ fontSize: '0.75rem', background: '#0f172a', color: '#38bdf8', padding: '4px 10px', borderRadius: '12px', fontWeight: 'bold' }}>{p.tipo}</span>
                <h3 style={{ fontSize: '1.4rem', color: '#ffffff', margin: '15px 0 10px 0' }}>{p.nombre}</h3>
                <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.5', marginBottom: '25px' }}>{p.desc}</p>
              </div>
              {/* Botón con una sola palabra */}
              <Link to={p.ruta} style={{ textDecoration: 'none', background: '#38bdf8', color: '#0f172a', padding: '12px', borderRadius: '8px', textAlign: 'center', fontWeight: 'bold', fontSize: '0.9rem', display: 'block' }}>
                Explorar
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#0b0f19', padding: '30px 20px', textAlign: 'center', color: '#64748b', fontSize: '0.85rem', borderTop: '1px solid #1e293b' }}>
        <p>© 2026 Desarrollo Web y Análisis de Datos. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dental" element={<Dental />} />
        <Route path="/mukul" element={<Mukul />} />
        <Route path="/planup" element={<PlanUp />} />
        <Route path="/ranchos" element={<Ranchos />} />
        <Route path="/tryfitness" element={<TryFitness />} />
      </Routes>
    </Router>
  );
}