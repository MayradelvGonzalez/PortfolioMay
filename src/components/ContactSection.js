import React from 'react';

const ContactSection = () => {
  return (
    <section className="py-20 bg-white" style={{ backgroundColor: '#c3c7c4' }}>
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-green-800 mb-12 text-center">Contacto</h2>
        
        <div className="bg-green-50 rounded-xl p-8 shadow-lg">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-black-800 font-medium mb-2">Nombre</label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-4 py-3 rounded-lg border border-black-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Tu nombre"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-black-800 font-medium mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-3 rounded-lg border border-black-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="tu@email.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-black-800 font-medium mb-2">Mensaje</label>
              <textarea 
                id="message" 
                rows="4" 
                className="w-full px-4 py-3 rounded-lg border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Hola, me gustaría contactarte acerca de..."
              ></textarea>
            </div>
            
            <button 
              type="submit" 
  className="w-full hover:bg-green-700 text-black font-bold py-3 px-6 rounded-lg transition duration-300"
  style={{ backgroundColor: '#5d7c66' }}
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;