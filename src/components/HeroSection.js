import React from 'react';

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center px-4">
      <div className="text-center max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold text-green-800 mb-6">
          Hola, soy <span className="text-green-600">FullStack MERN</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8">
          Junior Developer Jr & Project Manager Trainee
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
            Ver proyectos
          </button>
          <button className="border-2 border-green-600 text-green-600 font-bold py-3 px-8 rounded-full transition-all duration-300 hover:bg-green-50">
            Contacto
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;