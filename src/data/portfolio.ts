export interface NavItem {
  id: string
  label: string
}

export interface FocusArea {
  title: string
  description: string
}

export interface ExperienceItem {
  role: string
  company: string
  period: string
  description: string
}

export interface ProjectItem {
  id: string
  title: string
  subtitle: string
  category: 'Microservices' | 'Enterprise / GovTech' | 'Frontend & DevOps'
  description: string
  highlights: string[]
  tags: string[]
  githubUrl?: string
  liveUrl?: string
  architecture?: string
  isFeatured?: boolean
}

export interface SkillCategory {
  name: string
  skills: string[]
}

export interface SdlcStep {
  step: string
  title: string
  description: string
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'career-focus', label: 'Focus' },
  { id: 'contact', label: 'Contact' },
]

export const PERSONAL_INFO = {
  name: 'Pham Huu Canh',
  title: 'Full-Stack Developer',
  initials: 'HC',
  currentRole: 'Software Engineering Intern',
  company: 'DNT Group | AMZ Company',
  email: 'canhhuu26@gmail.com',
  github: 'https://github.com/canhhocit',
  linkedin: 'https://www.linkedin.com/in/c%E1%BA%A3nh-ph%E1%BA%A1m-bb67ab3a7/',
  avatar: '/avt.jpg',
  heroSubtitle: 'HELLO, I\'M',
  heroIntro: 'I build thoughtful digital experiences and reliable software systems, from frontend interfaces to backend services.',
  heroSupporting: 'Currently growing as a software engineer at DNT Group | AMZ Company.',
}

export const ABOUT_DATA = {
  heading: 'About Me',
  bio: "I'm a final-year student (expected to graduate in 2027) and a developer focused on building practical software products and understanding how their components work together. My interests span backend engineering, modern frontend development, system design, and deployment. I enjoy learning through hands-on work and continuously improving the quality and maintainability of my code.",
  focusAreas: [
    {
      title: 'Full-Stack Development',
      description: 'Connecting frontend experiences with backend functionality.',
    },
    {
      title: 'Backend Engineering',
      description: 'Building structured APIs and maintainable server-side applications.',
    },
    {
      title: 'Continuous Learning',
      description: 'Exploring new technologies and improving software engineering practices.',
    },
  ] as FocusArea[],
}

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: 'Software Engineering Intern',
    company: 'DNT Group | AMZ Company',
    period: '07/2026 – Present',
    description: 'Contributing to GovTech enterprise solutions including the Municipal Wi-Fi Captive Portal for Hai Phong City. Building modular Spring Boot 3 backends, citizen session lifecycle management, gateway AP monitoring, and accessible mobile-first frontend interfaces.',
  },
]

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'campushub-microservice',
    title: 'CampusHub — Smart Locker & P2P Marketplace',
    subtitle: 'Enterprise-grade Microservices Platform with Clean Architecture',
    category: 'Microservices',
    isFeatured: true,
    description:
      'A distributed campus marketplace system integrated with smart locker IoT handovers, featuring asynchronous event-driven communications, multi-schema database segregation, and automated payment gateways.',
    highlights: [
      'Architected 7 autonomous microservices following strict 4-layer Clean Architecture (Domain, Application, Infrastructure, Presentation)',
      'Spring Cloud Gateway with reactive JWT authentication, Netflix Eureka Discovery, and OpenFeign inter-service communication',
      'Asynchronous Event-Driven broker using RabbitMQ for order fulfillment, locker unlocking triggers, and automated notification workers',
      'Redis in-memory caching for distributed rate limiting, JWT token blacklisting, and payment idempotency protection',
      'AES-GCM encryption for locker PINs, PayOS VietQR payment webhook verification, and OpenStreetMap interactive station locator',
    ],
    tags: [
      'Java 17',
      'Spring Boot 3',
      'Spring Cloud',
      'RabbitMQ',
      'PostgreSQL',
      'Redis',
      'Docker',
      'Clean Architecture',
      'PayOS VietQR',
      'React 19',
    ],
    githubUrl: 'https://github.com/canhhocit/CampusHub-Microservice',
    architecture:
      'Client (React 19) → API Gateway (8080) → Eureka Registry (8761) → [Identity, Product, Locker, Order, Payment, Media, Notification] → PostgreSQL (5 schemas) + RabbitMQ + Redis',
  },
  {
    id: 'wifi-captive-portal',
    title: 'GovTech Municipal Wi-Fi Captive Portal',
    subtitle: 'Citizen Network Access & AP Gateway Management System',
    category: 'Enterprise / GovTech',
    isFeatured: true,
    description:
      'A municipal network access and device management solution built for cultural centers and public facilities in Hai Phong City, focusing on security, resilient network handovers, and compliance.',
    highlights: [
      'Engineered modular backend services using Spring Boot 3 and Spring Security 6 for session token lifecycles and MAC/IP validation',
      'Mobile-first responsive captive login interface compliant with WCAG 2.2 AA accessibility standards (375px–430px viewport targeting)',
      'Real-time Gateway AP device health tracking, heartbeat monitoring, and automated offline network fallback handlers',
      'Centralized admin dashboard for municipal administrators to monitor active sessions, device usage, and audit access logs',
    ],
    tags: [
      'Spring Boot 3',
      'Spring Security 6',
      'GovTech',
      'Modular Monolith',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'WCAG 2.2 AA',
    ],
  },
  {
    id: 'portfolio-engineering',
    title: 'Minimalist Engineering Portfolio & CI/CD',
    subtitle: 'High-performance Personal Portfolio Website',
    category: 'Frontend & DevOps',
    isFeatured: false,
    description:
      'A sleek, accessible, high-performance portfolio website engineered with React 19, Tailwind CSS v4, and automated GitHub Actions deployment pipelines.',
    highlights: [
      'Modern responsive UI with zero bloated templates, smooth Framer Motion spring physics, and keyboard accessibility',
      'Interactive features including an in-browser Dev Terminal emulator and a custom "Nuôi Tôi / Buy Me A Coffee" Caffeine Protocol',
      'Automated testing, linting, and continuous delivery to GitHub Pages via GitHub Actions workflow',
    ],
    tags: [
      'React 19',
      'TypeScript',
      'Tailwind CSS v4',
      'Framer Motion',
      'GitHub Actions',
    ],
    githubUrl: 'https://github.com/canhhocit/canhhocit.github.io',
    liveUrl: 'https://canhhocit.github.io',
  },
]

