import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Ranchos() {
  const [categoria, setCategoria] = useState('todos');
  const [cuentaMesa, setCuentaMesa] = useState(0);

  const menuCompleto = [
    { id: 1, categoria: 'carnes', nombre: "Churrasco Típico", desc: "Lomo asado a la parrilla, chimichurri, gallopinto y plátano frito.", precio: 28 },
    { id: 2, categoria: 'carnes', nombre: "Lomo de Costilla Extra", desc: "Corte grueso premium seleccionado, cocinado a las brasas ardientes.", precio: 32 },
    { id: 3, categoria: 'otros', nombre: "Costillas de Cerdo BBQ", desc: "Costillas tiernas ahumadas lentamente bañadas en salsa barbacoa de la casa.", precio: 22 },
    { id: 4, categoria: 'otros', nombre: "Pollo a la Parrilla", desc: "Pechuga marinada en cítricos criollos y asada al carbón, con vegetales.", precio: 18 },
    { id: 5, categoria: 'entradas', nombre: "Tostones con Queso", desc: "Cuatro tostones grandes de plátano verde con queso frito nicaragüense.", precio: 8 },
    { id: 6, categoria: 'entradas', nombre: "Ceviche Criollo", desc: "Pescado blanco marinado en jugo de limón puro, cebolla y cilantro.", precio: 12 },
    { id: 7, categoria: 'bebidas', nombre: "Macuá de la Casa", desc: "El cóctel nacional a base de ron, jugo de guayaba y naranja.", precio: 7 },
    { id: 8, categoria: 'bebidas', nombre: "Tonal de Té Helado", desc: "Té natural preparado en frío con hierbabuena y limón.", precio: 4 }
  ];

  const platosFiltrados = categoria === 'todos' 
    ? menuCompleto 
    : menuCompleto.filter(p => p.categoria === categoria);

  return (
    <div style={{ backgroundColor: '#121212', color: '#f5efe6', minHeight: '100vh', fontFamily: 'serif', padding: '40px 20px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* Navbar - Brasa Roja */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #b22222', paddingBottom: '20px', marginBottom: '30px' }}>
          <div>
            <h1 style={{ fontSize: '2.8rem', color: '#ffffff', margin: '0', letterSpacing: '2px' }}>LOS RANCHOS</h1>
            <p style={{ fontStyle: 'italic', color: '#d4af37', margin: '5px 0 0 0', fontFamily: 'sans-serif', fontSize: '0.9rem' }}>Tradición y Excelencia en Fuego y Sabor</p>
          </div>
          <Link to="/" style={{ textDecoration: 'none', background: '#b22222', color: '#ffffff', padding: '10px 20px', borderRadius: '4px', fontWeight: 'bold', fontFamily: 'sans-serif', fontSize: '0.85rem', letterSpacing: '0.5px' }}>
            ← SALIR AL PORTAL
          </Link>
        </div>

        {/* Filtros de Categorías */}
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '30px', fontFamily: 'sans-serif' }}>
          {['todos', 'carnes', 'otros', 'entradas', 'bebidas'].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoria(cat)}
              style={{
                padding: '10px 20px',
                background: categoria === cat ? '#b22222' : '#1e1e1e',
                color: '#ffffff',
                border: categoria === cat ? '1px solid #b22222' : '1px solid #333333',
                borderRadius: '4px',
                cursor: 'pointer',
                textTransform: 'uppercase',
                fontSize: '0.8rem',
                fontWeight: 'bold',
                transition: '0.3s'
              }}
            >
              {cat === 'todos' ? 'Ver Todo' : cat}
            </button>
          ))}
        </div>

        {/* Contenido Principal */}
        <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth < 900 ? '1fr' : '2fr 1fr', gap: '30px' }}>
          
          {/* Grid de Platos */}
          <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth < 650 ? '1fr' : '1fr 1fr', gap: '20px', alignContent: 'start' }}>
            {platosFiltrados.map((p) => (
              <div key={p.id} style={{ background: '#1a1a1a', padding: '20px', borderRadius: '6px', border: '1px solid #2d2d2d', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
                    <h3 style={{ margin: '0', color: '#ffffff', fontSize: '1.15rem' }}>{p.nombre}</h3>
                    <span style={{ color: '#d4af37', fontWeight: 'bold', fontSize: '1.1rem' }}>${p.precio}</span>
                  </div>
                  <p style={{ margin: '0 0 15px 0', color: '#a0a0a0', fontSize: '0.85rem', fontFamily: 'sans-serif', lineHeight: '1.4' }}>{p.desc}</p>
                </div>
                <button 
                  onClick={() => setCuentaMesa(cuentaMesa + p.precio)}
                  style={{ width: '100%', background: 'transparent', border: '1px solid #b22222', color: '#b22222', padding: '8px', borderRadius: '4px', cursor: 'pointer', fontFamily: 'sans-serif', fontSize: '0.8rem', fontWeight: 'bold', transition: '0.2s' }}
                >
                  Agregar a la Orden
                </button>
              </div>
            ))}
          </div>

          {/* Comandera Lateral */}
          <div style={{ background: '#1a1a1a', border: '1px solid #333333', padding: '25px', borderRadius: '8px', alignSelf: 'start' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#ffffff', fontSize: '1.3rem' }}>Detalle de Mesa</h3>
            <p style={{ color: '#888888', fontSize: '0.85rem', marginTop: '0', marginBottom: '20px', fontFamily: 'sans-serif' }}>Presupuesto estimado acumulado para tus consumos actuales.</p>
            
            <div style={{ background: '#121212', padding: '20px', borderRadius: '4px', textAlign: 'center', marginBottom: '20px', border: '1px dashed #b22222' }}>
              <span style={{ fontSize: '0.8rem', color: '#888888', display: 'block', fontFamily: 'sans-serif', marginBottom: '5px' }}>TOTAL IMPUESTOS INC.</span>
              <span style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#d4af37' }}>${cuentaMesa}</span>
            </div>

            {cuentaMesa > 0 && (
              <button onClick={() => setCuentaMesa(0)} style={{ width: '100%', padding: '10px', background: '#2d2d2d', border: 'none', color: '#ffffff', borderRadius: '4px', cursor: 'pointer', fontSize: '0.8rem', fontFamily: 'sans-serif', marginBottom: '15px' }}>
                Vaciar Orden
              </button>
            )}

            <div style={{ fontSize: '0.8rem', color: '#888888', fontFamily: 'sans-serif', borderTop: '1px solid #2d2d2d', paddingTop: '15px', lineHeight: '1.5' }}>
              <p style={{ margin: '0' }}>📍 Km 3.5 Carretera a Masaya, Managua.</p>
              <p style={{ margin: '5px 0 0 0', fontWeight: 'bold', color: '#ffffff' }}>Reservaciones Tel: +505 2270-5051</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}