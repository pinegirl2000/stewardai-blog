import Link from 'next/link'
import Image from 'next/image'
import { Eye, MessageCircle, Bookmark, Share2 } from 'lucide-react'
import type { Post } from '@/lib/posts'
import { formatRelativeTime, cn } from '@/lib/utils'

/**
 * PostCard — Threads / Instagram-style feed card.
 * Avatar + meta → hero image → title → excerpt → action row → tags.
 * Mobile-first: full-bleed image on small viewports.
 */
export function PostCard({
  post,
  locale = 'en',
  priority = false
}: {
  post: Post
  locale?: 'en' | 'kr'
  priority?: boolean
}) {
  const blogBase = locale === 'kr' ? '/kr/blog' : '/blog'
  const isFresh =
    Date.now() - new Date(post.publishedAt).getTime() < 7 * 24 * 60 * 60 * 1000
  const time = formatRelativeTime(post.publishedAt, locale)

  return (
    <article
      className="bg-background border border-border rounded-3xl overflow-hidden animate-fade-in-up"
      itemScope
      itemType="https://schema.org/Article"
    >
      <header className="flex items-center gap-3 px-4 pt-4">
        <span className={cn(isFresh && 'ring-sns inline-block')}>
          <span className="block h-9 w-9 rounded-full bg-sns-gradient-cool border-2 border-background" />
        </span>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium leading-tight" itemProp="author">
            {post.author === 'eunice' ? 'Eunice · StewardAI' : post.author}
          </p>
          <p className="text-xs text-muted-foreground leading-tight">
            <time dateTime={post.publishedAt} itemProp="datePublished">
              {time}
            </time>
            {' · '}
            {post.computedReadingTime} {locale === 'kr' ? '분' : 'min'}
          </p>
        </div>
        <button
          type="button"
          className="tap rounded-full text-muted-foreground hover:text-foreground"
          aria-label="More"
        >
          ⋯
        </button>
      </header>

      <Link
        href={`${blogBase}/${post.slug}`}
        className="block mt-3 relative aspect-[4/3] sm:aspect-[16/9] bg-muted"
      >
        <Image
          src={post.heroImage}
          alt={post.heroAlt}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, 640px"
          className="object-cover"
          itemProp="image"
        />
      </Link>

      <div className="px-4 pt-3">
        <h2
          className="text-lg font-semibold leading-snug line-clamp-2"
          itemProp="headline"
        >
          <Link href={`${blogBase}/${post.slug}`}>{post.title}</Link>
        </h2>
        <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2" itemProp="description">
          {post.description}
        </p>
      </div>

      <div className="px-4 py-3 flex items-center gap-4 text-muted-foreground">
        <button className="tap inline-flex items-center gap-1.5 text-sm" aria-label="Reads">
          <Eye className="h-4 w-4" /> 1.2k
        </button>
        <button className="tap inline-flex items-center gap-1.5 text-sm" aria-label="Comments">
          <MessageCircle className="h-4 w-4" /> 18
        </button>
        <span className="ml-auto inline-flex items-center gap-1">
          <button className="tap" aria-label="Save">
            <Bookmark className="h-4 w-4" />
          </button>
          <button className="tap" aria-label="Share">
            <Share2 className="h-4 w-4" />
          </button>
        </span>
      </div>

      <ul className="px-4 pb-4 flex flex-wrap gap-1.5">
        {post.tags.slice(0, 2).map((tag) => (
          <li
            key={tag}
            className="text-[11px] px-2 py-1 rounded-full bg-muted text-muted-foreground"
          >
            {tag}
          </li>
        ))}
      </ul>
    </article>
  )
}
