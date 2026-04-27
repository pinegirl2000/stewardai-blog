'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Compass, Bookmark, User, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

const items = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/blog', label: 'Feed', icon: Compass },
  { href: '/playbooks', label: 'Try', icon: Sparkles, primary: true },
  { href: '/saved', label: 'Saved', icon: Bookmark },
  { href: '/profile', label: 'Me', icon: User }
]

/**
 * Bottom nav — Instagram/Threads-style mobile sticky tabbar.
 * Hidden on >= md viewports (we use TopBar nav on desktop).
 */
export function BottomNav() {
  const pathname = usePathname()

  return (
    <nav
      aria-label="Primary"
      className="md:hidden fixed bottom-0 inset-x-0 z-40 glass border-t pb-safe"
    >
      <ul className="flex items-stretch justify-around max-w-lg mx-auto">
        {items.map(({ href, label, icon: Icon, primary }) => {
          const active =
            href === '/'
              ? pathname === '/'
              : pathname?.startsWith(href)
          return (
            <li key={href} className="flex-1">
              <Link
                href={href}
                aria-label={label}
                className={cn(
                  'flex flex-col items-center justify-center gap-0.5 py-2 tap relative',
                  active ? 'text-foreground' : 'text-muted-foreground'
                )}
              >
                {primary ? (
                  <span className="absolute -top-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-sns-gradient shadow-lg shadow-pink-500/30">
                    <Icon className="h-5 w-5 text-white" />
                  </span>
                ) : (
                  <Icon className={cn('h-5 w-5', active && 'fill-foreground/10')} />
                )}
                <span className={cn('text-[10px] mt-0.5', primary && 'mt-7')}>
                  {label}
                </span>
                {active && !primary && (
                  <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-1 w-6 rounded-full bg-sns-gradient" />
                )}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
