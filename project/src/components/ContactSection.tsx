import React, { useState } from 'react';
import { Send, Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Message sent successfully! I will contact you soon.');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 bg-primary-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-text">Get in <span className="text-accent">Touch</span></h2>
          <div className="h-1 w-20 bg-accent mx-auto mb-6"></div>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Have an interesting project or opportunity? Let's talk about how I can help
            transform your ideas into reality with code and data.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <div className="bg-primary p-6 rounded-lg shadow-lg h-full">
              <h3 className="text-xl font-semibold text-text mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="text-accent h-5 w-5 mt-1 mr-4" />
                  <div>
                    <h4 className="text-text font-medium mb-1">Email</h4>
                    <p className="text-text-secondary">fabioteixeira13194@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="text-accent h-5 w-5 mt-1 mr-4" />
                  <div>
                    <h4 className="text-text font-medium mb-1">Location</h4>
                    <p className="text-text-secondary">Luanda, Angola</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-accent h-5 w-5 mt-1 mr-4" />
                  <div>
                    <h4 className="text-text font-medium mb-1">Phone</h4>
                    <p className="text-text-secondary">+244 954 076 219</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-text font-medium mb-3">Social Media</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-primary-light p-2 rounded-full hover:bg-accent transition-colors" aria-label="GitHub">
                    <Github className="h-5 w-5 text-text" />
                  </a>
                  <a href="https://www.linkedin.com/in/f%C3%A1bio-teixeira-31448422b/" className="bg-primary-light p-2 rounded-full hover:bg-accent transition-colors" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5 text-text" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <div className="bg-primary p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-text mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-text-secondary mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-primary-light border border-primary text-text focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Your name"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-text-secondary mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-primary-light border border-primary text-text focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-text-secondary mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg bg-primary-light border border-primary text-text focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center bg-accent hover:bg-accent-dark text-primary font-bold py-3 px-6 rounded-lg transition-colors duration-300 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </button>
                
                {submitMessage && (
                  <div className="mt-4 p-3 bg-success/20 text-success rounded">
                    {submitMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;