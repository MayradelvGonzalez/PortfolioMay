import React from 'react';

const SkillsSection = () => {
  const techSkills = [
    'Javascript', 'ReactJS', 'Redux', 
    'NodeJS', 'NestJS', 'MongoDB',
    'Bootstrap', 'Material UI'
  ];

  const softSkills = [
    'Perseverancia', 'Responsabilidad', 'Comunicación',
    'Escucha activa', 'Flexibilidad', 'Adaptación',
    'Autonomía', 'Manejo de equipos'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-green-800 mb-12 text-center"><u>Mis Habilidades</u></h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-green-700 mb-6 flex items-center">
              <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
              Tecnológicas
            </h3>
            <div className="flex flex-wrap gap-3">
              {techSkills.map((skill, index) => (
                <span key={index} className="bg-green-100 text-green-800 px-4 py-2 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-green-700 mb-6 flex items-center">
              <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
              Blandas
            </h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <span key={index} className="bg-green-50 border border-green-200 text-green-800 px-4 py-2 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;