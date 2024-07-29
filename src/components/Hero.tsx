import React from 'react';
import heroImage from '../assets/image/bg.jpg';
import logo from "../assets/image/logo.png"

const Hero: React.FC = () => {
  return (
    <section  
      className="relative flex flex-col items-center justify-center text-center py-16 text-white"
      style={{ 
        backgroundImage: `url(${heroImage})`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center flex-col p-6">
        <img src={logo} className='logo' />
        <h2 className="text-3xl font-bold mb-4">Transforme sua presença online com um site incrível!</h2>
        <p className="text-lg mb-6">Conquiste clientes e destaque-se da concorrência.</p>
        <a href="#contact-form" className="px-6 py-3 bg-primary-color text-white rounded hover:bg-secondary-color transition-transform transform hover:scale-105">
          Solicite um Orçamento Gratuito
        </a>
      </div>
    </section>
  );
}

export default Hero;
