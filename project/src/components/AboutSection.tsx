import React from 'react';
import { Database, LineChart, Code, GitBranch, LayoutGrid, FileCode } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-primary-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <div className="relative">
              <div className="absolute -top-3 -left-3 w-full h-full border-2 border-accent rounded-lg"></div>
              <img 
                src="src\20f07f06-26ee-484e-82c6-cebbfabe2700.jpg" 
                alt="Professional portrait" 
                className="w-full rounded-lg object-cover aspect-[3/4] relative z-10"
              />
            </div>
          </div>
          
          <div className="md:w-2/3">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-text">Sobre <span className="text-accent">Mim</span></h2>
            <div className="h-1 w-20 bg-accent mb-6"></div>
            
            <p className="text-text-secondary mb-6 leading-relaxed">Fábio Teixeira, estudante de Engenharia com paixão por programação, análise de dados e desenvolvimento de sistemas. Domina bancos de dados, modelagem estatística e visualização de dados. Busco criar soluções que transformem dados em decisões e códigos em resultados.</p>





            <div className="italic text-accent border-l-4 border-accent pl-4 mb-8">
              "Cada sistema carrega uma intenção. O impacto não nasce do algoritmo, mas da visão por trás dele. "
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <Code className="text-accent h-5 w-5" />
                <span className="text-text-secondary">Java</span>
              </div>
              <div className="flex items-center space-x-2">
                <Database className="text-accent h-5 w-5" />
                <span className="text-text-secondary">SQL</span>
              </div>
              <div className="flex items-center space-x-2">
                <LineChart className="text-accent h-5 w-5" />
                <span className="text-text-secondary">Data Analysis</span>
              </div>
              <div className="flex items-center space-x-2">
                <GitBranch className="text-accent h-5 w-5" />
                <span className="text-text-secondary">Git</span>
              </div>
              <div className="flex items-center space-x-2">
                <LayoutGrid className="text-accent h-5 w-5" />
                <span className="text-text-secondary">Spring Boot</span>
              </div>
              <div className="flex items-center space-x-2">
                <FileCode className="text-accent h-5 w-5" />
                <span className="text-text-secondary">APIs REST</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;