import React from 'react';
import { useInView } from 'react-intersection-observer';
import 'animate.css';

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

  const AnimatedSkill = ({ skill, index, animationClass }) => {
    const { ref, inView } = useInView({
      threshold: 0.5,
    });

    return (
      <span
        ref={ref}
        key={index}
        className={`bg-green-100 text-black-800 px-4 py-2 rounded-full animate__animated ${inView ? animationClass : ''}`}
      >
        {skill}
      </span>
    );
  };

  const AnimatedSoftSkill = ({ skill, index, animationClass }) => {
    const { ref, inView } = useInView({
      threshold: 0.5,
    });

    return (
      <span
        ref={ref}
        key={index}
        className={`bg-green-50 border border-green-200 text-black-800 px-4 py-2 rounded-full animate__animated ${inView ? animationClass : ''}`}
      >
        {skill}
      </span>
    );
  };

  const AnimatedTitle = () => {
    const { ref, inView } = useInView({
      threshold: 0.6,
    });

    return (
      <h2
        ref={ref}
        className={`text-3xl font-bold text-green-800 mb-12}`}
          style={{ textAlign: 'center', padding: '20px'}
        }
      >
        <u>Mis Habilidades</u>
      </h2>
    );
  };

  const AnimatedSubtitle = ({ children, animationClass }) => {
    const { ref, inView } = useInView({
      threshold: 0.6,
    });

    return (
      <h3
        ref={ref}
        className={`text-xl font-semibold text-green-800 mb-6 flex items-center animate__animated ${inView ? animationClass : ''}`}
      >
        <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
        {children}
      </h3>
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedTitle />

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <AnimatedSubtitle animationClass="animate__zoomIn">Tecnológicas</AnimatedSubtitle>
            <div className="flex flex-wrap gap-3">
              {techSkills.map((skill, index) => (
                <AnimatedSkill key={index} skill={skill} index={index} animationClass="animate__fadeIn" />
              ))}
            </div>
          </div>

          <div>
            <AnimatedSubtitle animationClass="animate__zoomIn">Blandas</AnimatedSubtitle>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, index) => (
                <AnimatedSoftSkill key={index} skill={skill} index={index} animationClass="animate__fadeIn" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;