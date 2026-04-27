export type PostCategory = 'playbooks' | 'marketing-ai' | 'tools' | 'governance'

export const CATEGORIES: Array<{
  slug: PostCategory
  labelEn: string
  labelKo: string
  icon: string
  accent: string
}> = [
  { slug: 'playbooks', labelEn: 'Playbooks', labelKo: '플레이북', icon: '⚡', accent: 'violet' },
  { slug: 'marketing-ai', labelEn: 'Marketing AI', labelKo: '마케팅 AI', icon: '🎯', accent: 'pink' },
  { slug: 'tools', labelEn: 'Tools', labelKo: '툴 & 스택', icon: '🧩', accent: 'cyan' },
  { slug: 'governance', labelEn: 'Governance', labelKo: '거버넌스', icon: '🛡', accent: 'amber' }
]
