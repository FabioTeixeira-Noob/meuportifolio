import React, { useState } from 'react';
import { projects } from '../data/content';
import { Github, ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'java' | 'data'>('all');
  
  const filteredProjects = projects.filter(
    project => activeTab === 'all' || project.category === activeTab
  );

  return (
    <section id="projects" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-text">My <span className="text-accent">Projects</span></h2>
          <div className="h-1 w-20 bg-accent mx-auto mb-6"></div>
          <p className="text-text-secondary max-w-2xl mx-auto">
            A selection of my work in web development and data analysis, 
            demonstrating my technical skills and problem-solving approach. (Some still in development).
          </p>
        </div>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              className={`px-4 py-2 rounded-l-lg font-medium text-sm focus:z-10 focus:outline-none ${
                activeTab === 'all'
                  ? 'bg-accent text-primary-dark'
                  : 'bg-primary-light text-text hover:bg-primary-dark'
              }`}
              onClick={() => setActiveTab('all')}
            >
              All
            </button>
            <button
              type="button"
              className={`px-4 py-2 font-medium text-sm focus:z-10 focus:outline-none ${
                activeTab === 'java'
                  ? 'bg-accent text-primary-dark'
                  : 'bg-primary-light text-text hover:bg-primary-dark'
              }`}
              onClick={() => setActiveTab('java')}
            >
              Java Development
            </button>
            <button
              type="button"
              className={`px-4 py-2 rounded-r-lg font-medium text-sm focus:z-10 focus:outline-none ${
                activeTab === 'data'
                  ? 'bg-accent text-primary-dark'
                  : 'bg-primary-light text-text hover:bg-primary-dark'
              }`}
              onClick={() => setActiveTab('data')}
            >
              Data Analysis
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group bg-primary-light rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-60"></div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-text">{project.title}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    project.category === 'java' ? 'bg-blue-900 text-blue-100' : 'bg-yellow-900 text-yellow-100'
                  }`}>
                    {project.category === 'java' ? 'Java' : 'Data'}
                  </span>
                </div>
                
                <p className="text-text-secondary text-sm mb-4 h-20 overflow-hidden">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.slice(0, 4).map((tech, index) => (
                    <span 
                      key={index}
                      className="text-xs bg-primary px-2 py-1 rounded text-text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 4 && (
                    <span className="text-xs bg-primary px-2 py-1 rounded text-text-secondary">
                      +{project.stack.length - 4}
                    </span>
                  )}
                </div>
                
                <div className="flex space-x-3">
                  {project.githubLink && (
                    <a 
                      href={project.githubLink}
                      className="flex items-center text-sm text-text-secondary hover:text-accent transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </a>
                  )}
                  {project.demoLink && (
                    <a 
                      href={project.demoLink}
                      className="flex items-center text-sm text-text-secondary hover:text-accent transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;