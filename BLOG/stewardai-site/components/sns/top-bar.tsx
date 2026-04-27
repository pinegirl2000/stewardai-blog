import Link from 'next/link'
import { Search, Bell } from 'lucide-react'

/**
 * Top bar — Threads-style sticky header.
 * Logo (left), search + notifications (right). Mobile-first.
 */
export function TopBar() {
  return (
    <header className="sticky top-0 z-40 glass pt-safe">
      <div className="max-w-3xl mx-auto flex items-center justify-between h-14 px-4">
        <Link href="/" className="flex items-center gap-2 tap" aria-label="StewardAI home">
          <span className="inline-block h-8 w-8 rounded-xl bg-sns-gradient" aria-hidden />
          <span className="font-semibold tracking-tight text-base">StewardAI</span>
        </Link>
        <div className="flex items-center gap-1">
          <Link
            href="/search"
            aria-label="Search"
            className="tap rounded-full hover:bg-muted transition"
          >
            <Search className="h-5 w-5" />
          </Link>
          <Link
            href="/notifications"
            aria-label="Notifications"
            className="tap rounded-full hover:bg-muted transition relative"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute top-2.5 right-2.5 h-1.5 w-1.5 rounded-full bg-accent-pink" />
          </Link>
        </div>
      </div>
    </header>
  )
}
