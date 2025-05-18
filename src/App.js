import React from 'react';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="font-sans text-gray-800">
      <HeroSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
      
      <footer className="bg-green-800 text-white py-8 text-center">
        <p>© {new Date().getFullYear()} Mi Portfolio Profesional</p>
        <p className="mt-2 text-green-200">Desarrollado con React y Tailwind CSS</p>
      </footer>
    </div>
  );
}

export default App;


// DONE