'use client'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { CATEGORIES } from '@/lib/categories'
import { cn } from '@/lib/utils'

/**
 * CategoryChips — sticky filter row, single-select.
 * Mimics the chip rail used in 카카오뷰 / Threads / Pinterest.
 */
export function CategoryChips({ locale = 'en' }: { locale?: 'en' | 'kr' }) {
  const sp = useSearchParams()
  const active = sp.get('category')

  const base = locale === 'kr' ? '/kr/blog' : '/blog'

  const items = [
    { slug: null as null, label: locale === 'kr' ? '전체' : 'All', icon: '✨' },
    ...CATEGORIES.map((c) => ({
      slug: c.slug,
      label: locale === 'kr' ? c.labelKo : c.labelEn,
      icon: c.icon
    }))
  ]

  return (
    <div className="sticky top-14 z-30 glass -mx-4 px-4 py-2 overflow-x-auto no-scrollbar">
      <ul className="flex gap-2 min-w-max">
        {items.map((it) => {
          const isActive = (it.slug ?? null) === (active ?? null)
          const href = it.slug ? `${base}?category=${it.slug}` : base
          return (
            <li key={it.label}>
              <Link
                href={href}
                className={cn(
                  'inline-flex items-center gap-1.5 px-3.5 h-9 rounded-full text-sm border transition',
                  isActive
                    ? 'bg-foreground text-background border-foreground'
                    : 'bg-background border-border hover:border-foreground/30 text-muted-foreground'
                )}
              >
                <span aria-hidden>{it.icon}</span>
                <span>{it.label}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
