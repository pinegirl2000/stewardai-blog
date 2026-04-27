import type { Metadata } from 'next'
import { Suspense } from 'react'
import { getAllPosts, getSpotlightPosts, CATEGORIES, type PostCategory } from '@/lib/posts'
import { StoryRail } from '@/components/sns/story-rail'
import { CategoryChips } from '@/components/sns/category-chips'
import { PostCard } from '@/components/sns/post-card'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'AI 자동화 플레이북, 마케팅 AI, 거버넌스 — StewardAI 블로그',
  description:
    '실무자 수준의 AI 워크플로우 플레이북, 마케팅 AI 딥다이브, 툴 비교, 거버넌스 프레임워크. 매주 두 편의 새 글.',
  alternates: {
    canonical: 'https://stewardai.ai/kr/blog',
    languages: {
      'en-US': 'https://stewardai.ai/blog',
      'ko-KR': 'https://stewardai.ai/kr/blog'
    }
  },
  openGraph: {
    title: 'StewardAI 블로그 — 실무자를 위한 AI 자동화 플레이북',
    description: '워크플로우 플레이북, 마케팅 AI, 툴 비교, 거버넌스. 실무자를 위해.',
    url: 'https://stewardai.ai/kr/blog',
    locale: 'ko_KR'
  }
}

export default function BlogPageKr({
  searchParams
}: {
  searchParams: { category?: PostCategory }
}) {
  const all = getAllPosts('kr')
  const spotlight = getSpotlightPosts('kr', 8)
  const filtered = searchParams.category
    ? all.filter((p) => p.category === searchParams.category)
    : all

  const cat = CATEGORIES.find((c) => c.slug === searchParams.category)

  return (
    <>
      <div className="max-w-3xl mx-auto px-4 pt-4">
        <h1 className="text-2xl font-bold tracking-tight">
          {cat ? `${cat.icon} ${cat.labelKo}` : '피드'}
        </h1>
        <p className="text-sm text-muted-foreground">
          {cat
            ? `${cat.labelKo} 카테고리의 최신 글.`
            : '워크플로우 플레이북, 마케팅 AI, 툴 비교, 거버넌스.'}
        </p>
      </div>

      <Suspense
        fallback={<div className="h-12 mx-4 mt-3 skeleton rounded-2xl" />}
      >
        <div className="max-w-3xl mx-auto px-4">
          <CategoryChips locale="kr" />
        </div>
      </Suspense>

      <div className="max-w-3xl mx-auto px-4">
        {!searchParams.category && spotlight.length > 0 && (
          <StoryRail posts={spotlight} locale="kr" />
        )}
      </div>

      <section className="max-w-3xl mx-auto px-4 pt-2 pb-12 grid gap-4">
        {filtered.length === 0 ? (
          <p className="text-sm text-muted-foreground py-12 text-center">
            아직 이 카테고리에 글이 없습니다 — 곧 다시 확인해주세요.
          </p>
        ) : (
          filtered.map((p, i) => (
            <PostCard key={p.slug} post={p} locale="kr" priority={i === 0} />
          ))
        )}
      </section>

      <Footer locale="kr" />
    </>
  )
}
