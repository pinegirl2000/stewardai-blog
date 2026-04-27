import type { Metadata } from 'next'
import { HeroKr } from '@/components/hero-kr'
import { FeaturesKr } from '@/components/features-kr'
import { CtaKr } from '@/components/cta-kr'
import { Footer } from '@/components/footer'
import { getSpotlightPosts, getAllPosts } from '@/lib/posts'
import { StoryRail } from '@/components/sns/story-rail'
import { PostCard } from '@/components/sns/post-card'

export const metadata: Metadata = {
  title: 'StewardAI — 실제로 출시되는 AI 자동화. 당신이 관리합니다.',
  description:
    'StewardAI는 마케터와 운영팀을 위한 AI 자동화 플랫폼입니다. 거버넌스를 갖춘 AI 워크플로우를 분기가 아닌 며칠 만에 출시하세요.',
  alternates: {
    canonical: 'https://stewardai.ai/kr',
    languages: {
      'en-US': 'https://stewardai.ai',
      'ko-KR': 'https://stewardai.ai/kr'
    }
  },
  openGraph: {
    type: 'website',
    siteName: 'StewardAI',
    title: 'StewardAI — 실제로 출시되는 AI 자동화',
    description: '마케터와 운영팀을 위한 AI 자동화 플랫폼. 며칠 안에 출시하세요.',
    url: 'https://stewardai.ai/kr',
    locale: 'ko_KR',
    alternateLocale: ['en_US']
  }
}

export default function HomePageKr() {
  const spotlight = getSpotlightPosts('kr', 6)
  const latest = getAllPosts('kr').slice(0, 3)

  return (
    <>
      <HeroKr />
      <FeaturesKr />

      <section className="max-w-3xl mx-auto px-4 pt-2 pb-10">
        <header className="flex items-end justify-between mb-3">
          <h2 className="text-xl font-bold tracking-tight">피드에서</h2>
          <a className="text-sm text-accent-violet font-medium" href="/kr/blog">
            전체 보기 →
          </a>
        </header>
        {spotlight.length > 0 && <StoryRail posts={spotlight} locale="kr" />}
        <div className="mt-4 grid gap-4">
          {latest.map((p, i) => (
            <PostCard key={p.slug} post={p} locale="kr" priority={i === 0} />
          ))}
        </div>
      </section>

      <CtaKr />
      <Footer locale="kr" />
    </>
  )
}
