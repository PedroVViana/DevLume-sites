import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-4 md:px-14 bg-text-color-main text-white">
      <div className="container mx-auto text-center space-y-4">
        <div>
          <a 
            href="https://van-lume-pedro.netlify.app/" 
            target='_blank' 
            rel="noopener noreferrer"
            className="font-bold text-base hover:underline"
          >
            Conheça quem faz os freela
          </a>
        </div>
        <div>
          <p className="text-sm md:text-base">Informações de Contato: pedro.vviana@hotmail.com | (81) 9 94952030</p>
        </div>
        <div className="flex justify-center space-x-4">
          <a 
            href="https://www.instagram.com/devlume__/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-xl md:text-2xl hover:text-[#E1306C] transform hover:scale-110 transition-transform duration-300"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a 
            href="https://www.linkedin.com/in/pedro-vanlume-0230551b9/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-xl md:text-2xl hover:text-[#0A66C2] transform hover:scale-110 transition-transform duration-300"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a 
            href="https://www.tiktok.com/@devlume__" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-xl md:text-2xl hover:text-[#c851ff] transform hover:scale-110 transition-transform duration-300"
          >
            <i className="fab fa-tiktok"></i>
          </a>
          <a 
            href="https://www.youtube.com/channel/UCAcWyEknFTqT3EYp2ILLiOw" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-xl md:text-2xl hover:text-[#FF0000] transform hover:scale-110 transition-transform duration-300"
          >
            <i className="fab fa-youtube"></i>
          </a>
          <a 
            href="https://web.whatsapp.com/send?phone=5581994952030" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-xl md:text-2xl hover:text-[#25D366] transform hover:scale-110 transition-transform duration-300"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
