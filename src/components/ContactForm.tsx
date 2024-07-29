import './ContactForm.css'; // Importar o arquivo de estilo CSS

import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <section id="contact-form" className="py-16 bg-white text-center">
      <div className="container mx-auto max-w-3xl bg-gray-100 p-8 shadow-lg rounded-lg relative">
        <h2 className="text-3xl font-bold mb-6">Entre em Contato</h2>
        <div className="text-left mb-6">
          <h3 className="text-xl font-semibold mb-2">Precisa de um site novo?</h3>
          <p className='mt-3'>- Descreva com detalhes o objetivo e o público-alvo do site que você está buscando, que lhe enviaremos um e-mail de retorno sempre o mais rápido possível, com o orçamento do site desejado.</p>
          <p className='mt-3'>- Mande uma referência de design e descreva quais funcionalidades deseja que o site tenha. Descrições vagas demais irão atrasar muito o processo de te entregar uma solução.</p>
          <h3 className="text-xl font-semibold mt-4 mb-2">Precisa atualizar seu site?</h3>
          <p className='mt-3'>- Descreva quais alterações deseja em seu site, enviando sempre uma referência.</p>
          <p className='mt-3'>- Não esqueça de enviar o site que deseja alterar.</p>
        </div>
        <form action="https://formsubmit.co/pedro.vviana@hotmail.com" method="POST" className="space-y-4">
          <input type="text" name='Nome' placeholder="Nome" className="w-full p-3 border rounded"/>
          <input type="text" name='Empresa' placeholder="Nome da empresa" className="w-full p-3 border rounded"/>
          <input type="email" name='Email' placeholder="Email" className="w-full p-3 border rounded"/>
          <input type="tel" name='Telefone' placeholder="Telefone" className="w-full p-3 border rounded"/>
          <textarea name='Mensagem' placeholder="Mensagem" className="w-full p-3 border rounded"></textarea>
          <button type="submit" className="w-full p-3 bg-primary-color text-white rounded hover:bg-secondary-color">Pedir Orçamento</button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
