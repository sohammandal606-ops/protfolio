import type { PortfolioConfig } from '../types/portfolio';

export const portfolioConfig: PortfolioConfig = {
  personal: {
    name: 'Soham Mandal',
    role: 'Full-Stack Developer',
    subrole: 'CSE (AI & ML)',
    tagline: 'I build scalable full-stack applications and explore AI-powered solutions using modern web technologies.',
    bioParagraph1:
      'I am a B.Tech Computer Science Engineering student specializing in AI & ML with a strong interest in full-stack development. I enjoy designing and developing complete applications, from responsive frontend interfaces to robust backend APIs, databases, authentication, real-time communication, and AI integrations.',
    bioParagraph2:
      'Having engineered multiple full-stack systems with modern stacks like React.js, Node.js, Express.js, MongoDB, PostgreSQL, WebRTC, WebSocket, and RESTful APIs, I focus on clean architectural principles, practical problem solving, and building production-grade software.',
    location: 'Hooghly, Chandan Nagar, West Bengal, India',
    email: 'sohammandal.dev@gmail.com', // Configurable contact email
    githubUrl: 'https://github.com/so8-ham',
    linkedinUrl: 'https://linkedin.com/in/soham-mandal', // Configurable LinkedIn profile
    resumePath: '/resume/Soham-Mandal-Resume.pdf',
    availableForWork: true,
    avatarUrl: '/images/developer-avatar.jpg',
    softSkills: [
      'Problem Solving',
      'Team Collaboration',
      'Communication',
      'Adaptability',
      'Analytical Thinking',
      'Time Management',
    ],
  },
  achievements: [
    {
      title: 'LeetCode Problems Solved',
      metric: '150+',
      description:
        'Solved 150+ algorithmic problems demonstrating consistent mastery in Data Structures, Algorithms, and analytical problem-solving.',
      category: 'Data Structures & Algorithms',
    },
    {
      title: 'Hackathons Qualified',
      metric: '3+',
      description:
        'Qualified for 3+ hackathons, demonstrating fast-paced collaborative development, AI/ML integration, and practical product engineering under pressure.',
      category: 'Competitions & Hackathons',
    },
  ],
  education: [
    {
      degree: 'B.Tech in Computer Science Engineering (AI & ML)',
      institution: 'Maulana Abul Kalam Azad University of Technology (MAKAUT)',
      period: '2024 – 2028',
      score: 'CGPA: 8.13 / 10',
      description:
        'Specializing in Artificial Intelligence and Machine Learning, with strong coursework across Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Computer Networks, and Operating Systems.',
      current: true,
    },
    {
      degree: 'Higher Secondary Education (Class XII)',
      institution: 'Tirol High School',
      period: '2024',
      board: 'West Bengal Council of Higher Secondary Education (WBCHSE)',
      description: 'Science stream with focus on Physics, Chemistry, and Mathematics.',
      current: false,
    },
    {
      degree: 'Secondary Education (Class X)',
      institution: 'Bajekumar-Pur High School',
      period: '2022',
      board: 'West Bengal Board of Secondary Education (WBBSE)',
      description: 'Completed foundational secondary education with strong academic standing.',
      current: false,
    },
  ],
  experience: [
    {
      role: 'Full Stack Developer Intern',
      company: 'Code Alpha',
      period: 'June 2026 – July 2026',
      type: 'Internship',
      location: 'Remote',
      description: [
        'Developed full-stack web applications using React.js, Node.js, Express.js, and MongoDB.',
        'Built RESTful APIs, CRUD operations, secure authentication, and responsive user interfaces.',
        'Used Git and GitHub for version control, proactive code reviews, debugging, and collaborative development.',
      ],
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Git', 'GitHub'],
    },
  ],
  skillCategories: [
    {
      name: 'Languages',
      skills: [
        { name: 'C++', description: 'DSA, STL, Competitive Programming' },
        { name: 'JavaScript', description: 'ES6+, Async/Await, Web APIs' },
        { name: 'SQL', description: 'Complex Queries, Joins, Aggregations' },
      ],
    },
    {
      name: 'Frontend',
      skills: [
        { name: 'React.js', description: 'Hooks, Component Architecture, State' },
        { name: 'HTML', description: 'Semantic Markup, Accessibility (a11y)' },
        { name: 'CSS', description: 'Flexbox, CSS Grid, Responsive Design' },
        { name: 'Tailwind CSS', description: 'Utility-first modern styling' },
        { name: 'Material UI (MUI)', description: 'Component Library & Theming' },
        { name: 'JavaScript', description: 'DOM, Event loop, Modern syntaxes' },
      ],
    },
    {
      name: 'Backend',
      skills: [
        { name: 'Node.js', description: 'Non-blocking I/O, Event-driven runtime' },
        { name: 'Express.js', description: 'Routing, Middlewares, API server' },
        { name: 'RESTful APIs', description: 'Stateless endpoints, HTTP verbs' },
        { name: 'JWT Authentication', description: 'Token-based auth & protected routes' },
        { name: 'CRUD Operations', description: 'Complete data lifecycle handling' },
        { name: 'WebSocket', description: 'Bidirectional real-time pipelines' },
        { name: 'AI Integration', description: 'LLM APIs & Prompt engineering' },
      ],
    },
    {
      name: 'Databases',
      skills: [
        { name: 'MongoDB', description: 'NoSQL, Mongoose ODM, Aggregations' },
        { name: 'PostgreSQL', description: 'Relational DB, Schema design, ACID' },
        { name: 'SQL', description: 'Relational database querying' },
        { name: 'Vector Databases', description: 'Embeddings storage & semantic search' },
      ],
    },
    {
      name: 'AI / ML',
      skills: [
        { name: 'Machine Learning', description: 'Supervised & unsupervised models' },
        { name: 'Deep Learning', description: 'Neural networks, PyTorch fundamentals' },
        { name: 'NLP', description: 'Text processing, Tokenization, LLMs' },
        { name: 'Generative AI', description: 'Prompt workflows & intelligent agents' },
        { name: 'LangChain', description: 'Chains, Agents & Retrieval tools' },
        { name: 'LangGraph', description: 'Cyclic stateful AI multi-agent graphs' },
        { name: 'FastAPI', description: 'High-performance Python microservices' },
      ],
    },
    {
      name: 'Tools & DevOps',
      skills: [
        { name: 'Git', description: 'Branching, Rebasing, Conflict resolution' },
        { name: 'GitHub', description: 'PRs, Code Reviews, Actions CI/CD' },
        { name: 'Docker', description: 'Containerization & reproducible environments' },
        { name: 'Redis', description: 'In-memory caching & pub/sub messaging' },
      ],
    },
    {
      name: 'Core Computer Science',
      skills: [
        { name: 'Data Structures & Algorithms', description: 'Arrays, Trees, Graphs, DP' },
        { name: 'Object-Oriented Programming (OOP)', description: 'Polymorphism, Encapsulation, Inheritance' },
        { name: 'DBMS', description: 'Normalization, Transactions, Indexing' },
        { name: 'Operating Systems', description: 'Processes, Threads, Concurrency, Memory' },
        { name: 'Computer Networks', description: 'OSI Model, TCP/IP, HTTP, WebSockets' },
      ],
    },
  ],
};
