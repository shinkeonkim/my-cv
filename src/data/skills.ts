import type { SkillCategory } from '@/types/cv'

export const skills: readonly SkillCategory[] = [
  { label: 'Languages', items: ['Python', 'Ruby', 'TypeScript', 'C/C++', 'Java', 'Rust'] },
  { label: 'Backend', items: ['Ruby on Rails', 'Django / DRF', 'FastAPI / Flask', 'gRPC'] },
  { label: 'Frontend', items: ['React.js', 'Vue.js'] },
  { label: 'Database', items: ['PostgreSQL', 'Redis', 'pgvector'] },
  {
    label: 'DevOps',
    items: ['AWS', 'Docker', 'Kubernetes / k3s', 'ArgoCD', 'GitHub Actions', 'Terraform'],
  },
]
