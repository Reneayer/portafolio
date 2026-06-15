import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function TryFitness() {
  const [peso, setPeso] = useState(70);
  const [altura, setAltura] = useState(1.75);
  const [clasesReservadas, setClasesReservadas] = useState([]);
  
  const imc = (peso / (altura * altura)).toFixed(1);

  const sesionesHoy = [
    { id: 's1', disciplina: "CROSSFIT WOD", enfoque: "Fuerza + Resistencia Mental", cupos: 4 },
    { id: 's2', disciplina: "POWER BOXING", enfoque: "Sacos + Trabajo de Pies", cupos: 2 },
    { id: 's3', disciplina: "HIPERTROFIA AVANZADA", enfoque: "Límites de Fallo Muscular", cupos: 0 },
    { id: 's4', disciplina: "COMBAT CORE & ABS", enfoque: "Estabilidad & Potencia", cupos: 7 }
  ];

  const toggleAsistencia = (id) => {
    if (clasesReservadas.includes(id)) {
      setClasesReservadas(clasesReservadas.filter(item => item !== id));
    } else {
      setClasesReservadas([...clasesReservadas, id]);
    }
  };

  return (
    <div style={{ backgroundColor: '#1a1a1a', color: '#ffffff', minHeight: '100vh', fontFamily: '"Arial Black", sans-serif', padding: '40px 20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Cabecera Adrenalina Naranja */}
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '50px' }}>
          <div style={{ fontSize: '1.8rem', color: '#ff5500', fontStyle: 'italic', letterSpacing: '-1px' }}>TRY.FITNESS</div>
          <Link to="/" style={{ textDecoration: 'none', background: '#ff5500', color: '#ffffff', padding: '8px 24px', fontSize: '0.8rem', fontWeight: 'bold', letterSpacing: '1px' }}>VOLVER</Link>
        </header>

        {/* Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth < 1000 ? '1fr' : '1.2fr 1fr', gap: '40px' }}>
          
          {/* Lado Izquierdo */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '35px' }}>
            
            <div>
              <div style={{ borderLeft: '6px solid #ff5500', paddingLeft: '15px', marginBottom: '20px' }}>
                <h1 style={{ fontSize: '3.5rem', lineHeight: '0.9', margin: '0' }}>ZONA DE PODER</h1>
                <p style={{ fontFamily: 'sans-serif', color: '#a0a0a0', fontSize: '0.95rem', fontWeight: 'normal', margin: '10px 0 0 0' }}>Altamira, Managua. Comunidad de alto impacto. WhatsApp: +505 8452-1922.</p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ background: '#262626', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #333333' }}>
                  <div><h3 style={{ margin: '0', fontSize: '1.15rem' }}>MONTHLY FULL ACCESS</h3><p style={{ fontFamily: 'sans-serif', color: '#cccccc', fontSize: '0.8rem', margin: '2px 0 0 0', fontWeight: 'normal' }}>Maquinaria e instalaciones completas libres.</p></div>
                  <span style={{ fontSize: '1.8rem', color: '#ff5500' }}>$45</span>
                </div>
                <div style={{ background: '#262626', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #333333' }}>
                  <div><h3 style={{ margin: '0', fontSize: '1.15rem' }}>VIP COACH INDIVIDUAL</h3><p style={{ fontFamily: 'sans-serif', color: '#cccccc', fontSize: '0.8rem', margin: '2px 0 0 0', fontWeight: 'normal' }}>Asesoría y control nutricional diario personalizado.</p></div>
                  <span style={{ fontSize: '1.8rem', color: '#ff5500' }}>$90</span>
                </div>
              </div>
            </div>

            {/* Pizarrón Naranja */}
            <div style={{ background: '#262626', border: '2px solid #333333', padding: '25px', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-12px', left: '15px', background: '#ff5500', color: '#ffffff', padding: '2px 10px', fontSize: '0.75rem', fontWeight: 'bold' }}>
                DAILY CHALLENGE // SÉ EXTRAORDINARIO
              </div>
              
              <h3 style={{ margin: '10px 0 5px 0', fontSize: '1.3rem', color: '#ffffff', letterSpacing: '-0.5px' }}>ZONA DE ASALTO: SELECCIONA TU SESIÓN</h3>
              <p style={{ fontFamily: 'sans-serif', color: '#a0a0a0', fontSize: '0.85rem', fontWeight: 'normal', margin: '0 0 20px 0' }}>Bloquea tu cupo en los entrenamientos grupales dirigidos por coaches de élite hoy.</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontFamily: 'sans-serif' }}>
                {sesionesHoy.map((s) => {
                  const estaAnotado = clasesReservadas.includes(s.id);
                  const lleno = s.cupos === 0;
                  
                  return (
                    <div 
                      key={s.id} 
                      style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center', 
                        background: '#1a1a1a', 
                        padding: '15px', 
                        border: estaAnotado ? '1px solid #ff5500' : '1px solid #333333'
                      }}
                    >
                      <div>
                        <span style={{ display: 'block', fontSize: '0.95rem', fontWeight: '900', color: estaAnotado ? '#ff5500' : '#fff' }}>
                          {s.disciplina}
                        </span>
                        <span style={{ fontSize: '0.8rem', color: '#cccccc', display: 'block', margin: '2px 0' }}>
                          {s.enfoque}
                        </span>
                        <span style={{ fontSize: '0.75rem', color: lleno ? '#ef4444' : '#ff5500', fontWeight: 'bold' }}>
                          {lleno ? '⚡ COMPLETO' : `🔥 ${s.cupos} SLOTS DISPONIBLES`}
                        </span>
                      </div>
                      
                      <button
                        disabled={lleno && !estaAnotado}
                        onClick={() => toggleAsistencia(s.id)}
                        style={{
                          padding: '10px 18px',
                          fontSize: '0.75rem',
                          fontWeight: 'bold',
                          fontFamily: '"Arial Black", sans-serif',
                          background: estaAnotado ? '#ef4444' : (lleno ? '#333333' : '#ff5500'),
                          color: '#ffffff',
                          border: 'none',
                          cursor: lleno && !estaAnotado ? 'not-allowed' : 'pointer',
                          transition: '0.2s'
                        }}
                      >
                        {estaAnotado ? 'ABANDONAR' : (lleno ? 'SOLD OUT' : 'ENLISTARSE')}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Lado Derecho */}
          <div style={{ background: '#262626', padding: '30px', border: '2px solid #ff5500', alignSelf: 'start' }}>
            <h3 style={{ margin: '0 0 5px 0', fontSize: '1.2rem', color: '#ffffff' }}>METABOLIC_TOOL: TU IMC</h3>
            <p style={{ fontFamily: 'sans-serif', color: '#a0a0a0', fontSize: '0.85rem', fontWeight: 'normal', marginTop: '0', marginBottom: '25px' }}>Evaluación antropométrica rápida de masa corporal activa.</p>
            
            <div style={{ marginBottom: '15px', fontFamily: 'sans-serif' }}>
              <label style={{ display: 'block', fontSize: '0.8rem', color: '#cccccc', fontWeight: 'bold', marginBottom: '6px' }}>PESO: {peso} KG</label>
              <input type="range" min="40" max="140" value={peso} onChange={(e) => setPeso(Number(e.target.value))} style={{ width: '100%', accentColor: '#ff5500' }} />
            </div>

            <div style={{ marginBottom: '25px', fontFamily: 'sans-serif' }}>
              <label style={{ display: 'block', fontSize: '0.8rem', color: '#cccccc', fontWeight: 'bold', marginBottom: '6px' }}>ESTATURA: {altura} M</label>
              <input type="range" min="1.40" max="2.10" step="0.01" value={altura} onChange={(e) => setAltura(Number(e.target.value))} style={{ width: '100%', accentColor: '#ff5500' }} />
            </div>

            <div style={{ background: '#1a1a1a', padding: '20px', textAlign: 'center', border: '1px solid #333333' }}>
              <span style={{ fontSize: '0.75rem', color: '#a0a0a0', display: 'block', fontFamily: 'sans-serif' }}>ÍNDICE CALCULADO</span>
              <span style={{ fontSize: '2.5rem', color: '#ff5500', fontWeight: '900' }}>{imc}</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}