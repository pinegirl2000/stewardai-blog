import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { CATEGORIES, type PostCategory } from './categories'

export { CATEGORIES }
export type { PostCategory }

export type Locale = 'en' | 'kr'

export interface PostFrontmatter {
  title: string
  description: string
  slug: string
  category: PostCategory
  tags: string[]
  locale: Locale
  translations?: Partial<Record<Locale, string>>
  author: string
  publishedAt: string
  updatedAt?: string
  heroImage: string
  heroAlt: string
  readingTime?: number
  featured?: boolean
  spotlight?: boolean
}

export interface Post extends PostFrontmatter {
  content: string
  computedReadingTime: number
}

const CONTENT_ROOT = path.join(process.cwd(), 'content', 'blog')

export function getAllPosts(locale: Locale = 'en'): Post[] {
  const dir = path.join(CONTENT_ROOT, locale)
  if (!fs.existsSync(dir)) return []

  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.mdx') || f.endsWith('.md'))

  const posts = files.map((file) => {
    const raw = fs.readFileSync(path.join(dir, file), 'utf8')
    const { data, content } = matter(raw)
    const stats = readingTime(content)
    return {
      ...(data as PostFrontmatter),
      content,
      computedReadingTime: Math.max(1, Math.round(stats.minutes))
    }
  })

  return posts.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
}

export function getPostBySlug(slug: string, locale: Locale = 'en'): Post | null {
  return getAllPosts(locale).find((p) => p.slug === slug) ?? null
}

export function getPostsByCategory(category: PostCategory, locale: Locale = 'en'): Post[] {
  return getAllPosts(locale).filter((p) => p.category === category)
}

export function getSpotlightPosts(locale: Locale = 'en', limit = 8): Post[] {
  return getAllPosts(locale)
    .filter((p) => p.spotlight)
    .slice(0, limit)
}

