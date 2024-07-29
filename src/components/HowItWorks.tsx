import React from 'react';
import hero from '../assets/image/hero.png';

const HowItWorks: React.FC = () => {
  return (
    <section className="container rounded-lg mt-5 mx-auto flex flex-col md:flex-row items-center py-8 md:py-16 bg-white text-gray-800 border-">
      {/* Container da Imagem */}
      <div className="md:w-1/2 flex justify-center md:pr-4 mb-8 md:mb-0">
        <img src={hero} alt="Como funciona" className="img-hero" />
      </div>
      
      {/* Container do Texto */}
      <div className="md:w-1/2 flex flex-col items-center md:items-start px-4 md:px-0">
        <h2 className="text-2xl font-bold mb-4 text-center md:text-left">Como funciona o processo de criação?</h2>
        <div className="space-y-4 text-center md:text-left w-full max-w-sm md:max-w-xl">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105">
            <p className="mb-2"><strong>Consultoria Inicial:</strong></p>
            <p>Vamos entender suas necessidades, objetivos e o público-alvo para criar uma estratégia personalizada.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105">
            <p className="mb-2"><strong>Planejamento e Design:</strong></p>
            <p>Desenvolvemos um layout atraente e funcional, com foco na experiência do usuário.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105">
            <p className="mb-2"><strong>Desenvolvimento e Implementação:</strong></p>
            <p>Nossos desenvolvedores trazem o design à vida, garantindo um site responsivo e otimizado.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105">
            <p className="mb-2"><strong>Testes e Revisões:</strong></p>
            <p>Realizamos testes rigorosos para garantir que tudo esteja perfeito e fazemos ajustes com base no seu feedback.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105">
            <p className="mb-2"><strong>Lançamento e Suporte:</strong></p>
            <p>Lançamos seu site e oferecemos suporte contínuo por 2 meses para mantê-lo atualizado e funcionando perfeitamente.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
