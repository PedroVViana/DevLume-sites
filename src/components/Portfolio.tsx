import React from 'react';
import afago from "../assets/image/portfolio/afago.png";
import ar from "../assets/image/portfolio/ar.png";
import curso from "../assets/image/portfolio/curso.png";
import vlDask from "../assets/image/portfolio/vl.jpeg";
import focus from "../assets/image/portfolio/focus.png";
import tach from "../assets/image/portfolio/tach.png";
import systemRegister from "../assets/image/portfolio/system.png";
import inventario from "../assets/image/portfolio/inventario.png";
import livro from "../assets/image/portfolio/livro.png"

const Portfolio: React.FC = () => {
  const projects = [
    {
      img: ar,
      title: 'PICA-PAU AR PARA AUTOS',
      description: 'Projeto para uma empresa de concerto de ar-condicionado.',
      tools: ['HTML', 'CSS', 'JavaScript'],
      demo: 'https://pica-pau-ar.netlify.app/'
    },
    {
      img: curso,
      title: 'SITE PARA VENDA DE CURSOS ONLINE',
      description: 'Projeto de templete para um site de venda de cursos online.',
      tools: ['React', 'Vite', 'Tailwind CSS', 'TypeScript'],
      demo: 'https://pedrovviana.github.io/website-cursos-online/'
    },
    {
      img: vlDask,
      title: 'VL\'IMPORTS - CATALOGO WEB',
      description: 'Projeto Freelancer de um catalogo web para uma loja virtual de vendas de camisa de time.',
      tools: ['HTML', 'CSS', 'JavaScript'],
      demo: 'https://vanlumeimports.netlify.app/'
    },
    {
      img: focus,
      title: 'FOCUS DIGITAL',
      description: 'Projeto Freelancer de uma landing paga para converter leeds de uma empresa de assessoria de marketing digital.',
      tools: ['HTML', 'CSS', 'JavaScript'],
      demo: 'https://lpfocusdigital.com/'
    },
    {
      img: afago,
      title: 'AFAGO',
      description: 'Projeto Freelancer de uma landing paga para venda de produtos, para uma loja de cestas de café da manhã.',
      tools: ['HTML', 'CSS', 'JavaScript'],
      demo: 'https://comafago.com.br/'
    },
    {
      img: tach,
      title: 'SITE PARA VENDA DE PRODUTOS TECNOLÓGICOS',
      description: 'Projeto de templete para um site de produtos tecnológicos.',
      tools: ['React', 'Vite', 'Tailwind CSS', 'TypeScript'],
      demo: 'https://pedrovviana.github.io/tach-product/'
    },
    {
      img: systemRegister,
      title: 'SISTEMA DE CADASTRO E LOGIN DE USUÁRIO',
      description: 'Projeto de uma tela de cadastro e login de usuário.',
      tools: ['React', 'JavaScript', 'CSS'],
      demo: 'https://system-register-devlume.netlify.app/'
    },
    {
      img: inventario,
      title: 'SISTEMA DE GERENCIAMENTO DE INVENTÁRIO',
      description: 'Projeto sistema de gerenciamento de inventário de produtos.',
      tools: ['React', 'JavaScript', 'CSS'],
      demo: 'https://fantastic-pavlova-6430ae.netlify.app/'
    },
    {
      img: livro,
      title: 'SITE PARA LANÇAMENTO DE LIVRO',
      description: 'Projeto de templete para um site de lançamento de um livro.',
      tools: ['React', 'Vite', 'Tailwind CSS', 'TypeScript'],
      demo: 'https://pedrovviana.github.io/book-release/'
    }
  ];

  return (
    <section id="Portfolio" className="py-16 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Explore meus projetos</h2>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <li key={index} className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <div className="img-gallery">
                <img src={project.img} alt={project.title} className="w-full h-full object-cover"/>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="mb-4">{project.description}</p>
                <div className="tools mb-4">
                  {project.tools.map((tool, i) => (
                    <span key={i} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tool}</span>
                  ))}
                </div>
                {project.demo && (
                  <div className="mt-4">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="bg-primary-color text-white py-2 px-4 rounded-lg hover:bg-secondary-color inline-block">Ver Demo</a>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
        <div className="btns mt-12 text-center">
          <a href="https://github.com/PedroVViana" target="_blank" rel="noopener noreferrer" className="bg-primary-color text-white py-2 px-4 rounded-lg hover:bg-secondary-color">Veja mais</a>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
