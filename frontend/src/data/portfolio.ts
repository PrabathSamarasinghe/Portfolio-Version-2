export const personalInfo = {
  name: 'Alex Chen',
  firstName: 'Alex',
  lastName: 'Chen',
  titles: ['Software Engineer', 'Full Stack Developer', 'Backend Engineer', 'Frontend Developer'],
  tagline: 'I build scalable, modern, and user-focused software applications with clean architecture and efficient performance.',
  email: 'alex.chen.dev@gmail.com',
  phone: '+1 (555) 123-4567',
  location: 'San Francisco, CA',
  timezone: 'PST (UTC-8)',
  availability: 'Open to opportunities',
  freelance: true,
  github: 'https://github.com/alexchen',
  linkedin: 'https://linkedin.com/in/alexchen',
  twitter: 'https://twitter.com/alexchendev',
  leetcode: 'https://leetcode.com/alexchen',
};

export const aboutData = {
  bio: `I'm a passionate software engineer with 5+ years of experience building high-performance applications that serve millions of users. My journey started with curiosity about how technology shapes our world, and it has evolved into a deep commitment to crafting elegant solutions to complex problems.`,
  bio2: `I believe in writing clean, maintainable code that stands the test of time. Whether it's architecting microservices, optimizing database queries, or building intuitive user interfaces, I approach every challenge with a problem-solving mindset and attention to detail.`,
  education: {
    degree: 'B.S. Computer Science',
    school: 'Stanford University',
    year: '2018',
    gpa: '3.9/4.0',
  },
  interests: ['Distributed Systems', 'Open Source', 'Cloud Architecture', 'Developer Tooling', 'Performance Optimization'],
};

export const skills = {
  languages: [
    { name: 'JavaScript', level: 95 },
    { name: 'TypeScript', level: 92 },
    { name: 'Python', level: 88 },
    { name: 'Java', level: 82 },
    { name: 'C++', level: 70 },
    { name: 'Go', level: 75 },
    { name: 'Rust', level: 60 },
    { name: 'SQL', level: 85 },
  ],
  frontend: [
    { name: 'React', level: 95 },
    { name: 'Next.js', level: 90 },
    { name: 'Vue.js', level: 78 },
    { name: 'Tailwind CSS', level: 92 },
    { name: 'HTML5/CSS3', level: 95 },
    { name: 'Redux', level: 85 },
  ],
  backend: [
    { name: 'Node.js', level: 92 },
    { name: 'Express.js', level: 90 },
    { name: 'Spring Boot', level: 75 },
    { name: 'Django', level: 78 },
    { name: 'GraphQL', level: 85 },
    { name: 'REST APIs', level: 95 },
  ],
  databases: [
    { name: 'PostgreSQL', level: 90 },
    { name: 'MongoDB', level: 85 },
    { name: 'Redis', level: 80 },
    { name: 'MySQL', level: 82 },
    { name: 'Firebase', level: 75 },
    { name: 'DynamoDB', level: 70 },
  ],
  tools: [
    { name: 'Git', level: 95 },
    { name: 'Docker', level: 88 },
    { name: 'Kubernetes', level: 75 },
    { name: 'AWS', level: 85 },
    { name: 'CI/CD', level: 88 },
    { name: 'Linux', level: 90 },
    { name: 'Terraform', level: 72 },
    { name: 'Postman', level: 85 },
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
  const data: number[][] = [];
  for (let week = 0; week < 52; week++) {
    const weekData: number[] = [];
    for (let day = 0; day < 7; day++) {
      const rand = Math.random();
      if (rand < 0.3) weekData.push(0);
      else if (rand < 0.5) weekData.push(1);
      else if (rand < 0.7) weekData.push(2);
      else if (rand < 0.85) weekData.push(3);
      else weekData.push(4);
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
