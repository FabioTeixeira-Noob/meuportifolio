import { Project, Skill, Experience, Education, Certification } from '../types';

export const projects: Project[] = [
  {
    id: 'java-1',
    title: 'Microservices for E-Commerce',
    description: 'Scalable e-commerce backend built with a microservices architecture using Spring Boot. Features include product catalog, shopping cart, user authentication, and order processing.',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'java',
    stack: ['Java', 'Spring Boot', 'Spring Cloud', 'MySQL', 'Docker', 'RabbitMQ'],
    githubLink: '#',
  },
  {
    id: 'java-2',
    title: 'Banking API',
    description: 'RESTful API for a banking system with account management, transactions, and reporting features.',
    image: 'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'java',
    stack: ['Java', 'Spring Boot', 'JPA/Hibernate', 'PostgreSQL', 'JUnit', 'Swagger'],
    githubLink: '#',
  },
  {
    id: 'java-3',
    title: 'Real-Time Chat Application',
    description: 'WebSocket-based chat application with real-time messaging, user presence detection, and message persistence.',
    image: 'https://images.pexels.com/photos/4126743/pexels-photo-4126743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'java',
    stack: ['Java', 'Spring Boot', 'WebSocket', 'MongoDB', 'Redis', 'JWT'],
    githubLink: '#',
  },
  {
    id: 'data-1',
    title: 'Customer Segmentation Analysis',
    description: 'Machine learning-based customer segmentation model to identify high-value groups based on purchase history and behavioral patterns.',
    image: 'https://images.pexels.com/photos/7567432/pexels-photo-7567432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'data',
    stack: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Jupyter', 'K-means Clustering'],
    githubLink: '#',
  },
  {
    id: 'data-2',
    title: 'Sales Forecast Dashboard',
    description: 'Interactive Power BI dashboard for sales forecasting using time series analysis and predictive models.',
    image: 'https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'data',
    stack: ['Power BI', 'DAX', 'SQL', 'R', 'Time Series Analysis'],
    githubLink: '#',
  },
  {
    id: 'data-3',
    title: 'Sentiment Analysis Engine',
    description: 'NLP-based sentiment analysis tool for analyzing customer feedback and social media mentions.',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'data',
    stack: ['Python', 'NLTK', 'spaCy', 'TensorFlow', 'Flask', 'MongoDB'],
    githubLink: '#',
  },
];

export const skills: Skill[] = [
  // Languages
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
  
  // Tools
  { name: 'Git', level: 90, category: 'tool' },
  { name: 'Power BI', level: 85, category: 'tool' },
  { name: 'MySQL', level: 85, category: 'tool' },
  { name: 'MongoDB', level: 75, category: 'tool' },
  { name: 'Excel', level: 54, category: 'tool' },
];

export const experiences: Experience[] = [
  {
    company: 'ZTE Angola',
    position: 'Campus Ambassador',
    period: '2025 - Present',
    achievements: [
      'Represent the ZTE Nubia brand in the university environment, promoting technological innovation and connectivity initiatives.',
      'Work on promoting the Management Trainee Program, organizing workshops, and creating bridges between students and professional opportunities in the tech ecosystem.',
    ]
  },
  {
    company: 'Student Association of the Catholic University of Angola',
    position: 'Vice-Secretary for Assets and Administration',
    period: '2025 - Present',
    achievements: [
      'Coordinate improvements in shared spaces and equipment.',
      'Support the execution of academic, cultural, and institutional activities.',
      'Collaborate with the general secretariat on management and transparency initiatives.'
    ]
  },
  {
    company: 'Faculty of Engineering - Catholic University of Angola',
    position: 'Teaching Assistant',
    period: '2025 - Present',
    achievements: [
      'Direct support to the lead professor.',
      'Prepare materials, exercises, and practical content that enhance the quality of classes and make learning more applied.',
      'Support the organization of competitions, courses, and extracurricular initiatives.',
    ]
  },
  {
    company: 'National Integrated Ticketing Company - ENBI',
    position: 'Data Analyst',
    period: '2024 - 2025',
    achievements: [
      'Processing, cleaning, and structuring large volumes of data.',
      'Development of dynamic dashboards and reports, facilitating decision-making for technical and administrative areas.',
      'Creation of key indicators (KPIs) to evaluate performance, operational efficiency, and user behavior.',
      'Identification of inconsistencies and anomalies in validation data.',
      'Participation in strategic meetings.'
    ]
  },
  {
    company: 'Wellness Tech Inc.',
    position: 'Embedded Systems Developer',
    period: '2022 - 2023',
    achievements: [
      'Worked with Arduino creating electronic systems that connected to the internet and databases.',
      'Developed projects that captured data from sensors and sent this information to online applications in real-time.',
      'Assembled, tested, and adjusted circuits so everything worked with web platforms.'
    ]
  },
];

export const education: Education[] = [
  {
    degree: 'High School in Electronics and Telecommunications',
    institution: 'Telecommunications Institute - ITEL',
    year: '2019 - 2023'
  },
  {
    degree: 'Bachelor\'s in Telecommunications Engineering',
    institution: 'Catholic University of Angola',
    year: '2023 - Present'
  }
];

export const competitions = [
  {
    name: 'Programming Championship - UCAN FAIR TECH',
    placement: 'Winner',
    year: '2025',
    organizer: 'Catholic University of Angola',
  },
  {
    name: 'AOCPC - Angola Open Collegiate Programming Contest',
    placement: '10th Place Nationally',
    year: '2025',
    organizer: 'ISPTEC',
  },
  {
    name: 'National Robotics Championship - Angola',
    placement: '3rd Place',
    year: '2023',
    organizer: 'AROTEC',
  },
  {
    name: 'National Physics Olympiad - Angola',
    placement: '6th Place',
    year: '2024',
    organizer: 'Angolan Physics Association',
  },
];

export const certifications: Certification[] = [
  {
    name: 'HCIA SECURITY V4.0',
    issuer: 'HUAWEI',
    year: '2025'
  },
  {
    name: 'DATA SCIENCE AND MACHINE LEARNING',
    issuer: 'IBM',
    year: '2025'
  },
  {
    name: 'DATA SCIENCE FUNDAMENTALS',
    issuer: 'Data Science Academy',
    year: '2025'
  },
  {
    name: 'DATABASES WITH SQL',
    issuer: 'CIFITEL',
    year: '2025'
  },
  {
    name: 'MICROSOFT CERTIFIED: AZURE DATA SCIENTIST ASSOCIATE',
    issuer: 'Microsoft',
    year: 'In Progress'
  },
];