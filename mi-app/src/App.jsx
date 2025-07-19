import { useEffect, useRef, useState } from 'react';
import './styles.css';

function App() {
  const bienvenidaRef = useRef(null);
  const [mostrarForm, setMostrarForm] = useState(false);
  const [msgExito, setMsgExito] = useState('');
  const contactos = useRef([]);

  /* ---------- Bienvenida animada ---------- */
  useEffect(() => {
    const texto = 'Bienvenido a mi web personal';
    const tiempo = 100;
    const espera = 3000;
    let i = 0;

    function escribir() {
      if (i < texto.length) {
        bienvenidaRef.current.textContent += texto.charAt(i);
        i++;
        setTimeout(escribir, tiempo);
      } else {
        setTimeout(() => {
          bienvenidaRef.current.textContent = '';
          i = 0;
          escribir();
        }, espera);
      }
    }
    escribir();
  }, []);
  /* ---------- Validación y envío ---------- */
  const esEmailValido = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const guardarContacto = (n, a, e, m) => {
    contactos.current.push({ fecha: new Date().toLocaleString(), nombre: n, apellido: a, email: e, motivo: m });
    console.log('Contactos:', contactos.current);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const nombre   = fd.get('nombre');
    const apellido = fd.get('apellido');
    const email    = fd.get('email').trim();
    const motivo   = fd.get('motivo');

    if (!esEmailValido(email)) {
      alert('Por favor ingresa un correo electrónico válido.');
      return;
    }

    guardarContacto(nombre, apellido, email, motivo);
    setMsgExito('¡Enviado con éxito!');
    e.target.reset();

    setTimeout(() => {
      setMostrarForm(false);
      setMsgExito('');
    }, 1500);
  };

  return (
    <>
      {/* Logo React girando */}
      <div className="react-corner">
        <img
          className="react-logo"
          src="public/react.svg"
          alt="React logo"
        />
        <p>¡Ahora con React!</p>
      </div>
      {/* ------------- HEADER ------------- */}
      <div className="Roberto">
        <h1>Roberto Yañez San</h1>
        <h2 id="Bienvenida" ref={bienvenidaRef}></h2>
      </div>

      {/* ------------- IMAGEN ------------- */}
      <div className="imagen_roberto">
        <img src="/img/RobertoTemp.png" alt="Persona random que me representa" />
      </div>

      {/* ------------- CUADRO SOBRE MÍ ------------- */}
      <div className="cuadro1">
        <div className="SobreMi">
          <h2>Sobre mí:</h2>
          <ul className="info-lista">
            <li><strong>📚 Estudios:</strong> Actualmente me encuentro estudiando Ingeniería en Ciberseguridad en INACAP (Santiago Sur)</li>
            <li><strong>💼 Trabajo:</strong> Con mi familia tenemos una Pyme de estampados personalizados donde principalmente confeccionamos pecheras con diferentes estilos y las personalizamos a gusto del cliente.</li>
            <li><strong>🧶 Pasatiempos:</strong> Me encanta el crochet y las manualidades, he logrado hacer mis propios patrones de Amigurumis y en un futuro espero crear muchos más.</li>
            <li><strong>🎶 Gusto Musical:</strong> Desde hace mucho tiempo Hatsune Miku ha estado presente en mi vida como mi principal gusto musical, me llena de alegría escuchar sus canciones. 💙</li>
          </ul>
        </div>
      </div>

      {/* ------------- BOTONES ------------- */}
      <div className="Botones">
        <button className="botoncancion"
                onClick={() => window.open('https://music.youtube.com/watch?v=KlTNKOnfXFk', '_blank')}>
          <strong>Mi Canción Favorita</strong>
        </button>
        <button className="botonPyme"
                onClick={() => window.open('https://www.instagram.com/nanysan.cl/?hl=es', '_blank')}>
          <strong>Mi Pyme</strong>
        </button>
      </div>

      {/* ------------- CONTACTO ------------- */}
      <div className="ContenerdorContacto">
        <button className="btn-contacto"
                onClick={() => setMostrarForm(!mostrarForm)}>
          ¿Quieres contactarme? Haz click aquí
        </button>

        {msgExito && <div className="mensaje-exito-visible">{msgExito}</div>}

        <div className={`formulario-estilos ${mostrarForm ? 'abierto' : ''}`}>
          <h3>Formulario de Contacto</h3>
          <form onSubmit={handleSubmit}>
            <div className="CampoFormulario">
              <label>Nombre:</label>
              <input name="nombre" required />
            </div>
            <div className="CampoFormulario">
              <label>Apellido:</label>
              <input name="apellido" required />
            </div>
            <div className="CampoFormulario">
              <label>Correo electrónico:</label>
              <input type="email" name="email" required />
            </div>
            <div className="CampoFormulario">
              <label>Motivo de contacto:</label>
              <textarea name="motivo" rows="4" required />
            </div>
            <button type="submit" className="btn-enviar">ENVIAR</button>
          </form>
        </div>
      </div>

      {/* ------------- FOOTER ------------- */}
      <footer>
        <button className="Volver"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Volver arriba
        </button>
      </footer>
    </>
  );
}

export default App;