import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faSearch, faBolt, faCogs, faShareAlt } from '@fortawesome/free-solid-svg-icons';

const benefits = [
  { id: 1, text: 'Design Responsivo e Atraente', icon: faMobileAlt },
  { id: 2, text: 'Otimização para Motores de Busca (SEO)', icon: faSearch },
  { id: 3, text: 'Velocidade de Carregamento Rápida', icon: faBolt },
  { id: 4, text: 'Suporte e Manutenção Contínua', icon: faCogs },
  { id: 5, text: 'Integração com Redes Sociais e Ferramentas de Marketing', icon: faShareAlt },
];

const Benefits: React.FC = () => {
  return (
    <section className="py-16 px-4 lg:px-16 bg-background-color-light text-center">
      <h2 className="text-3xl text-white font-bold mb-8 lg:mb-12">Está precisando de um site para seu negócio?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {benefits.map((benefit) => (
          <div key={benefit.id} className="bg-background-color-2 p-8 rounded-lg shadow-lg flex flex-col items-center space-y-4">
            <FontAwesomeIcon icon={benefit.icon} className="text-4xl text-primary-color mb-4" />
            <p className="text-lg font-semibold text-white">{benefit.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Benefits;
