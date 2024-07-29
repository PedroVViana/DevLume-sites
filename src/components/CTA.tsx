import React from 'react';
import heroImage from '../assets/image/bg.jpg';

const CTA: React.FC = () => {
  return (
    <section  
      className="relative flex flex-col items-center justify-center text-center py-16 text-white"
      style={{ 
        backgroundImage: `url(${heroImage})`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '300px'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center flex-col p-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Pronto para Transformar Seu Negócio?</h2>
        <a href="#contact-form" className="px-6 py-3 bg-primary-color text-white rounded hover:bg-secondary-color transition-transform transform hover:scale-105">
          Entre em Contato
        </a>
      </div>
    </section>
  );
}

export default CTA;
