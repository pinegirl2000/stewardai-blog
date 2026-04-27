import type { Metadata } from 'next'
import { Suspense } from 'react'
import { getAllPosts, getSpotlightPosts, CATEGORIES, type PostCategory } from '@/lib/posts'
import { StoryRail } from '@/components/sns/story-rail'
import { CategoryChips } from '@/components/sns/category-chips'
import { PostCard } from '@/components/sns/post-card'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'AI automation playbooks, marketing AI, governance — the StewardAI blog',
  description:
    'Practitioner-grade AI workflow playbooks, marketing AI deep-dives, tool comparisons, and governance frameworks. New posts twice a week.',
  alternates: {
    canonical: 'https://stewardai.ai/blog',
    languages: { 'ko-KR': 'https://stewardai.ai/kr/blog' }
  },
  openGraph: {
    title: 'StewardAI Blog — AI automation playbooks for practitioners',
    description:
      'Workflow playbooks, marketing AI, tool comparisons, governance. Built for practitioners.',
    url: 'https://stewardai.ai/blog'
  }
}

export default function BlogPage({
  searchParams
}: {
  searchParams: { category?: PostCategory }
}) {
  const all = getAllPosts('en')
  const spotlight = getSpotlightPosts('en', 8)
  const filtered = searchParams.category
    ? all.filter((p) => p.category === searchParams.category)
    : all

  const cat = CATEGORIES.find((c) => c.slug === searchParams.category)

  return (
    <>
      <div className="max-w-3xl mx-auto px-4 pt-4">
        <h1 className="text-2xl font-bold tracking-tight">
          {cat ? `${cat.icon} ${cat.labelEn}` : 'Feed'}
        </h1>
        <p className="text-sm text-muted-foreground">
          {cat
            ? `Latest posts in ${cat.labelEn}.`
            : 'Workflow playbooks, marketing AI, tool comparisons, governance.'}
        </p>
      </div>

      <Suspense
        fallback={<div className="h-12 mx-4 mt-3 skeleton rounded-2xl" />}
      >
        <div className="max-w-3xl mx-auto px-4">
          <CategoryChips />
        </div>
      </Suspense>

      <div className="max-w-3xl mx-auto px-4">
        {!searchParams.category && spotlight.length > 0 && <StoryRail posts={spotlight} />}
      </div>

      <section className="max-w-3xl mx-auto px-4 pt-2 pb-12 grid gap-4">
        {filtered.length === 0 ? (
          <p className="text-sm text-muted-foreground py-12 text-center">
            No posts in this category yet — check back soon.
          </p>
        ) : (
          filtered.map((p, i) => <PostCard key={p.slug} post={p} priority={i === 0} />)
        )}
      </section>

      <Footer />
    </>
  )
}
