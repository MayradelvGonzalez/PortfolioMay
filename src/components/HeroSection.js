import React, { useRef, useEffect, useState } from 'react';
import remoteWorkGraphic from '../avatarImg.jpg';
import 'animate.css';

const HeroSection = ({ scrollToContact }) => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false); // Estado para controlar si la sección está visible

  const handleScroll = () => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      const isCurrentlyVisible = rect.top < window.innerHeight && rect.bottom >= 0;

      if (isCurrentlyVisible) {
        setIsVisible(true);
        // Agregamos las clases de animación y la de duración
        imageRef.current?.classList.add('animate__animated', 'animate__fadeInRight', 'animate__slow');
        titleRef.current?.classList.add('animate__animated', 'animate__fadeInRight', 'animate__slow');
        paragraphRef.current?.classList.add('animate__animated', 'animate__zoomIn', 'animate__slow');
      } else {
        // Opcionalmente, puedes remover las clases si quieres que la animación se resetee
        imageRef.current?.classList.remove('animate__animated', 'animate__fadeInRight', 'animate__slow');
        titleRef.current?.classList.remove('animate__animated', 'animate__fadeInRight', 'animate__slow');
        paragraphRef.current?.classList.remove('animate__animated', 'animate__zoomIn', 'animate__slow');
        setIsVisible(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Verificamos la visibilidad inicial al cargar la página
    const checkInitialVisibility = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isInitiallyVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        if (isInitiallyVisible) {
          setIsVisible(true);
          imageRef.current?.classList.add('animate__animated', 'animate__fadeInRight', 'animate__slow');
          titleRef.current?.classList.add('animate__animated', 'animate__fadeInRight', 'animate__slow');
          paragraphRef.current?.classList.add('animate__animated', 'animate__zoomIn', 'animate__slow');
        }
      }
    };

    // Ejecutamos la verificación inicial después de un pequeño delay para asegurar que el layout esté completo
    setTimeout(checkInitialVisibility, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      className="h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center px-4"
      style={{
        backgroundColor: '#1edfa5ff',
        opacity: 0.8,
        backgroundImage:
          'repeating-radial-gradient( circle at 0 0, transparent 0, #e5e5f7 10px ), repeating-linear-gradient(rgba(45, 175, 153, 0.33),rgb(17, 99, 41) )',
      }}
      ref={sectionRef}
    >
      <div
        className="flex flex-col md:flex-row items-center justify-center max-w-2xl w-full" // Añadido w-full aquí
        style={{ backgroundColor: 'lightgray', padding: '30px', borderRadius: '20px 70px', border: '1px black solid' }}
      >
        {/* Imagen a la izquierda */}
        <img
          ref={imageRef}
          src={remoteWorkGraphic}
          alt="avatar"
          className="w-48 h-auto mb-6 md:mb-0 md:mr-6 max-w-full" // Añadido max-w-full aquí
          style={{ borderRadius: '50%', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
        />

        {/* Contenido de texto a la derecha */}
        <div className="text-center md:text-left w-full"> {/* Añadido w-full aquí */}
          <h1
            ref={titleRef}
            className="text-5xl md:text-5xl font-bold text-green-900 mb-6"
          >
            Hola, soy <span className="text-green-900">Mayra</span>
          </h1>
          <p
            ref={paragraphRef}
            className="text-xl md:text-2xl text-black-900 mb-8"
          >
            Full Stack Developer Jr & Project Manager Trainee
          </p>
          <div className="flex gap-6 justify-center md:justify-start">
            <a
              href="https://github.com/MayradelvGonzalez"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-black font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:text-black hover:bg-red-400"
              style={{ border: '1px solid black', display: 'inline-block', textDecoration: 'none' }}
            >
              Proyectos
            </a>
            <button
              className="bg-green-600 hover:bg-green-700 text-black font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:text-black hover:bg-red-400"
              style={{ border: '1px solid black' }}
              onClick={scrollToContact} // Usar la función recibida como prop
            >
              Contacto
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

