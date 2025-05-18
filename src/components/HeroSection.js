import React from 'react';
import remoteWorkGraphic from '../imagen.png'; // Importa la imagen (ajusta la ruta)

const HeroSection = ({ scrollToContact }) => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center px-4"
           style={{
    backgroundColor: '#e5e5f7',
    opacity: 0.8,
    backgroundImage: 'repeating-radial-gradient( circle at 0 0, transparent 0, #e5e5f7 10px ), repeating-linear-gradient(rgba(45, 175, 153, 0.33),rgb(17, 99, 41) )',
  }}
    
    
    
    
    >
      <div className="flex flex-col md:flex-row items-center justify-center max-w-5xl" 

      style={{ backgroundColor: 'lightgray', padding: '120px', borderRadius: '20px 70px', border: '1px black solid'}} // 
      
      >
        {/* Imagen a la izquierda (se mostrará en la parte superior en pantallas pequeñas) */}
        <img
          src={remoteWorkGraphic}
          alt="Ilustración de trabajo remoto o diseño"
          className="w-48 h-auto mb-6 md:mb-0 md:mr-6" // Ajusta el tamaño y los márgenes según necesites
        />

        {/* Contenido de texto a la derecha */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-bold text-green-900 mb-6">
            Hola, soy <span className="text-green-900">Mayra</span>
          </h1>
          <p className="text-xl md:text-2xl text-black-900 mb-8">
            Full Stack Developer Jr & Project Manager Trainee
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
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