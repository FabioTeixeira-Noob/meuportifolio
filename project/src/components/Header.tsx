import React, { useState, useEffect } from 'react';
import { Code, Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed w-full py-4 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#hero" className="flex items-center space-x-2">
            <Code className="h-8 w-8 text-accent" />
            <span className="text-text font-bold text-2xl">FABIO<span className="text-accent">CODE</span></span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-text hover:text-accent transition-colors">About</a>
            <a href="#projects" className="text-text hover:text-accent transition-colors">Projects</a>
            <a href="#skills" className="text-text hover:text-accent transition-colors">Skills</a>
            <a href="#experience" className="text-text hover:text-accent transition-colors">Experience</a>
            <a href="#contact" className="text-text hover:text-accent transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-text hover:text-accent" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="text-text hover:text-accent" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#contact" className="text-text hover:text-accent" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-text hover:text-accent"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-primary-light animate-fade-in-down">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#about" 
                className="text-text hover:text-accent px-4 py-2 hover:bg-primary-dark rounded transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#projects" 
                className="text-text hover:text-accent px-4 py-2 hover:bg-primary-dark rounded transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </a>
              <a 
                href="#skills" 
                className="text-text hover:text-accent px-4 py-2 hover:bg-primary-dark rounded transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Skills
              </a>
              <a 
                href="#experience" 
                className="text-text hover:text-accent px-4 py-2 hover:bg-primary-dark rounded transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Experience
              </a>
              <a 
                href="#contact" 
                className="text-text hover:text-accent px-4 py-2 hover:bg-primary-dark rounded transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              <div className="flex space-x-4 px-4 py-2">
                <a href="#" className="text-text hover:text-accent" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
                <a href="#" className="text-text hover:text-accent" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#contact" className="text-text hover:text-accent" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;