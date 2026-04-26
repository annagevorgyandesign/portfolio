import type { PortfolioData } from '../types/portfolio'

export const portfolioData: PortfolioData = {
  profile: {
    name: 'Your Name',
    title: 'Frontend Developer',
    location: 'Your City, Country',
    about:
      'I build fast, accessible, and user-focused web interfaces using React and modern frontend tooling.',
    avatarText: 'YN',
    resumeUrl: '#',
  },
  socials: [
    { label: 'GitHub', href: 'https://github.com/your-username', icon: 'github' },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/your-username',
      icon: 'linkedin',
    },
    { label: 'Email', href: 'mailto:you@email.com', icon: 'mail' },
  ],
  highlights: [
    { label: 'Years Experience', value: '3+' },
    { label: 'Completed Projects', value: '12+' },
    { label: 'Tech Focus', value: 'React + TypeScript' },
  ],
  projects: [
    {
      title: 'Portfolio Website',
      description:
        'Personal website focused on performance, clear storytelling, and reusable UI components.',
      tags: ['React', 'TypeScript', 'Vite', 'Ant Design'],
      demoUrl: '#',
      repoUrl: '#',
    },
    {
      title: 'E-commerce UI',
      description:
        'Modern storefront UI with product filters, cart workflows, and responsive design.',
      tags: ['React', 'Ant Design', 'State Management'],
      demoUrl: '#',
      repoUrl: '#',
    },
    {
      title: 'Task Dashboard',
      description:
        'Dashboard for managing tasks, priorities, and deadlines with clean visual hierarchy.',
      tags: ['TypeScript', 'Charts', 'UX'],
      demoUrl: '#',
      repoUrl: '#',
    },
  ],
  experiences: [
    {
      role: 'Frontend Developer',
      company: 'Your Company',
      period: '2024 - Present',
      summary:
        'Built reusable components, improved page performance, and collaborated with design/product teams.',
    },
    {
      role: 'Junior Frontend Developer',
      company: 'Previous Company',
      period: '2022 - 2024',
      summary:
        'Developed responsive pages, integrated APIs, and maintained design system consistency.',
    },
  ],
  skills: [
    {
      title: 'Core',
      items: ['React', 'TypeScript', 'JavaScript (ESNext)', 'HTML5', 'CSS3'],
    },
    {
      title: 'UI / Styling',
      items: ['Ant Design', 'Responsive Design', 'Design Systems', 'Accessibility'],
    },
    {
      title: 'Tools',
      items: ['Vite', 'pnpm', 'Git', 'Figma', 'REST APIs'],
    },
  ],
  contact: {
    email: 'you@email.com',
    note: 'I am open to freelance and full-time frontend opportunities.',
  },
}
