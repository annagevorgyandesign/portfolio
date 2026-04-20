import type { ReactNode } from 'react'

export interface SocialLink {
  label: string
  href: string
  icon: 'github' | 'linkedin' | 'mail'
}

export interface ExperienceItem {
  role: string
  company: string
  period: string
  summary: string
}

export interface ProjectItem {
  title: string
  description: string
  tags: string[]
  demoUrl?: string
  repoUrl?: string
}

export interface SkillGroup {
  title: string
  items: string[]
}

export interface PortfolioProfile {
  name: string
  title: string
  location: string
  about: string
  avatarText: string
  resumeUrl?: string
}

export interface PortfolioData {
  profile: PortfolioProfile
  socials: SocialLink[]
  highlights: Array<{ label: string; value: string }>
  projects: ProjectItem[]
  experiences: ExperienceItem[]
  skills: SkillGroup[]
  contact: {
    email: string
    note: ReactNode
  }
}
