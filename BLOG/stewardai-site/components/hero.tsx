import Link from 'next/link'
import { Spotlight } from '@/components/ui/spotlight'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { MovingBorderButton } from '@/components/ui/moving-border'
import { ArrowRight, Sparkles } from 'lucide-react'

/**
 * Hero — Aceternity-style mobile-first hero.
 * Spotlight backdrop · gradient pill · animated headline · dual CTA.
 * Designed for the AI-automation-platform pitch.
 *
 * SEO H1: contains "AI automation platform" primary keyword.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Spotlight className="-top-24 left-0 md:left-60 md:-top-20" fill="violet" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 pt-10 pb-16 text-center">
        <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full border bg-background/80 backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 text-accent-violet" />
          <span className="text-gradient font-semibold">v1.0 · Now in public beta</span>
        </span>

        <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
          <span className="block">The AI automation platform</span>
          <span className="block text-gradient">
            <TextGenerateEffect words="that ships, governed by you." />
          </span>
        </h1>

        <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
          StewardAI gives marketers and operators a single place to build, deploy, and govern
          AI workflows — in days, not quarters. No model PhD required.
        </p>

        <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
          <MovingBorderButton
            as={Link}
            href="/signup"
            className="bg-foreground text-background hover:bg-foreground/90 font-semibold"
            containerClassName="w-full sm:w-auto"
          >
            <span className="flex items-center gap-1.5">
              Start free
              <ArrowRight className="h-4 w-4" />
            </span>
          </MovingBorderButton>
          <Link
            href="/blog"
            className="tap text-sm font-medium px-5 h-12 rounded-2xl border border-border hover:bg-muted transition w-full sm:w-auto inline-flex items-center justify-center"
          >
            Read the playbooks →
          </Link>
        </div>

        <p className="mt-5 text-xs text-muted-foreground">
          Trusted by growth teams shipping ~ 47 AI workflows / quarter on average.
        </p>
      </div>

      {/* SNS-style social-proof rail */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 pb-10">
        <div className="grid grid-cols-3 gap-2 text-center">
          {[
            { k: '47', v: 'workflows / qtr' },
            { k: '6×', v: 'faster than SOP' },
            { k: '0', v: 'PhDs required' }
          ].map((s) => (
            <div
              key={s.v}
              className="rounded-2xl border border-border bg-background/60 backdrop-blur py-3"
            >
              <p className="text-2xl font-bold text-gradient">{s.k}</p>
              <p className="text-[11px] text-muted-foreground mt-0.5">{s.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
