<<<<<<< HEAD
import { Link } from 'react-router-dom';

export default function Projects() {
  const listaProyectos = [
    {
      title: "DentalCare",
      subtitle: "Clínica Integral Dental",
      description: "Diseño de interfaz y landing page corporativa para una clínica odontológica moderna. Interfaz limpia enfocada en agendamiento fluido de citas y presentación estética de servicios de salud visual y dental.",
      category: "HEALTH CARE",
      colorCategory: "#38bdf8",
      path: "/proyecto/dental"
      // Imagen de referencia en tu proyecto: "images (1).jpg" (Logo DentalCare)
    },
    {
      title: "Mukul Resort",
      subtitle: "Branding & Luxury Experience",
      description: "Desarrollo frontend inspirado en el exclusivo resort de Guacalito de la Isla. Experiencia UI inmersiva con layouts asimétricos, galerías premium y transiciones suaves que reflejan exclusividad.",
      category: "LUXURY HOTEL",
      colorCategory: "#eab308",
      path: "/proyecto/mukul"
      // Imagen de referencia en tu proyecto: "casona-don-carlos.jpg" (Piscina y Bungalow Mukul)
    },
    {
      title: "Plan Up Academy",
      subtitle: "Ecosistema Analítico y Control",
      description: "Optimización de flujos de datos organizacionales y académicos. Conexión de métricas de rendimiento en dashboards analíticos interactivos para auditoría y toma de decisiones estratégicas.",
      category: "BUSINESS & EDUCATION",
      colorCategory: "#ff2a5f",
      path: "/proyecto/planup"
      // Imagen de referencia en tu proyecto: "images.png" (Logo Plan Up Academy)
    },
    {
      title: "Los Ranchos",
      subtitle: "Interfaz de Control y Gestión",
      description: "Plataforma web con diseño premium adaptado a la gestión y visualización de menús, inventarios o reservas organizadas para el icónico restaurante clásico nicaragüense.",
      category: "RESTAURANT & LOUNGE",
      colorCategory: "#10b981",
      path: "/proyecto/ranchos"
      // Imagen de referencia en tu proyecto: "images.jpg" (Fachada de Los Ranchos)
    },
    {
      title: "TryFitness",
      subtitle: "Plataforma de Tracking Deportivo",
      description: "Landing page de alto impacto visual orientada al seguimiento de rutinas y rendimiento deportivo. Estilo oscuro moderno inspirado en centros de entrenamiento y acondicionamiento físico de alto nivel.",
      category: "FITNESS CENTER",
      colorCategory: "#a855f7",
      path: "/proyecto/tryfitness"
      // Imagen de referencia en tu proyecto: "photo-1623874514711-0f321325f318.avif" (Gimnasio industrial/Crossfit)
    }
  ];

  return (
    <section id="proyectos" className="section" style={{ maxWidth: '1024px', margin: '0 auto', padding: '60px 20px' }}>
      <div style={{ marginBottom: '50px' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', margin: '0' }}>Proyectos Destacados</h2>
        <p style={{ color: '#64748b', fontSize: '0.9rem', marginTop: '5px' }}>Casos de estudio prácticos de marcas y negocios locales.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
        {listaProyectos.map((project, index) => (
          <div 
            key={index} 
            className="project-card" 
            style={{ 
              padding: '40px 30px', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'space-between',
              minHeight: '380px'
            }}
          >
            <div>
              <span style={{ 
                color: project.colorCategory, 
                fontSize: '0.75rem', 
                fontWeight: '900', 
                letterSpacing: '1.5px',
                textTransform: 'uppercase'
              }}>
                {project.category}
              </span>
              
              <h3 style={{ 
                margin: '15px 0 5px 0', 
                fontSize: '2rem', 
                fontWeight: '900', 
                letterSpacing: '-0.5px',
                color: '#ffffff'
              }}>
                {project.title}
              </h3>
              
              <h5 style={{ color: '#64748b', margin: '0 0 15px 0', fontWeight: '500', fontSize: '1rem' }}>
                {project.subtitle}
              </h5>
              
              <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.6' }}>
                {project.description}
              </p>
            </div>
            
            <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid #243242' }}>
              <Link 
                to={project.path} 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  color: '#94a3b8', 
                  textDecoration: 'none', 
                  fontSize: '0.85rem', 
                  fontWeight: 'bold',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  transition: '0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#00d084'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#94a3b8'}
              >
                <span>Explorar Caso</span>
                <span style={{ fontSize: '1.1rem' }}>→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
=======
import projects from "../data/projects";

function Projects() {
  return (
    <section id="proyectos" className="py-5">

      <div className="container">

        <h2 className="section-title">
          Proyectos Destacados
        </h2>

        <div className="row g-4">

          {projects.map((project) => (

            <div
              key={project.id}
              className="col-lg-4 col-md-6"
            >

              <div className="card-custom">

                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                />

                <div className="p-4">

                  <span className="badge bg-success mb-3">
                    {project.tech}
                  </span>

                  <h4>{project.title}</h4>

                  <p>{project.description}</p>

                  <button
                    className="btn btn-custom"
                  >
                    Ver Proyecto
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;
>>>>>>> 89f1908c9364af888c5887630e9223bb548a3771
