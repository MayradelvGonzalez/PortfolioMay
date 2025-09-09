import React, { useState, useEffect, useRef, forwardRef } from 'react';
import wspIcon from '../whatsapp.png';
import linkedinIcon from '../linkedin.png';
import 'animate.css'; 

const ContactSection = forwardRef((_, ref) => {
  const telefonoWhatsApp = '+5493815160008';
  const mensajePredefinido = 'Hola, ¿cómo estás? Me gustaría saber más sobre tus servicios.';
  const urlWhatsApp = `https://wa.me/${telefonoWhatsApp}?text=${encodeURIComponent(mensajePredefinido)}`;
  const urlLinkedin = `https://www.linkedin.com/in/mayra-gonz%C3%A1lez-v/`;
  const [isVisible, setIsVisible] = useState(false);
  const titleRef = useRef(null); // Creamos una referencia para el título

  const handleScroll = () => {
    if (titleRef.current) {
      const rect = titleRef.current.getBoundingClientRect();
      const isCurrentlyVisible = rect.top < window.innerHeight && rect.bottom >= 0;
      setIsVisible(isCurrentlyVisible);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      className="py-20"
      style={{
        backgroundColor: '#e5e5f7',
        opacity: 0.8,
        backgroundImage: 'radial-gradient(#444cf7 0.5px, #e5e5f7 0.5px)',
        backgroundSize: '10px 10px',
      }}
      ref={ref}
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <h2
          ref={titleRef} 
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
            className="inline-flex items-center bg-c3c7c4 text-black font-bold py-3 px-6 rounded-lg transition duration-300 hover:bg-red hover:text-green-500 hover:bg-blue-800 border border-black"
          >
            Abrir WhatsApp
            <img
              src={wspIcon}
              alt="WhatsApp"
              className="inline-block w-5 h-5 ml-2"
            />
          </a>
        </div>
        
        <div className="bg-green-50 rounded-xl p-8 shadow-lg text-center">
          <p className="mb-4">¡Visita mi perfil en Linkedin!</p>
          <a
            href={urlLinkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-c3c7c4 text-black font-bold py-3 px-6 rounded-lg transition duration-300 hover:bg-red hover:text-blue-800 hover:bg-green-600 border border-black"
          >
            Ir a Linkedin
            <img
              src={linkedinIcon}
              alt="LInkedin"
              className="inline-block w-5 h-5 ml-2"
            />
          </a>
        </div>
      </div>
    </section>
  );
});

const Footer = () => (
  <footer className="bg-gray-300 py-1 text-center text-gray-600"
  style={{
        backgroundColor: '#e5e5f7',
        opacity: 0.8,
        backgroundImage: 'radial-gradient(#444cf7 0.5px, #e5e5f7 0.5px)',
        backgroundSize: '10px 10px',
      }}
  
  >
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="bg-green-500 text-black font-semibold py-2 px-4 shadow-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-green-800 animate__animated animate__fadeIn"
    >
      Volver al Inicio🔼
    </button>
  </footer>
);

const ContactWithFooter = forwardRef((_, ref) => (
  <>
    <ContactSection ref={ref} />
    <Footer 

    />
  </>
));

export default ContactWithFooter;