// import React from 'react';
// import { useInView } from 'react-intersection-observer';
// import 'animate.css';

// const SkillsSection = () => {
//   const techSkills = [
//     'Javascript', 'ReactJS', 'Redux',
//     'NodeJS', 'NestJS', 'MongoDB',
//     'Bootstrap', 'Material UI'
//   ];

//   const softSkills = [
//     'Perseverancia', 'Responsabilidad', 'Comunicación',
//     'Escucha activa', 'Flexibilidad', 'Adaptación',
//     'Autonomía', 'Manejo de equipos'
//   ];

//   const AnimatedSkill = ({ skill, index, animationClass }) => {
//     const { ref, inView } = useInView({
//       threshold: 0.5,
//     });

//     return (
//       <span
//         ref={ref}
//         key={index}
//         className={`bg-black-100 text-black-800 px-4 py-2 rounded-full animate__animated ${inView ? animationClass : ''}`}
//       >
//         {skill}
//       </span>
//     );
//   };

//   const AnimatedSoftSkill = ({ skill, index, animationClass }) => {
//     const { ref, inView } = useInView({
//       threshold: 0.5,
//     });

//     return (
//       <span
//         ref={ref}
//         key={index}
//         className={`bg-green-50 border border-green-200 text-black-800 px-4 py-2 rounded-full animate__animated ${inView ? animationClass : ''}`}
//       >
//         {skill}
//       </span>
//     );
//   };

//   const AnimatedTitle = () => {
//     const { ref, inView } = useInView({
//       threshold: 0.6,
//     });

//     return (
//       <h2
//         ref={ref}
//         className={`text-3xl font-bold text-green-800 mb-12}`}
//           style={{ textAlign: 'center', padding: '20px'}
//         }
//       >
//         <u>Mis Habilidades</u>
//       </h2>
//     );
//   };

//   const AnimatedSubtitle = ({ children, animationClass }) => {
//     const { ref, inView } = useInView({
//       threshold: 0.6,
//     });

//     return (
//       <h3
//         ref={ref}
//         className={`text-xl font-semibold text-green-800 mb-6 flex items-center animate__animated ${inView ? animationClass : ''}`}
//       >
//         <span className="w-1 h-6 bg-blue-500 mr-2"></span>
//         {children}
//       </h3>
//     );
//   };

//   return (
//     <section className="py-20 bg-white">
//       <div className="container mx-auto px-4">
//         <AnimatedTitle />

//         <div className="grid md:grid-cols-2 gap-12">
//           <div>
//             <AnimatedSubtitle animationClass="animate__zoomIn">Tecnológicas</AnimatedSubtitle>
//             <div className="flex flex-wrap gap-3">
//               {techSkills.map((skill, index) => (
//                 <AnimatedSkill key={index} skill={skill} index={index} animationClass="animate__fadeIn" />
//               ))}
//             </div>
//           </div>

