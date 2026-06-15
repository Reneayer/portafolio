import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Dental() {
  const [servicioSeleccionado, setServicioSeleccionado] = useState(30);
  const [incluirLimpieza, setIncluirLimpieza] = useState(false);

  const servicios = [
    { nombre: "Odontología General", desc: "Limpiezas ultrasónicas y calzas estéticas.", precio: 30 },
    { nombre: "Ortodoncia Avanzada", desc: "Frenillos metálicos y estéticos con financiamiento.", precio: 45 },
    { nombre: "Estética Dental", desc: "Blanqueamiento LED y carillas de porcelana.", precio: 120 },
    { nombre: "Implantes & Cirugía", desc: "Restauración de piezas con alta tecnología.", precio: 250 }
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', flexDirection: window.innerWidth < 900 ? 'column' : 'row', fontFamily: 'sans-serif', backgroundColor: '#f0fdf4' }}>
      
      {/* Panel Izquierdo Fijo */}
      <div style={{ flex: '1', background: 'linear-gradient(135deg, #0891b2 0%, #0e766e 100%)', color: 'white', padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <Link to="/" style={{ textDecoration: 'none', color: '#cffafe', fontWeight: 'bold', fontSize: '0.9rem' }}>← Volver al Inicio</Link>
          <h1 style={{ fontSize: '3rem', fontWeight: '850', marginTop: '40px', marginBottom: '10px' }}>DentalCare</h1>
          <p style={{ color: '#cffafe', fontSize: '1.1rem', lineHeight: '1.5' }}>Tecnología bucal de alta precisión y especialistas certificados.</p>
          
          {/* Status Widget */}
          <div style={{ background: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '8px', marginTop: '30px', border: '1px solid rgba(255,255,255,0.2)' }}>
            <span style={{ fontSize: '0.8rem', uppercase: 'true', letterSpacing: '1px', color: '#cffafe', display: 'block' }}>ESTADO DE LA CLÍNICA HOY</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '5px' }}>
              <div style={{ width: '10px', height: '10px', background: '#25D366', borderRadius: '50%' }}></div>
              <span style={{ fontWeight: 'bold' }}>3 Especialistas Disponibles en Turno</span>
            </div>
          </div>
        </div>
        <div>
          <p style={{ margin: '5px 0', fontSize: '0.9rem' }}>📍 Los Robles, Managua. De la Plaza El Sol, 2c al sur.</p>
          <p style={{ margin: '5px 0', fontWeight: 'bold', color: '#25D366' }}>📞 WhatsApp: +505 8124-3677</p>
        </div>
      </div>

      {/* Panel Derecho Dinámico */}
      <div style={{ flex: '1.4', padding: '50px 40px', overflowY: 'auto' }}>
        <h2 style={{ fontSize: '1.6rem', color: '#155e75', marginBottom: '25px', fontWeight: '700' }}>Nuestras Especialidades</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '40px' }}>
          {servicios.map((s, i) => (
            <div key={i} style={{ background: '#ffffff', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.02)', borderLeft: '4px solid #06b6d4' }}>
              <h3 style={{ margin: '0 0 5px 0', color: '#0f766e', fontSize: '1.1rem' }}>{s.nombre}</h3>
              <p style={{ color: '#64748b', fontSize: '0.85rem', margin: '0 0 10px 0', lineHeight: '1.4' }}>{s.desc}</p>
              <span style={{ fontWeight: 'bold', color: '#0891b2', fontSize: '0.95rem' }}>Desde ${s.precio}</span>
            </div>
          ))}
        </div>

        {/* Simulador Interactivo Exclusivo */}
        <div style={{ background: '#ffffff', padding: '30px', borderRadius: '16px', boxShadow: '0 10px 25px rgba(0,0,0,0.03)', border: '1px solid #e2e8f0' }}>
          <h3 style={{ margin: '0 0 5px 0', color: '#1e293b' }}>Cotizador Rápido de Presupuesto</h3>
          <p style={{ color: '#64748b', fontSize: '0.85rem', marginTop: '0', marginBottom: '20px' }}>Selecciona un tratamiento base para calcular un estimado aproximado institucional.</p>
          
          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '8px', color: '#475569' }}>Tratamiento Requerido:</label>
          <select 
            onChange={(e) => setServicioSeleccionado(Number(e.target.value))}
            style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', background: '#f8fafc', marginBottom: '15px', outline: 'none' }}
          >
            {servicios.map((s, i) => <option key={i} value={s.precio}>{s.nombre} (${s.precio})</option>)}
          </select>

          <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: '#334155', cursor: 'pointer', marginBottom: '25px' }}>
            <input type="checkbox" checked={incluirLimpieza} onChange={(e) => setIncluirLimpieza(e.target.checked)} style={{ width: '16px', height: '16px' }} />
            Añadir Diagnóstico + Limpieza Ultrasonido (+ $15)
          </label>

          <div style={{ background: '#ecfeff', padding: '20px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #cffafe' }}>
            <span style={{ fontWeight: 'bold', color: '#0e766e' }}>Total Estimado:</span>
            <span style={{ fontSize: '1.8rem', fontWeight: '800', color: '#0891b2' }}>${servicioSeleccionado + (incluirLimpieza ? 15 : 0)}</span>
          </div>
        </div>
      </div>

    </div>
  );
}