export const personalInfo = {
  name: 'Prabhath Samarasinghe',
  firstName: 'Prabhath',
  lastName: 'Samarasinghe',
  titles: [
    'Software Engineering Undergraduate',
    'Full Stack Developer',
    'Backend Developer',
    'Cloud & DevOps Enthusiast',
  ],
  tagline:
    'I build scalable, modern, and user-focused software applications with clean architecture, automation, and efficient system design.',
  email: 'prabhaths2001@gmail.com',
  phone: '+94 70 225 4204',
  location: 'Sri Lanka',
  timezone: 'IST (UTC+5:30)',
  availability: 'Open to internships and opportunities',
  freelance: true,
  github: 'https://github.com/PrabathSamarasinghe',
  linkedin: 'https://linkedin.com/in/prabhaths2001',
  twitter: 'https://twitter.com/prabhaths2001',
  leetcode: 'https://leetcode.com/prabhaths2001',
};

export const aboutData = {
  bio: `I'm a passionate software engineering undergraduate who enjoys building scalable applications, backend systems, and cloud-native solutions. My interest in technology started with curiosity about how systems work behind the scenes, and it has grown into a strong passion for software architecture, automation, and problem-solving.`,

  bio2: `I enjoy working across the full stack, from creating intuitive frontend interfaces to designing robust backend services and CI/CD pipelines. I focus on writing clean, maintainable code and continuously learning modern technologies such as cloud platforms, distributed systems, DevOps practices, and scalable system design.`,

  education: {
    degree: 'B.Sc. in Software Engineering',
    school: 'University',
    year: 'Expected Graduation',
    gpa: 'N/A',
  },

  interests: [
    'Distributed Systems',
    'Cloud Computing',
    'DevOps & CI/CD',
    'Backend Engineering',
    'System Design',
  ],
};

export const skills = {
  languages: [
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Java', level: 82 },
    { name: 'Python', level: 75 },
    { name: 'SQL', level: 82 },
    { name: 'C++', level: 70 },
  ],
  frontend: [
    { name: 'React', level: 88 },
    { name: 'Next.js', level: 85 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'HTML5/CSS3', level: 92 },
    { name: 'Redux', level: 75 },
  ],
  backend: [
    { name: 'Node.js', level: 88 },
    { name: 'Express.js', level: 85 },
    { name: 'Spring Boot', level: 78 },
    { name: 'REST APIs', level: 90 },
    { name: 'GraphQL', level: 70 },
  ],
  databases: [
    { name: 'PostgreSQL', level: 82 },
    { name: 'MongoDB', level: 80 },
    { name: 'MySQL', level: 84 },
    { name: 'Firebase', level: 75 },
    { name: 'Redis', level: 68 },
  ],

  tools: [
    { name: 'Git', level: 92 },
    { name: 'Docker', level: 82 },
    { name: 'Linux', level: 85 },
    { name: 'CI/CD', level: 82 },
    { name: 'Terraform', level: 72 },
    { name: 'AWS', level: 70 },
    { name: 'Kafka', level: 60 },
    { name: 'Postman', level: 88 },
  ],
};

export const projects = [
  {
    title: 'CloudSync Platform',
    description: 'A real-time collaborative workspace platform supporting 10K+ concurrent users with WebSocket-based sync engine and conflict-free replicated data types (CRDTs).',
    image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=800',
    tech: ['React', 'Node.js', 'WebSocket', 'Redis', 'PostgreSQL', 'AWS'],
    github: 'https://github.com/alexchen/cloudsync',
    demo: 'https://cloudsync.dev',
    features: ['Real-time collaboration', 'CRDT-based conflict resolution', 'Auto-save with version history', 'Role-based access control'],
    highlights: 'Handles 10K+ concurrent users with sub-100ms latency. Reduced sync conflicts by 95% using CRDTs.',
    category: 'Full Stack',
  },
  {
    title: 'NeuralSearch API',
    description: 'An AI-powered semantic search engine that uses transformer embeddings to deliver context-aware search results with 98% relevance accuracy.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    tech: ['Python', 'FastAPI', 'PyTorch', 'Elasticsearch', 'Docker', 'Kubernetes'],
    github: 'https://github.com/alexchen/neuralsearch',
    demo: 'https://neuralsearch.io',
    features: ['Semantic search with BERT embeddings', 'Auto-indexing pipeline', 'Multi-language support', 'REST API with rate limiting'],
    highlights: '98% relevance accuracy. Processes 1M+ documents with <50ms query time. 99.9% uptime.',
    category: 'AI / Backend',
  },
  {
    title: 'DevMetrics Dashboard',
    description: 'A comprehensive developer analytics platform that aggregates data from GitHub, Jira, and CI/CD pipelines to provide actionable engineering insights.',
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800',
    tech: ['Next.js', 'TypeScript', 'D3.js', 'GraphQL', 'PostgreSQL', 'Vercel'],
    github: 'https://github.com/alexchen/devmetrics',
    demo: 'https://devmetrics.app',
    features: ['Real-time dashboards', 'Custom metric builder', 'Team analytics', 'Automated reporting'],
    highlights: 'Used by 200+ engineering teams. Reduced sprint planning time by 40%.',
    category: 'Full Stack / SaaS',
  },
  {
    title: 'SecureVault CLI',
    description: 'An open-source, end-to-end encrypted secrets management tool for development teams with zero-knowledge architecture.',
    image: 'https://images.pexels.com/photos/60504/pexels-photo-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
    tech: ['Go', 'gRPC', 'SQLite', 'AES-256', 'Docker'],
    github: 'https://github.com/alexchen/securevault',
    demo: '',
    features: ['Zero-knowledge encryption', 'Team sharing with RBAC', 'CLI & API access', 'Audit logging'],
    highlights: '2.5K+ GitHub stars. Featured in Go Weekly newsletter. Used by 500+ teams.',
    category: 'Open Source / DevOps',
  },
];

