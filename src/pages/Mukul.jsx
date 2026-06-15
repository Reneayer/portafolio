import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Mukul() {
  const [noches, setNoches] = useState(2);
  const [mostrarRecibo, setMostrarRecibo] = useState(false);
  const precioNoche = 450;
  
  const subtotal = precioNoche * noches;
  const cargos = Math.round(subtotal * 0.15);
  const totalInversion = subtotal + cargos;

  return (
    <div style={{ backgroundColor: '#f4f1ea', color: '#1c2d27', minHeight: '100vh', fontFamily: 'serif', paddingBottom: '60px' }}>
      
      {/* Header Premium Esmeralda */}
      <header style={{ borderBottom: '1px solid #dcd7cc', padding: '25px 40px', background: '#0d231d' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '1.4rem', letterSpacing: '8px', color: '#dfc086', fontWeight: '300' }}>MUKUL</span>
          <Link to="/" style={{ textDecoration: 'none', border: '1px solid #dfc086', color: '#dfc086', padding: '8px 20px', fontSize: '0.8rem', fontFamily: 'sans-serif', letterSpacing: '1px', borderRadius: '2px' }}>
            REGRESAR
          </Link>
        </div>
      </header>

      {/* Grid Principal */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '50px 20px', display: 'grid', gridTemplateColumns: window.innerWidth < 950 ? '1fr' : '1.3fr 1fr', gap: '40px' }}>
        
        {/* Descripción de Lujo */}
        <div>
          <span style={{ color: '#0d231d', fontFamily: 'sans-serif', fontSize: '0.8rem', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 'bold' }}>Reserva Privada Residentes</span>
          <h1 style={{ fontSize: '3.3rem', fontWeight: '300', color: '#0d231d', margin: '15px 0', lineHeight: '1.1' }}>Refugio Exclusivo en Costa Esmeralda</h1>
          <p style={{ fontFamily: 'sans-serif', color: '#4a5a54', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '35px' }}>
            Un paraíso de ultra-lujo situado en las colinas de Tola, Rivas. Cada villa y bohío ofrece total privacidad frente al mar con servicio de mayordomo las 24 horas y accesos restringidos al turismo convencional.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', fontFamily: 'sans-serif' }}>
            <div style={{ background: '#ffffff', padding: '25px', borderRadius: '4px', border: '1px solid #e3dec3' }}>
              <span style={{ color: '#0d231d', fontSize: '1.1rem', fontWeight: 'bold', display: 'block', marginBottom: '10px' }}>✦ Cliffside Bohíos</span>
              <p style={{ color: '#5a6b64', fontSize: '0.85rem', margin: '0', lineHeight: '1.5' }}>Piscina infinita propia suspendida sobre acantilados rocosos naturales.</p>
            </div>
            <div style={{ background: '#ffffff', padding: '25px', borderRadius: '4px', border: '1px solid #e3dec3' }}>
              <span style={{ color: '#0d231d', fontSize: '1.1rem', fontWeight: 'bold', display: 'block', marginBottom: '10px' }}>✦ Campo de Golf Kidd</span>
              <p style={{ color: '#5a6b64', fontSize: '0.85rem', margin: '0', lineHeight: '1.5' }}>18 hoyos de clase mundial tallados delicadamente en la selva costera.</p>
            </div>
          </div>
        </div>

        {/* Planificador Elegante */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px', fontFamily: 'sans-serif' }}>
          
          <div style={{ background: '#ffffff', border: '1px solid #e3dec3', padding: '30px', borderRadius: '4px' }}>
            <h3 style={{ fontFamily: 'serif', fontSize: '1.3rem', color: '#0d231d', margin: '0 0 20px 0' }}>Planificador de Estadía</h3>
            
            <div style={{ marginBottom: '25px' }}>
              <label style={{ display: 'block', fontSize: '0.75rem', color: '#0d231d', fontWeight: 'bold', letterSpacing: '1px', marginBottom: '10px' }}>DURACIÓN DE ESTADÍA (NOCHES):</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <button onClick={() => { setNoches(Math.max(1, noches - 1)); setMostrarRecibo(false); }} style={{ width: '38px', height: '38px', background: '#f4f1ea', border: 'none', color: '#0d231d', borderRadius: '2px', cursor: 'pointer', fontSize: '1.1rem', fontWeight: 'bold' }}>-</button>
                <span style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#0d231d', width: '25px', textAlign: 'center' }}>{noches}</span>
                <button onClick={() => { setNoches(noches + 1); setMostrarRecibo(false); }} style={{ width: '38px', height: '38px', background: '#f4f1ea', border: 'none', color: '#0d231d', borderRadius: '2px', cursor: 'pointer', fontSize: '1.1rem', fontWeight: 'bold' }}>+</button>
              </div>
            </div>

            <div style={{ borderTop: '1px solid #f4f1ea', paddingTop: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span style={{ color: '#5a6b64', fontSize: '0.9rem' }}>Inversión Estimada:</span>
              <span style={{ fontSize: '1.6rem', fontWeight: 'bold', color: '#0d231d' }}>${totalInversion}</span>
            </div>

            <button 
              onClick={() => setMostrarRecibo(true)}
              style={{ width: '100%', padding: '14px', background: '#0d231d', border: 'none', color: '#ffffff', fontWeight: 'bold', borderRadius: '2px', marginTop: '20px', cursor: 'pointer', letterSpacing: '1px', fontSize: '0.85rem' }}
            >
              SOLICITAR ACCESO PREMIUM 🛎️
            </button>
          </div>

          {/* Voucher Imperial */}
          {mostrarRecibo && (
            <div style={{ background: '#0d231d', color: '#ffffff', padding: '25px', borderRadius: '4px', borderTop: '6px solid #dfc086', boxShadow: '0 15px 35px rgba(13,35,29,0.15)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px dashed #23433a', paddingBottom: '12px', marginBottom: '15px' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#dfc086', letterSpacing: '1px' }}>RESERVA APROBADA</span>
                <span style={{ fontSize: '0.75rem', background: '#16352c', padding: '4px 8px', borderRadius: '2px', fontWeight: 'bold', color: '#ffffff' }}>MKL-2026</span>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#a3b8b0' }}>Hospedaje ({noches} Noches):</span>
                  <span style={{ fontWeight: '600' }}>${subtotal}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#a3b8b0' }}>Cargos de Resort e Impuestos:</span>
                  <span style={{ fontWeight: '600' }}>${cargos}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #16352c', paddingTop: '10px', marginTop: '5px', fontSize: '1rem', fontWeight: 'bold' }}>
                  <span>Monto Bloqueado:</span>
                  <span style={{ color: '#dfc086' }}>${totalInversion} USD</span>
                </div>
              </div>
              <p style={{ margin: '15px 0 0 0', fontSize: '0.72rem', color: '#a3b8b0', textAlign: 'center', fontFamily: 'sans-serif' }}>
                Un agente de Concierge se comunicará a tu línea telefónica (+505 2563-7100) en los próximos 15 minutos para validar sus pases de ingreso.
              </p>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}