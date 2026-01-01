import React from 'react';
import { experiences, education, certifications, competitions } from '../data/content';
import { Briefcase, GraduationCap, Award, Check } from 'lucide-react';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-text">Professional <span className="text-accent">Experience</span></h2>
          <div className="h-1 w-20 bg-accent mx-auto mb-6"></div>
          <p className="text-text-secondary max-w-2xl mx-auto">
            My professional journey, academic background, and technical certifications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Work Experience */}
          <div className="md:col-span-2">
            <div className="bg-primary-light p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <Briefcase className="text-accent h-6 w-6 mr-3" />
                <h3 className="text-xl font-semibold text-text">Experience</h3>
              </div>
              
              <div className="space-y-8">
                {experiences.map((experience, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-accent-dark">
                    <div className="absolute -left-[9px] top-0 h-5 w-5 rounded-full bg-accent"></div>
                    <div className="mb-2">
                      <h4 className="text-lg font-semibold text-text">{experience.position}</h4>
                      <p className="text-accent">{experience.company}</p>
                      <p className="text-sm text-text-muted">{experience.period}</p>
                    </div>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, i) => (
                        <li key={i} className="flex">
                          <Check className="h-5 w-5 text-accent flex-shrink-0 mr-2 mt-0.5" />
                          <p className="text-text-secondary">{achievement}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-8">
            {/* Education */}
            <div className="bg-primary-light p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <GraduationCap className="text-accent h-6 w-6 mr-3" />
                <h3 className="text-xl font-semibold text-text">Education</h3>
              </div>
              
              <div className="space-y-4">
                {education.map((item, index) => (
                  <div key={index} className="pb-4 last:pb-0 border-b last:border-b-0 border-primary">
                    <h4 className="font-semibold text-text">{item.degree}</h4>
                    <p className="text-text-secondary">{item.institution}</p>
                    <p className="text-sm text-accent">{item.year}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Competitions */}
            <div className="bg-primary-light p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <Award className="text-accent h-6 w-6 mr-3" />
                <h3 className="text-xl font-semibold text-text">Competitions</h3>
              </div>
              <div className="space-y-4">
                {competitions.map((competition, index) => (
                  <div key={index} className="pb-4 last:pb-0 border-b last:border-b-0 border-primary">
                    <h4 className="font-semibold text-text">{competition.name}</h4>
                    <p className="text-text-secondary">{competition.organizer}</p>
                    <p className="text-sm text-accent">{competition.placement} – {competition.year}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Certifications */}
            <div className="bg-primary-light p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <Award className="text-accent h-6 w-6 mr-3" />
                <h3 className="text-xl font-semibold text-text">Certifications</h3>
              </div>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="pb-4 last:pb-0 border-b last:border-b-0 border-primary">
                    <h4 className="font-semibold text-text">{cert.name}</h4>
                    <p className="text-text-secondary">{cert.issuer}</p>
                    <p className="text-sm text-accent">{cert.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;