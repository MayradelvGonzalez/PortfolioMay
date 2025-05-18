import React, { useRef } from 'react';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';

function App() {
  const contactSectionRef = useRef(null);

  const scrollToContact = () => {
    contactSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-sans text-gray-800">
      <HeroSection scrollToContact={scrollToContact} /> {/* Pasar la función */}
      <SkillsSection />
      <EducationSection />
      <ContactSection ref={contactSectionRef} /> {/* Pasar la ref */}

      <footer className="bg-green-800 text-white py-8 text-center">
        <p>© {new Date().getFullYear()} Mi Portfolio Mayra del Valle González</p>
        <p className="mt-2 text-green-200">Desarrollado con 💖</p>
      </footer>
    </div>
  );
}

export default App;