//           <div>
//             <AnimatedSubtitle animationClass="animate__zoomIn">Blandas</AnimatedSubtitle>
//             <div className="flex flex-wrap gap-3">
//               {softSkills.map((skill, index) => (
//                 <AnimatedSoftSkill key={index} skill={skill} index={index} animationClass="animate__fadeIn" />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SkillsSection;




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
        className={`bg-green-100 text-black px-4 py-2 rounded-full animate__animated ${inView ? animationClass : ''}`}
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
        className={`bg-green-50 border border-green-200 text-black px-4 py-2 rounded-full animate__animated ${inView ? animationClass : ''}`}
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
        className={`text-3xl font-bold text-black-800 mb-12 animate__animated ${inView ? 'animate__fadeIn' : ''}`}
        style={{ textAlign: 'center', padding: '20px' }}
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
        className={`text-xl font-semibold text-black-800 mb-6 flex items-center animate__animated ${inView ? animationClass : ''}`}
      >
        <span className="w-1 h-6 bg-blue-500 mr-2"></span>
        {children}
      </h3>
    );
  };

  return (
    <section className="skills-section">
      <style>{`
        .skills-section {
            position: relative;
            overflow: hidden;
            background: #636161ff;
            padding: 5rem 0;
            color: white;
        }

        .animated-background {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
            background: #444444ff;
        }

        .animated-background > svg {
            width: 100%;
            height: 100%;
        }

        .content-container {
            position: relative;
            z-index: 1;
        }
      `}</style>

      <div className="animated-background">
        <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <defs>
            <radialGradient id="Gradient1" cx="40%" cy="90%" fx="0.441602%" fy="30%" r=".5"><animate attributeName="fx" dur="34s" values="0%;3%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(80, 65, 80, 1)"></stop><stop offset="100%" stop-color="rgba(171, 167, 171, 0)"></stop></radialGradient>
            <radialGradient id="Gradient2" cx="40%" cy="90%" fx="2.68147%" fy="30%" r=".5"><animate attributeName="fx" dur="23.5s" values="0%;3%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(255, 255, 0, 1)"></stop><stop offset="100%" stop-color="rgba(255, 255, 0, 0)"></stop></radialGradient>
            <radialGradient id="Gradient3" cx="40%" cy="90%" fx="0.836536%" fy="30%" r=".5"><animate attributeName="fx" dur="21.5s" values="0%;3%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(33, 204, 70, 1)"></stop><stop offset="100%" stop-color="rgba(0, 255, 255, 0)"></stop></radialGradient>
            <radialGradient id="Gradient4" cx="40%" cy="90%" fx="4.56417%" fy="30%" r=".5"><animate attributeName="fx" dur="23s" values="0%;5%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(0, 255, 0, 1)"></stop><stop offset="100%" stop-color="rgba(0, 255, 0, 0)"></stop></radialGradient>
            <radialGradient id="Gradient5" cx="40%" cy="90%" fx="2.65405%" fy="30%" r=".5"><animate attributeName="fx" dur="24.5s" values="0%;5%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(147, 147, 211, 1)"></stop><stop offset="100%" stop-color="rgba(0,0,255, 0)"></stop></radialGradient>
            <radialGradient id="Gradient6" cx="40%" cy="90%" fx="0.981338%" fy="30%" r=".5"><animate attributeName="fx" dur="25.5s" values="0%;5%;0%" repeatCount="indefinite"></animate><stop offset="0%" stop-color="rgba(51, 97, 47, 1)"></stop><stop offset="100%" stop-color="rgba(255,0,0, 0)"></stop></radialGradient>
            </defs>
            <rect x="13.744%" y="1.18473%" width="100%" height="100%" fill="url(#Gradient1)" transform="rotate(334.41 50 50)"><animate attributeName="x" dur="20s" values="25%;0%;25%" repeatCount="indefinite"></animate><animate attributeName="y" dur="21s" values="0%;25%;0%" repeatCount="indefinite"></animate><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="7s" repeatCount="indefinite"></animateTransform></rect>
            <rect x="-2.17916%" y="35.4267%" width="100%" height="100%" fill="url(#Gradient2)" transform="rotate(255.072 50 50)"><animate attributeName="x" dur="23s" values="-25%;0%;-25%" repeatCount="indefinite"></animate><animate attributeName="y" dur="24s" values="0%;50%;0%" repeatCount="indefinite"></animate><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="12s" repeatCount="indefinite"></animateTransform>
            </rect>
            <rect x="9.00483%" y="14.5733%" width="100%" height="100%" fill="url(#Gradient3)" transform="rotate(139.903 50 50)"><animate attributeName="x" dur="25s" values="0%;25%;0%" repeatCount="indefinite"></animate><animate attributeName="y" dur="12s" values="0%;25%;0%" repeatCount="indefinite"></animate><animateTransform attributeName="transform" type="rotate" from="360 50 50" to="0 50 50" dur="9s" repeatCount="indefinite"></animateTransform>
            </rect>
        </svg>
      </div>

      <div className="content-container container mx-auto px-4">
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