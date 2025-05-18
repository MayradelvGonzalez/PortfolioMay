import React from 'react';
import wspIcon from '../whatsapp.png';

const ContactSection = React.forwardRef((_, ref) => {
  const telefonoWhatsApp = '+5493815160008';
  const mensajePredefinido = 'Hola, ¿como estas? Me gustaría saber más sobre tus servicios.';
  const urlWhatsApp = `https://wa.me/${telefonoWhatsApp}?text=${encodeURIComponent(mensajePredefinido)}`;

  return (
    <section
      className="py-20 bg-white"
      style={{ backgroundColor: '#c3c7c4' }}
      ref={ref}
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-green-800 mb-12 text-center">Contacto Directo</h2>

        <div className="bg-green-50 rounded-xl p-8 shadow-lg text-center">
          <p className="mb-4">¿Tienes una consulta? ¡Escríbeme directamente por WhatsApp!</p>
          <a
            href={urlWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-c3c7c4 text-black font-bold py-3 px-6 rounded-lg transition duration-300 hover:bg-red hover:text-green-800 border border-black"
          >
            Abrir WhatsApp <img src={wspIcon} alt="WhatsApp" className="inline-block w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
});

export default ContactSection;