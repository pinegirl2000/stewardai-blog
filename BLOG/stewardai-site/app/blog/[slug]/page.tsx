import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import { getAllPosts, getPostBySlug } from '@/lib/posts'
import { formatRelativeTime } from '@/lib/utils'
import { Footer } from '@/components/footer'
import { Eye, MessageCircle, Bookmark, Share2 } from 'lucide-react'

export async function generateStaticParams() {
  return getAllPosts('en').map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug, 'en')
  if (!post) return {}
  const url = `https://stewardai.ai/blog/${post.slug}`
  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: url,
      languages: post.translations?.kr
        ? { 'ko-KR': `https://stewardai.ai${post.translations.kr}` }
        : undefined
    },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      url,
      images: [{ url: post.heroImage, alt: post.heroAlt }],
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      authors: [post.author]
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [post.heroImage]
    }
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug, 'en')
  if (!post) notFound()

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: [post.heroImage],
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: { '@type': 'Person', name: post.author },
    publisher: {
      '@type': 'Organization',
      name: 'StewardAI',
      logo: {
        '@type': 'ImageObject',
        url: 'https://stewardai.ai/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://stewardai.ai/blog/${post.slug}`
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <article className="max-w-2xl mx-auto px-4 pt-4 pb-12">
        <header className="mb-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="ring-sns inline-block">
              <span className="block h-9 w-9 rounded-full bg-sns-gradient-cool border-2 border-background" />
            </span>
            <div className="flex-1">
              <p className="text-sm font-medium leading-tight">
                {post.author === 'eunice' ? 'Eunice · StewardAI' : post.author}
              </p>
              <p className="text-xs text-muted-foreground leading-tight">
                <time dateTime={post.publishedAt}>
                  {formatRelativeTime(post.publishedAt, 'en')}
                </time>
                {' · '}
                {post.computedReadingTime} min read
              </p>
            </div>
            <ul className="hidden sm:flex flex-wrap gap-1.5">
              {post.tags.slice(0, 3).map((tag) => (
                <li
                  key={tag}
                  className="text-[11px] px-2 py-1 rounded-full bg-muted text-muted-foreground"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold leading-[1.15] tracking-tight">
            {post.title}
          </h1>
          <p className="mt-3 text-base text-muted-foreground">{post.description}</p>
        </header>

        <div className="relative aspect-[16/9] rounded-3xl overflow-hidden bg-muted my-6">
          <Image
            src={post.heroImage}
            alt={post.heroAlt}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            priority
            className="object-cover"
          />
        </div>

        <div className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-accent-violet prose-img:rounded-2xl">
          <MDXRemote
            source={post.content}
            options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
          />
        </div>

        {/* Action row — sticky on mobile so the SNS feel persists when scrolling */}
        <div className="sticky bottom-20 md:bottom-6 mt-10 z-30 flex justify-center">
          <div className="glass border border-border rounded-full px-3 py-2 flex items-center gap-1 shadow-lg">
            <button className="tap rounded-full px-2 text-sm" aria-label="Reads">
              <Eye className="h-4 w-4" />
            </button>
            <button className="tap rounded-full px-2 text-sm" aria-label="Comments">
              <MessageCircle className="h-4 w-4" />
            </button>
            <button className="tap rounded-full px-2 text-sm" aria-label="Save">
              <Bookmark className="h-4 w-4" />
            </button>
            <button className="tap rounded-full px-2 text-sm" aria-label="Share">
              <Share2 className="h-4 w-4" />
            </button>
          </div>
        </div>

        {post.translations?.kr && (
          <p className="mt-6 text-sm text-muted-foreground text-center">
            <Link href={post.translations.kr} hrefLang="ko-KR" className="underline">
              한국어 버전 읽기 →
            </Link>
          </p>
        )}
      </article>

      <Footer />
    </>
  )
}
