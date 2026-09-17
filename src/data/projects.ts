import type { Project } from '../types/portfolio';

export const projectsData: Project[] = [
  {
    id: 'nexmeet',
    title: 'NexMeet',
    category: 'Full-Stack / Real-Time Communication',
    shortDescription:
      'A full-stack real-time video conferencing web application built with the MERN stack and WebRTC for peer-to-peer audio/video calling and live collaboration.',
    fullDescription:
      'NexMeet is an end-to-end video conferencing solution that delivers ultra-low latency peer-to-peer audio and video communication. Engineered using WebRTC mesh architecture paired with Socket.io signaling, it provides seamless room management, participant synchronization, live interactive messaging, and hardware controls.',
    technologies: [
      'React.js',
      'Vite',
      'Node.js',
      'Express.js',
      'MongoDB',
      'WebRTC',
      'Socket.io',
      'JWT',
      'Material UI',
    ],
    features: [
      'Peer-to-peer WebRTC audio and video communication',
      'Real-time signaling and bidirectional room synchronization via Socket.io',
      'Interactive in-meeting live text chat',
      'Participant presence tracking and dynamic room event notifications',
      'JWT token-based authentication and protected meeting routes',
      'Hardware media stream controls (toggle camera, mute/unmute microphone)',
      'Participant management and meeting room lifecycle',
      'Responsive React interface styled with Material UI',
    ],
    problem:
      'Standard video meeting applications often require heavy desktop clients or suffer from latency and poor stream renegotiation when participants join or leave unexpectedly.',
    solution:
      'Architected a direct peer-to-peer WebRTC topology mediated by an Express and Socket.io signaling server, allowing instant zero-install browser calls with synchronized session state.',
    architecture: [
      'Signaling Layer: Node.js & Socket.io server handles SDP offer/answer exchange and ICE candidate propagation.',
      'Media Transport: Direct browser-to-browser P2P WebRTC data and media streams.',
      'Data Persistence: MongoDB stores user accounts, meeting history, and participant logs.',
      'Frontend Client: Vite-powered React client managing local/remote MediaStream tracks and UI state.',
    ],
    challenges: [
      'Handling asynchronous ICE candidate negotiation across NAT firewalls.',
      'Managing media track disconnections and clean stream tear-down on browser tab closure.',
    ],
    image: '/images/project-nexmeet.jpg',
    githubUrl: 'https://github.com/so8-ham/NexMeet',
    liveUrl: 'https://nex-meet-dsw1.vercel.app/',
    featured: true,
    accentColor: 'from-blue-500 to-indigo-600',
  },
  {
    id: 'staygenoe',
    title: 'StayGenoe',
    category: 'Full-Stack Property Rental Platform',
    shortDescription:
      'A full-stack accommodation rental web application inspired by core marketplace functionality, equipped with geolocation and hardened security defenses.',
    fullDescription:
      'StayGenoe is a property rental and accommodation marketplace engineered with a server-rendered Node.js and Express architecture. It features Cloudinary media uploads, map-based geolocation search, reviews and ratings, and multi-layer web security defenses.',
    technologies: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'EJS',
      'Passport.js',
      'Cloudinary',
      'Joi',
      'Helmet',
    ],
    features: [
      'Dynamic property listing creation and comprehensive search filters',
      'User authentication, authorization, and secure session management via Passport.js',
      'Interactive review and rating system tied to user profiles',
      'Cloudinary media pipeline for property photo upload and optimization',
      'Map-based location mapping with geolocation query support',
      'Strict input validation using Joi schema validators',
      'Robust security hardening: Helmet HTTP headers, CSRF mitigation, and MongoDB query sanitization',
      'Full CRUD operations across listings, reviews, and bookings',
    ],
    problem:
      'Marketplace applications frequently suffer from security vulnerabilities like NoSQL injection, XSS, and insecure direct object references when managing user-generated listings and file uploads.',
    solution:
      'Implemented defensive programming layers using Helmet for security headers, MongoDB sanitization to stop injection attacks, Joi for schema enforcement, and Cloudinary for validated cloud storage.',
    architecture: [
      'MVC Architecture: Model-View-Controller pattern implemented with Express.js and EJS templates.',
      'Security Stack: Helmet for HTTP response header hardening, express-mongo-sanitize for query stripping.',
      'Storage: MongoDB with Mongoose schemas; Cloudinary API for cloud-hosted listing assets.',
    ],
    challenges: [
      'Ensuring strict server-side validation alongside sanitized client inputs for rich form submissions.',
      'Synchronizing coordinate-based geolocation data with dynamic property map rendering.',
    ],
    image: '/images/project-staygenoe.jpg',
    githubUrl: 'https://github.com/so8-ham/StayGenoe',
    liveUrl: 'https://staygenoe-2-umnm.onrender.com/',
    featured: true,
    accentColor: 'from-emerald-500 to-teal-600',
  },
  {
    id: 'metamind',
    title: 'MetaMind',
    category: 'AI Chatbot',
    shortDescription:
      'A full-stack conversational AI assistant with secure JWT authentication, session history, and a responsive modern chat interface.',
    fullDescription:
      'MetaMind delivers an intelligent AI conversational experience backed by a Node.js and Express API layer with JWT authentication. Designed for fluid interactions, it persists conversation context and securely isolates user accounts.',
    technologies: [
      'React',
      'Vite',
      'Express.js',
      'MongoDB',
      'JWT',
      'AI Integration',
      'Tailwind CSS',
    ],
    features: [
      'AI-powered intelligent conversational chat interface',
      'Secure token-based JWT authentication and authorization',
      'Protected user routes and personal session isolation',
      'Fast, reactive single-page client built with Vite and React',
      'MongoDB database persistence for user profiles and chat threads',
      'Responsive dark-themed chat window with message status indicators',
    ],
    problem:
      'Many chatbot demos lack proper user authentication and session persistence, making conversations transient and insecure.',
    solution:
      'Engineered a dedicated Express backend with JWT bearer authentication, providing each authenticated user with a private, persistent chat workspace and streamlined AI responses.',
    architecture: [
      'Client: React single-page application with responsive conversation timeline.',
      'API Gateway: Express.js backend verifying authorization headers and orchestrating AI queries.',
      'Persistence: MongoDB document storage for users and conversation context.',
    ],
    challenges: [
      'Optimizing response delivery for seamless conversational feel.',
      'Preventing unauthorized access to user conversation records.',
    ],
    image: '/images/project-metamind.jpg',
    githubUrl: 'https://github.com/so8-ham/Metamind',
    liveUrl: 'https://metamind-98ly.vercel.app/',
    featured: true,
    accentColor: 'from-purple-500 to-pink-600',
  },
  {
    id: 'codefy',
    title: 'Codefy',
    category: 'AI Developer Tool',
    shortDescription:
      'An AI-focused developer application designed around interacting with, analyzing, and improving source code through intelligent review workflows.',
    fullDescription:
      'Codefy is a specialized developer utility that leverages AI capabilities to assist programmers in code interaction, reviewing syntax, identifying bugs, and suggesting structured refactoring improvements.',
    technologies: [
      'React',
      'Vite',
      'JavaScript',
      'Full-Stack Web Development',
      'AI Integration',
    ],
    features: [
      'AI-assisted interactive code analysis and query interface',
      'Developer-centric workflow for pasting, reviewing, and analyzing code snippets',
      'Targeted recommendations for code quality and bug fixing',
      'High-contrast code presentation and developer-friendly UI layout',
      'Lightweight, responsive web client built with React and Vite',
    ],
    problem:
      'Context switching between IDEs and general-purpose chat bots often yields unformatted, noisy code suggestions that disrupt programming focus.',
    solution:
      'Created a focused developer workspace tailored specifically to syntax inspection, code improvement suggestions, and step-by-step review workflows.',
    architecture: [
      'Frontend: Vite + React application providing dedicated code editors and comparison viewers.',
      'AI Processing: Integration with generative AI APIs for code analysis and structured suggestions.',
    ],
    challenges: [
      'Maintaining clean formatting and monospace clarity across code blocks and explanations.',
    ],
    image: '/images/project-codefy.jpg',
    githubUrl: 'https://github.com/so8-ham/Codefy',
    liveUrl: 'https://codefy-phi.vercel.app/',
    featured: false,
    accentColor: 'from-amber-500 to-orange-600',
  },
  {
    id: 'hireheaven',
    title: 'HireHeaven',
    category: 'Full-Stack Job Portal / Microservices',
    shortDescription:
      'A full-stack recruitment platform built using microservices architecture with AI-powered career tools and Razorpay payment integration.',
    fullDescription:
      'HireHeaven is an enterprise-inspired job portal designed with decoupled microservices to serve job seekers and recruiters independently. It features job search, application pipelines, company profile management, AI career tools, and a paid premium subscription system backed by Razorpay.',
    technologies: [
      'Microservices',
      'Full-Stack Web Development',
      'AI Integration',
      'Razorpay',
      'REST APIs',
    ],
    features: [
      'Job Seeker tools: Search & filter listings, profile management, and direct job applications',
      'Resume management and AI-powered career assistant tools',
      'Recruiter tools: Company workspace, job listing creation, and application review pipelines',
      'Candidate evaluation workflow for hiring teams',
      'Premium subscription functionality for monetized career services',
      'Secure payment gateway checkout integrated with Razorpay',
      'Decoupled microservices architecture for modular scaling',
    ],
    problem:
      'Monolithic job portals struggle to handle asynchronous bursts between recruiter bulk postings and applicant surges while managing payments and candidate profiles.',
    solution:
      'Designed a microservice-oriented structure segregating applicant services, recruiter pipelines, and payment processing for better reliability and domain isolation.',
    architecture: [
      'Service Decomposition: Independent services handling users/profiles, job listings, and payments.',
      'Payment Integration: Razorpay checkout webhook listener for automated subscription provisioning.',
      'AI Services: Career enhancement module for resume insights.',
    ],
    challenges: [
      'Synchronizing candidate state across separate microservice domains.',
      'Ensuring reliable payment verification via server-to-server webhook verification.',
    ],
    image: '/images/project-hireheaven.jpg',
    githubUrl: 'https://github.com/so8-ham/HireHeaven',
    liveUrl: undefined, // No live URL available, GitHub only
    featured: true,
    accentColor: 'from-cyan-500 to-blue-600',
  },
];
