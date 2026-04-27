import Link from 'next/link'
import type { Post } from '@/lib/posts'

/**
 * StoryRail — Instagram-style horizontal scroll of "spotlight" posts.
 * Mobile-first: snap-scroll, no scrollbar.
 */
export function StoryRail({
  posts,
  locale = 'en'
}: {
  posts: Post[]
  locale?: 'en' | 'kr'
}) {
  if (!posts.length) return null
  const blogBase = locale === 'kr' ? '/kr/blog' : '/blog'
  return (
    <section
      aria-label="Spotlight stories"
      className="relative -mx-4 px-4 py-3 overflow-x-auto no-scrollbar"
    >
      <ul className="flex gap-3 snap-x snap-mandatory">
        {posts.map((post) => (
          <li key={post.slug} className="snap-start shrink-0 w-20 text-center">
            <Link
              href={`${blogBase}/${post.slug}`}
              className="flex flex-col items-center gap-1 tap"
              aria-label={`Open spotlight: ${post.title}`}
            >
              <span className="ring-sns inline-block">
                <span
                  className="block h-16 w-16 rounded-full bg-cover bg-center border-2 border-background"
                  style={{ backgroundImage: `url(${post.heroImage})` }}
                />
              </span>
              <span className="text-[11px] leading-tight line-clamp-2 px-0.5 text-muted-foreground">
                {post.title.split(' ').slice(0, 4).join(' ')}…
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