export interface SupportTier {
  id: string
  name: string
  icon: string
  price: string
  amount: number
  description: string
  caffeineGain: number
  badge?: string
}

export const SUPPORT_DATA = {
  title: 'Dự Án "Nuôi Tôi"',
  englishTitle: 'Caffeine Dependency Injection Protocol',
  subtitle:
    'Mỗi ngụm cà phê của bạn là 500 dòng code Spring Boot sạch không bug và 1 đêm thức trắng fix lỗi production!',
  accountHolder: 'PHAM HUU CANH',
  bankName: 'MBBank (Ngân hàng Quân Đội)',
  accountNumber: 'VQRQACZFU6828',
  defaultSyntax: 'NUOI CANH',
  qrImagePath: '/myqr.jpg',
  initialCaffeineLevel: 68,
  tiers: [
    {
      id: 'coffee',
      name: 'Cà Phê Cóc',
      icon: '☕',
      price: '15.000 đ',
      amount: 15000,
      description: 'Đủ pin gõ 500 dòng code Spring Boot sạch không bug.',
      caffeineGain: 10,
      badge: 'Phổ biến nhất',
    },
    {
      id: 'milktea',
      name: 'Trà Sữa Full Topping',
      icon: '🧋',
      price: '35.000 đ',
      amount: 35000,
      description: 'Tăng 200% sự tập trung khi debug Microservices.',
      caffeineGain: 25,
      badge: 'Team Hảo Ngọt',
    },
    {
      id: 'pho',
      name: 'Bát Phở Tái Nạm',
      icon: '🍜',
      price: '50.000 đ',
      amount: 50000,
      description: 'Cứu sống dev qua đêm thức trắng fix bug lúc 2h sáng.',
      caffeineGain: 40,
      badge: 'Cứu đói cấp tốc',
    },
    {
      id: 'angel',
      name: 'Nhà Đầu Tư Thiên Thần',
      icon: '🚀',
      price: 'Tùy tâm',
      amount: 100000,
      description: 'Bảo trợ thiên thần cho đồ án tốt nghiệp Kỹ sư 2027.',
      caffeineGain: 100,
      badge: 'VIP Sponsor',
    },
  ] as SupportTier[],
}

export interface LanguageItem {
  name: string
  level: 'Core' | 'Proficient' | 'Familiar'
  category: 'primary' | 'secondary'
}

export const PROGRAMMING_LANGUAGES: LanguageItem[] = [
  { name: 'Java', level: 'Core', category: 'primary' },
  { name: 'TypeScript', level: 'Core', category: 'primary' },
  { name: 'JavaScript', level: 'Core', category: 'primary' },
  { name: 'C / C++', level: 'Familiar', category: 'secondary' },
  { name: 'Python', level: 'Familiar', category: 'secondary' },
  { name: 'Dart', level: 'Familiar', category: 'secondary' },
]

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: 'Backend',
    skills: ['Java', 'Spring Boot', 'REST APIs'],
  },
  {
    name: 'Frontend',
    skills: ['React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    name: 'Database & Caching',
    skills: ['MySQL', 'PostgreSQL', 'Redis'],
  },
  {
    name: 'Integrations & Cloud APIs',
    skills: ['payOS', 'Cloudinary', 'Resend', 'Brevo', 'Google Drive API'],
  },
  {
    name: 'Tools & Workflow',
    skills: ['Git', 'GitHub', 'Docker', 'Postman'],
  },
  {
    name: 'Additional Interests',
    skills: ['System Design', 'Cloud & Deployment', 'AI Integration'],
  },
]

export const CAREER_FOCUS_DATA = {
  heading: "What I'm Working Toward",
  content:
    'My goal is to grow into a well-rounded Full-Stack Developer who can contribute across the software development lifecycle — from understanding requirements and designing maintainable solutions to implementing features, integrating systems, and supporting deployment.',
  sdlcSteps: [
    {
      step: '01',
      title: 'Requirements',
      description: 'Understanding functional scope & user needs',
    },
    {
      step: '02',
      title: 'Design',
      description: 'Architecting clean APIs & data models',
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Writing maintainable frontend & backend code',
    },
    {
      step: '04',
      title: 'Integration',
      description: 'Connecting services, testing & validation',
    },
    {
      step: '05',
      title: 'Deployment',
      description: 'Supporting reliable delivery & monitoring',
    },
  ] as SdlcStep[],
}

export const CONTACT_DATA = {
  heading: "Let's Connect",
  text: "I'm always interested in connecting with developers, learning from new challenges, and exploring opportunities to build useful software.",
  email: 'canhhuu26@gmail.com',
  github: 'https://github.com/canhhocit',
  linkedin: 'https://www.linkedin.com/in/c%E1%BA%A3nh-ph%E1%BA%A1m-bb67ab3a7/',
}
