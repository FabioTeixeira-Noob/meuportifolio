import React from 'react';
import { Code, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-dark py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Code className="h-6 w-6 text-accent mr-2" />
            <span className="text-text font-bold text-xl">FABIO<span className="text-accent">CODE</span></span>
          </div>
          <p className="text-text-secondary text-center md:text-right mb-4 md:mb-0">
            "Aberto a oportunidades para criar o futuro com dados e códigos."
          </p>
          
          <p className="text-text-secondary text-sm flex items-center">
            &copy; {currentYear} Desenvolvido com
            <Heart className="h-4 w-4 text-accent mx-1 inline" />
            por Fabio
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;