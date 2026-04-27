import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { CTA } from '@/components/cta'
import { Footer } from '@/components/footer'
import { getSpotlightPosts } from '@/lib/posts'
import { StoryRail } from '@/components/sns/story-rail'
import { PostCard } from '@/components/sns/post-card'
import { getAllPosts } from '@/lib/posts'

export default function HomePage() {
  const spotlight = getSpotlightPosts('en', 6)
  const latest = getAllPosts('en').slice(0, 3)

  return (
    <>
      <Hero />
      <Features />

      {/* SNS feed preview block */}
      <section className="max-w-3xl mx-auto px-4 pt-2 pb-10">
        <header className="flex items-end justify-between mb-3">
          <h2 className="text-xl font-bold tracking-tight">From the feed</h2>
          <a className="text-sm text-accent-violet font-medium" href="/blog">
            See all →
          </a>
        </header>
        {spotlight.length > 0 && <StoryRail posts={spotlight} />}
        <div className="mt-4 grid gap-4">
          {latest.map((p, i) => (
            <PostCard key={p.slug} post={p} priority={i === 0} />
          ))}
        </div>
      </section>

      <CTA />
      <Footer />
    </>
  )
}
