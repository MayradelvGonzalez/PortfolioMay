import React from 'react';
import { useInView } from 'react-intersection-observer';
import 'animate.css';

const AnimatedItem = ({ item, animationClass }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`border-l-8 border-green-500 pl-6 py-2 animate__animated ${inView && animationClass ? animationClass : ''}`}
      style={{ backgroundColor: '#c3c7c4' }}
    >
      <h4 className="font-bold text-green-800">{item.title || item.titulo}</h4>
      <p className="text-black-600">{item.institution}</p>
      <p className="text-sm text-black-500">{item.period || item.periodo}</p>
    </div>
  );
};

const EducationSection = () => {
  const education = [
    {
      title: "FULLSTACK MERN & MOBILE APPS",
      institution: "Mindhub LA",
      period: "Abril 2022 - Agosto 2022"
    },
    {
      title: "LICENCIATURA EN INFORMÁTICA",
      institution: "UNT",
      period: "2019"
    },
    {
      title: "TECNICATURA UNIVERSITARIA EN SONORIZACIÓN",
      institution: "Facultad de Artes - UNT",
      period: "Marzo 2010 - Marzo 2013"
    }
  ];

  const courses = [
    {
      titulo: "Planificación y gestión de proyectos:PMBOK y Agile Scrum",
      institution: "Udemy",
      periodo: "Mayo 2025"
    },
    {
      titulo: "Data Analytics",
      institution: "Coderhouse",
      periodo: "Junio 2024"
    },
    {
      titulo: "Curso Big Data",
      institution: "Codo a Codo",
      periodo: "Agosto 2023"
    },
    {
      titulo: "NodeJS - Creando API con Express y MongoDB",
      institution: "Udemy",
      periodo: "Abril 2023"
    },
    {
      titulo: "Universidad Javascript - De cero a master",
      institution: "Udemy",
      periodo: "Abril 2021"
    },
    {
      titulo: "Productividad Personal",
      institution: "Google Actívate",
      periodo: "Junio 2021"
    },
    {
      titulo: "ReactJS, Guía desde 0",
      institution: "Udemy",
      periodo: "Junio 2021"
    },
    {
      titulo: "HTML, Javascript y Bootstrap",
      institution: "Udemy",
      periodo: "Agosto 2021"
    }
  ];

  const AnimatedTitle = ({ children, animationClass }) => {
    const { ref, inView } = useInView({
      threshold: 0.1,
    });

    return (
      <h3
        ref={ref}
        className={`text-xl font-bold text-green-700 mb-6 animate__animated ${inView ? animationClass : ''}`}
      >
        {children}
      </h3>
    );
  };

  return (
    <section className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-green-800 mb-12 text-center"><u>Formación Académica</u></h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <AnimatedTitle animationClass="animate__zoomIn">Educación Formal</AnimatedTitle>
            <div className="space-y-6">
              {education.map((item, index) => (
                <AnimatedItem key={index} item={item} animationClass="animate__zoomIn" />
              ))}
            </div>
          </div>

          <div>
            <AnimatedTitle animationClass="animate__zoomIn">Cursos y Certificaciones</AnimatedTitle>
            <div className="space-y-6">
              {courses.map((item, index) => (
                <AnimatedItem key={index} item={item} animationClass="animate__zoomIn" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;