export const experience = [
  {
    title: 'Senior Software Engineer',
    company: 'TechCorp Inc.',
    duration: '2022 - Present',
    location: 'San Francisco, CA',
    description: [
      'Led the architecture and development of a microservices platform serving 5M+ daily active users',
      'Reduced API response time by 60% through query optimization and caching strategies',
      'Mentored a team of 4 junior engineers and established code review best practices',
      'Implemented CI/CD pipelines reducing deployment time from 2 hours to 15 minutes',
    ],
    tech: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Docker', 'Kubernetes'],
  },
  {
    title: 'Software Engineer',
    company: 'StartupXYZ',
    duration: '2020 - 2022',
    location: 'New York, NY',
    description: [
      'Built and maintained the core product from MVP to production, growing from 0 to 100K users',
      'Designed and implemented RESTful APIs handling 10K+ requests per minute',
      'Developed real-time notification system using WebSockets and message queues',
      'Improved test coverage from 45% to 92% across the entire codebase',
    ],
    tech: ['React', 'TypeScript', 'Express.js', 'MongoDB', 'RabbitMQ', 'GCP'],
  },
  {
    title: 'Junior Software Engineer',
    company: 'DataFlow Systems',
    duration: '2018 - 2020',
    location: 'Austin, TX',
    description: [
      'Developed data processing pipelines handling 1TB+ of daily data',
      'Built internal tools that automated 30+ hours of manual work per week',
      'Contributed to the migration from monolith to microservices architecture',
    ],
    tech: ['Python', 'Django', 'PostgreSQL', 'Apache Kafka', 'Docker'],
  },
];

export const certifications = [
  {
    title: 'AWS Solutions Architect - Professional',
    issuer: 'Amazon Web Services',
    year: '2023',
    badge: 'AWS',
  },
  {
    title: 'Certified Kubernetes Administrator',
    issuer: 'Cloud Native Computing Foundation',
    year: '2023',
    badge: 'CKA',
  },
  {
    title: 'Google Cloud Professional Developer',
    issuer: 'Google Cloud',
    year: '2022',
    badge: 'GCP',
  },
  {
    title: 'Meta Frontend Developer Certificate',
    issuer: 'Meta',
    year: '2022',
    badge: 'Meta',
  },
];

export const achievements = [
  { title: '1st Place', event: 'HackMIT 2023', description: 'Built an AI-powered code review tool' },
  { title: 'Top 1%', event: 'LeetCode Global Ranking', description: 'Solved 1,500+ problems' },
  { title: 'Speaker', event: 'ReactConf 2023', description: 'Talk on optimizing React performance at scale' },
  { title: 'Open Source', event: '500+ Contributions', description: 'Active contributor to major open source projects' },
  { title: 'Published', event: 'IEEE Paper', description: 'Research on distributed systems optimization' },
  { title: 'Finalist', event: 'Google Code Jam 2022', description: 'Top 100 globally' },
];

export const githubStats = {
  username: 'alexchen',
  totalRepos: 47,
  totalStars: 3200,
  totalContributions: 2847,
  streak: 156,
  topLanguages: [
    { name: 'TypeScript', percentage: 35 },
    { name: 'JavaScript', percentage: 25 },
    { name: 'Python', percentage: 20 },
    { name: 'Go', percentage: 12 },
    { name: 'Rust', percentage: 8 },
  ],
  contributionData: generateContributionData(),
};

function generateContributionData() {
  const data: Array<Array<{ date: string; contributionCount: number }>> = [];
  const today = new Date();
  const currentDate = new Date(today);
  currentDate.setDate(currentDate.getDate() - (52 * 7 - 1)); // Start from 52 weeks ago

  for (let week = 0; week < 52; week++) {
    const weekData: Array<{ date: string; contributionCount: number }> = [];
    for (let day = 0; day < 7; day++) {
      const rand = Math.random();
      let count = 0;
      if (rand < 0.3) count = 0;
      else if (rand < 0.5) count = 1;
      else if (rand < 0.7) count = 2;
      else if (rand < 0.85) count = 3;
      else count = 4;

      const dateStr = currentDate.toISOString().split('T')[0];
      weekData.push({
        date: dateStr,
        contributionCount: count,
      });
      currentDate.setDate(currentDate.getDate() + 1);
    }
    data.push(weekData);
  }
  return data;
}

export const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'VP of Engineering, TechCorp',
    text: 'Alex is one of the most talented engineers I\'ve worked with. Their ability to architect complex systems while maintaining clean, readable code is exceptional. They consistently deliver beyond expectations.',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
  {
    name: 'Michael Park',
    role: 'CTO, StartupXYZ',
    text: 'Alex was instrumental in scaling our product from MVP to 100K users. Their technical depth combined with strong communication skills made them an invaluable team member.',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
  {
    name: 'Dr. Emily Zhang',
    role: 'Professor, Stanford CS',
    text: 'Alex\'s research on distributed systems optimization was groundbreaking. They have a rare combination of theoretical knowledge and practical engineering skills.',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
  {
    name: 'David Kim',
    role: 'Senior Engineer, Google',
    text: 'I\'ve collaborated with Alex on several open source projects. Their code quality and attention to performance is top-notch. A true 10x engineer.',
    avatar: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=100',
  },
];
