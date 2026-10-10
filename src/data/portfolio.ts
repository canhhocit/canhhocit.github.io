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
  bio: "I'm a developer focused on building practical software products and understanding how their components work together. My interests span backend engineering, modern frontend development, system design, and deployment. I enjoy learning through hands-on work and continuously improving the quality and maintainability of my code.",
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
    description: 'Developing my software engineering skills through practical work and continuous learning in a professional environment.',
  },
]

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
