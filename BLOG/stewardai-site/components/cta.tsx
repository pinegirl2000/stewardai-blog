import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

/**
 * CTA — full-width gradient block at the end of the landing page.
 */
export function CTA() {
  return (
    <section className="max-w-3xl mx-auto px-4 pb-16">
      <div className="relative overflow-hidden rounded-3xl bg-sns-gradient p-8 sm:p-10 text-center text-white">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
          Ship your first AI workflow tonight.
        </h2>
        <p className="mt-2 text-white/85 max-w-md mx-auto text-sm sm:text-base">
          Free for the first 1,000 runs. No credit card. Bring your stack — we&apos;ll meet it.
        </p>
        <div className="mt-5 flex flex-col sm:flex-row gap-2.5 items-center justify-center">
          <Link
            href="/signup"
            className="tap inline-flex items-center justify-center gap-1.5 px-5 h-12 rounded-2xl bg-white text-foreground font-semibold w-full sm:w-auto"
          >
            Start free <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/demo"
            className="tap inline-flex items-center justify-center px-5 h-12 rounded-2xl border border-white/40 text-white font-medium w-full sm:w-auto backdrop-blur"
          >
            Book a 20-min demo
          </Link>
        </div>
      </div>
    </section>
  )
}
