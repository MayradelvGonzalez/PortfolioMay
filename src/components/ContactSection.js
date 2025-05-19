import React, { useState, useEffect, useRef, forwardRef } from 'react';
import wspIcon from '../whatsapp.png';
import 'animate.css'; // Asegúrate de importar la librería de animación

const ContactSection = forwardRef((_, ref) => {
  const telefonoWhatsApp = '+5493815160008';
  const mensajePredefinido = 'Hola, ¿cómo estás? Me gustaría saber más sobre tus servicios.';
  const urlWhatsApp = `https://wa.me/${telefonoWhatsApp}?text=${encodeURIComponent(mensajePredefinido)}`;
  const [isVisible, setIsVisible] = useState(false);
  const titleRef = useRef(null); // Creamos una referencia para el título

  const handleScroll = () => {
    if (titleRef.current) {
      const rect = titleRef.current.getBoundingClientRect();
      // Verificamos si el elemento está dentro de la ventana visible
      const isCurrentlyVisible = rect.top < window.innerHeight && rect.bottom >= 0;
      setIsVisible(isCurrentlyVisible);
    }

    // Mantenemos la lógica para el botón "Volver al Inicio"
    if (window.scrollY > 100) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  };

  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      className="py-20 bg-white"
      style={{ backgroundColor: '#c3c7c4' }}
      ref={ref}
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <h2
          ref={titleRef} // Asignamos la referencia al h2
          className={`text-3xl font-bold text-green-800 mb-12 text-center ${
            isVisible ? 'animate__animated animate__rubberBand animate__slow' : ''
          }`}
        >
          Contacto
        </h2>

        <div className="bg-green-50 rounded-xl p-8 shadow-lg text-center">
          <p className="mb-4">¿Tienes una consulta? ¡Escríbeme directamente por WhatsApp!</p>
          <a
            href={urlWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-c3c7c4 text-black font-bold py-3 px-6 rounded-lg transition duration-300 hover:bg-red hover:text-green-800 border border-black"
          >
            Abrir WhatsApp
            <img
              src={wspIcon}
              alt="WhatsApp"
              className="inline-block w-5 h-5 ml-2"
            />
          </a>
        </div>
     
      {showScrollToTop && (
      <button
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  className="fixed bottom-8 right-8 bg-gray-600 text-white font-bold py-2 px-4 rounded-full shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 animate__animated animate__fadeIn"
>
  🔼
</button>
      )} </div>

    </section>
  );
});

export default ContactSection;