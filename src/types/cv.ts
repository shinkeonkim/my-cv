export interface ContactItem {
  icon: 'email' | 'github' | 'web' | 'linkedin'
  text: string
  href?: string
}

export interface SkillCategory {
  label: string
  items: string[]
}

export interface EducationItem {
  name: string
  detail?: string
  gpa?: string
  period: string
}

export interface CertificationItem {
  name: string
  date: string
}

export interface AwardItem {
  name: string
  date: string
}

export interface ActivityItem {
  name: string
  detail: string
}

export interface ExperienceEntry {
  company: string
  period: string
  role: string
  tags?: string[]
  bullets: string[]
}

export interface ProjectEntry {
  name: string
  period: string
  role: string
  description: string
  bullets: string[]
}
