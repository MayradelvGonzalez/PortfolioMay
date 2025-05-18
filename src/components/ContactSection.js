import React, { useState } from 'react';
import wspIcon from '../whatsapp.png';
const ContactSection = React.forwardRef((_, ref) => {
  const [formData, setFormData] = useState({ name: '', message: '' });
  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mensajeWhatsApp = `Nuevo mensaje de contacto:\n\nNombre: ${formData.name}\nMensaje: ${formData.message}`;
    const urlWhatsApp = `https://wa.me/+5493815160008?text=${encodeURIComponent(mensajeWhatsApp)}`;

    window.open(urlWhatsApp, '_blank');
    setMessageSent(true); // Mostrar el mensaje de éxito
    setTimeout(() => {
      setMessageSent(false); // Ocultar el mensaje de éxito después de unos segundos
      setFormData({ name: '', message: '' }); // Limpiar el formulario
    }, 3000); // La alerta se ocultará después de 3 segundos (ajusta el tiempo si lo deseas)
  };

  return (
    <section
      className="py-20 bg-white"
      style={{ backgroundColor: '#c3c7c4' }}
      ref={ref}
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-green-800 mb-12 text-center">Contacto</h2>

        <div className="bg-green-50 rounded-xl p-8 shadow-lg relative"> {/* Añadido relative para posicionar el mensaje */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-black-800 font-medium mb-2">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-black-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Tu nombre"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-black-800 font-medium mb-2">Mensaje</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Hola, me gustaría contactarte acerca de..."
                required
              ></textarea>
            </div>

           <button
  type="submit"
  className="w-full text-black font-bold py-3 px-6 rounded-lg transition duration-300 hover:bg-red hover:text-green-800"
  style={{ backgroundColor: '#c3c7c4', border: '1px solid black' }}
>
  Enviar mensaje por WhatsApp <img src={wspIcon} alt="WhatsApp" className="inline-block w-5 h-5 ml-2" />
</button>
          </form>

          {messageSent && (
             <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
    <div className="bg-white p-6 rounded-md shadow-lg text-center">
  <p className="text-lg font-semibold text-green-600">Tu mensaje ha sido preparado para ser enviado por WhatsApp.</p>
</div>
  </div>
          )}
        </div>
      </div>
    </section>
  );
});

export default ContactSection;