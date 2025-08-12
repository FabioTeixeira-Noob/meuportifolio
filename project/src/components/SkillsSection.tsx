import React from 'react';
import { skills } from '../data/content';

const SkillsSection = () => {
  const languageSkills = skills.filter(skill => skill.category === 'language');
  const frameworkSkills = skills.filter(skill => skill.category === 'framework');
  const toolSkills = skills.filter(skill => skill.category === 'tool');
  
  return (
    <section id="skills" className="py-20 bg-primary-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-text">Minhas <span className="text-accent">Habilidades</span></h2>
          <div className="h-1 w-20 bg-accent mx-auto mb-6"></div>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Uma visão geral das minhas competências técnicas em desenvolvimento e análise de dados, 
            organizadas por categorias.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Skill Radar Chart (simulated with CSS) */}
          <div className="md:w-1/3 mb-8 md:mb-0">
            <div className="bg-primary-light p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-text mb-4 text-center">Habilidades Técnicas</h3>
              <div className="aspect-square relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 200 200" className="w-full">
                    {/* Background web */}
                    <polygon 
                      points="100,10 135,35 170,100 135,165 100,190 65,165 30,100 65,35" 
                      fill="none" 
                      stroke="#475569" 
                      strokeWidth="0.5"
                    />
                    <polygon 
                      points="100,30 127.5,50 150,100 127.5,150 100,170 72.5,150 50,100 72.5,50" 
                      fill="none" 
                      stroke="#475569" 
                      strokeWidth="0.5"
                    />
                    <polygon 
                      points="100,50 120,65 130,100 120,135 100,150 80,135 70,100 80,65" 
                      fill="none" 
                      stroke="#475569" 
                      strokeWidth="0.5"
                    />
                    <circle cx="100" cy="100" r="70" fill="none" stroke="#475569" strokeWidth="0.5" />
                    <circle cx="100" cy="100" r="50" fill="none" stroke="#475569" strokeWidth="0.5" />
                    <circle cx="100" cy="100" r="30" fill="none" stroke="#475569" strokeWidth="0.5" />
                    
                    {/* Lines */}
                    <line x1="100" y1="10" x2="100" y2="190" stroke="#475569" strokeWidth="0.5" />
                    <line x1="30" y1="100" x2="170" y2="100" stroke="#475569" strokeWidth="0.5" />
                    <line x1="65" y1="35" x2="135" y2="165" stroke="#475569" strokeWidth="0.5" />
                    <line x1="135" y1="35" x2="65" y2="165" stroke="#475569" strokeWidth="0.5" />
                    
                    {/* Skills Overlay */}
                    <polygon 
                      points="100,30 135,65 150,100 135,135 100,150 65,135 50,100 65,65" 
                      fill="#f9731650" 
                      stroke="#f97316" 
                      strokeWidth="2"
                    />
                    
                    {/* Labels */}
                    <text x="100" y="5" fill="#f8fafc" fontSize="10" textAnchor="middle">Java</text>
                    <text x="175" y="100" fill="#f8fafc" fontSize="10" textAnchor="start">Backend</text>
                    <text x="100" y="195" fill="#f8fafc" fontSize="10" textAnchor="middle">Frontend</text>
                    <text x="25" y="100" fill="#f8fafc" fontSize="10" textAnchor="end">Data Analysis</text>
                    <text x="145" y="40" fill="#f8fafc" fontSize="10" textAnchor="middle">APIs</text>
                    <text x="55" y="40" fill="#f8fafc" fontSize="10" textAnchor="middle">Databases</text>
                    <text x="145" y="160" fill="#f8fafc" fontSize="10" textAnchor="middle">DevOps</text>
                    <text x="55" y="160" fill="#f8fafc" fontSize="10" textAnchor="middle">ML/AI</text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Languages */}
              <div className="bg-primary-light p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold text-text mb-4">Linguagens</h3>
                <div className="space-y-4">
                  {languageSkills.map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex justify-between">
                        <span className="text-sm text-text-secondary">{skill.name}</span>
                        <span className="text-xs text-accent">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full bg-primary rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-accent-dark to-accent rounded-full"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Frameworks */}
              <div className="bg-primary-light p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold text-text mb-4">Frameworks</h3>
                <div className="space-y-4">
                  {frameworkSkills.map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex justify-between">
                        <span className="text-sm text-text-secondary">{skill.name}</span>
                        <span className="text-xs text-accent">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full bg-primary rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-accent-dark to-accent rounded-full"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Tools */}
              <div className="bg-primary-light p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold text-text mb-4">Ferramentas</h3>
                <div className="space-y-4">
                  {toolSkills.map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex justify-between">
                        <span className="text-sm text-text-secondary">{skill.name}</span>
                        <span className="text-xs text-accent">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full bg-primary rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-accent-dark to-accent rounded-full"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-primary-light rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-text mb-4">Experimente Meu Código</h3>
              <div className="font-mono text-sm bg-primary p-4 rounded overflow-auto text-text-secondary" style={{ maxHeight: '200px' }}>
                <pre>{`
// Exemplo de uma API REST em Spring Boot
@RestController
@RequestMapping("/api/data")
public class DataAnalysisController {

    private final DataService dataService;
    
    @Autowired
    public DataAnalysisController(DataService dataService) {
        this.dataService = dataService;
    }
    
    @GetMapping("/analyze")
    public ResponseEntity<AnalysisResult> analyzeData(
            @RequestParam("dataset") String datasetId,
            @RequestParam("method") AnalysisMethod method) {
            
        try {
            AnalysisResult result = dataService.performAnalysis(datasetId, method);
            return ResponseEntity.ok(result);
        } catch (DataNotFoundException e) {
            return ResponseEntity.notFound().build();
        } catch (UnsupportedAnalysisException e) {
            return ResponseEntity.badRequest().build();
        }
    }
}
                `}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;