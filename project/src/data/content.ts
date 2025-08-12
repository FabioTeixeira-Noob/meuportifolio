import { Project, Skill, Experience, Education, Certification } from '../types';

export const projects: Project[] = [
  {
    id: 'java-1',
    title: 'Microserviços para E-Commerce',
    description: 'Backend escalável para e-commerce construído com arquitetura de microserviços usando Spring Boot. Funcionalidades incluem catálogo de produtos, carrinho de compras, autenticação de usuários e processamento de pedidos.',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'java',
    stack: ['Java', 'Spring Boot', 'Spring Cloud', 'MySQL', 'Docker', 'RabbitMQ'],
    githubLink: '#',
  },
  {
    id: 'java-2',
    title: 'API Bancária',
    description: 'API RESTful para um sistema bancário com gerenciamento de contas, transações e funcionalidades de relatórios.',
    image: 'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'java',
    stack: ['Java', 'Spring Boot', 'JPA/Hibernate', 'PostgreSQL', 'JUnit', 'Swagger'],
    githubLink: '#',
  },
  {
    id: 'java-3',
    title: 'Aplicativo de Chat em Tempo Real',
    description: 'Aplicativo de chat com WebSocket com envio de mensagens em tempo real, detecção de presença de usuários e persistência de mensagens.',
    image: 'https://images.pexels.com/photos/4126743/pexels-photo-4126743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'java',
    stack: ['Java', 'Spring Boot', 'WebSocket', 'MongoDB', 'Redis', 'JWT'],
    githubLink: '#',
  },
  {
    id: 'data-1',
    title: 'Análise de Segmentação de Clientes',
    description: 'Modelo de segmentação de clientes baseado em aprendizado de máquina para identificar grupos de alto valor com base no histórico de compras e padrões de comportamento.',
    image: 'https://images.pexels.com/photos/7567432/pexels-photo-7567432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'data',
    stack: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Jupyter', 'K-means Clustering'],
    githubLink: '#',
  },
  {
    id: 'data-2',
    title: 'Painel de Previsão de Vendas',
    description: 'Dashboard interativo no Power BI para previsão de vendas utilizando análise de séries temporais e modelos preditivos.',
    image: 'https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'data',
    stack: ['Power BI', 'DAX', 'SQL', 'R', 'Análise de Séries Temporais'],
    githubLink: '#',
  },
  {
    id: 'data-3',
    title: 'Motor de Análise de Sentimentos',
    description: 'Ferramenta de análise de sentimentos baseada em NLP para analisar feedback de clientes e menções nas redes sociais.',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'data',
    stack: ['Python', 'NLTK', 'spaCy', 'TensorFlow', 'Flask', 'MongoDB'],
    githubLink: '#',
  },
];

export const skills: Skill[] = [
  // Linguagens
  { name: 'Java', level: 95, category: 'language' },
  { name: 'SQL', level: 90, category: 'language' },
  { name: 'Python', level: 85, category: 'language' },
  { name: 'JavaScript', level: 75, category: 'language' },
  { name: 'TypeScript', level: 70, category: 'language' },
  
  // Frameworks
  { name: 'Spring Boot', level: 90, category: 'framework' },
  { name: 'JPA/Hibernate', level: 85, category: 'framework' },
  { name: 'Pandas', level: 85, category: 'framework' },
  { name: 'Scikit-learn', level: 80, category: 'framework' },
  { name: 'React', level: 65, category: 'framework' },
  
  // Ferramentas
  { name: 'Git', level: 90, category: 'tool' },
  { name: 'Power BI', level: 85, category: 'tool' },
  { name: 'MySQL', level: 85, category: 'tool' },
  { name: 'MongoDB', level: 75, category: 'tool' },
  { name: 'Excel', level: 54, category: 'tool' },
];

export const experiences: Experience[] = [
  {
    company: 'Empresa Nacional de Bilhética Integrada - ENBI',
    position: 'Analista de Dados',
    period: '2024 - Presente',
    achievements: [
     'Criei modelos que ajudaram a prever o comportamento dos clientes e com isso a empresa conseguiu manter mais pessoas usando o serviço',
  'Desenvolvi dashboards que se atualizavam sozinhos, facilitando a visualização dos dados no dia a dia',
  'Implementei processos pra coletar, organizar e guardar os dados em um lugar só, de forma automática'
    ]
  },

  {
    company: 'Wellness Tech Inc.',
    position: 'Desenvolvedor de Sistemas Embarcados',
    period: '2022 - 2023',
    achievements: [
    'Trabalhei com Arduino criando sistemas eletrônicos que se conectavam à internet e a bancos de dados',
    'Desenvolvi projetos que captavam dados de sensores e mandavam essas informações pra aplicações online em tempo real',
    'Monte, testei e ajustei circuitos pra que tudo funcionasse com as plataformas web'
    ]
  },
];

export const education: Education[] = [
  {
    degree: 'Ensino Médio em Electrónica e Telecomunicações',
    institution: 'Instituto de Telecomunicações - ITEL',
    year: '2019'
  },
  {
    degree: 'Licenciatura em Engenharia de Telecomunicações',
    institution: 'Universidade Católica de Angola',
    year: '2023'
  }
];

export const competitions = [
  {
    name: 'Campeonato de Programação - UCAN FAIR TECH ',
    placement: 'Vencedor',
    year: '2025',
    organizer: 'Universidade Católica de Angola',
  },
  {
    name: 'Campeonato Nacional de Robótica - Angola',
    placement: '3º Lugar',
    year: '2023',
    organizer: 'AROTEC',
  },
  {
    name: 'Olímpiada Nacional de Física - Angola',
    placement: '6º Lugar',
    year: '2024',
    organizer: 'Associação Angolana de Física',
  },
];


export const certifications: Certification[] = [

    {
    name: 'DATA Science E Machine Learning',
    issuer: 'IBM',
    year: '2025'
    },
  
  {
    name: 'Fundamentos de Ciência de Dados ',
    issuer: 'Data science Academy',
    year: '2025'
  },
    {
    name: 'ORACLE Certified Professional, Java SE 11 Developer',
    issuer: 'Oracle',
    year: 'Em progresso'
  },


  {
    name: 'Microsoft Certified: Azure Data Scientist Associate',
    issuer: 'Microsoft',
    year: 'Em progresso'
  },

];
