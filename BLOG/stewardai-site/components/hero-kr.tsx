import Link from 'next/link'
import { Spotlight } from '@/components/ui/spotlight'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { MovingBorderButton } from '@/components/ui/moving-border'
import { ArrowRight, Sparkles } from 'lucide-react'

/**
 * HeroKr — 한국어 버전 메인 히어로.
 * SEO H1: 핵심 키워드 "AI 자동화 플랫폼" 포함.
 */
export function HeroKr() {
  return (
    <section className="relative overflow-hidden">
      <Spotlight className="-top-24 left-0 md:left-60 md:-top-20" fill="violet" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 pt-10 pb-16 text-center">
        <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full border bg-background/80 backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 text-accent-violet" />
          <span className="text-gradient font-semibold">v1.0 · 퍼블릭 베타</span>
        </span>

        <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
          <span className="block">실제로 출시되는 AI 자동화 플랫폼</span>
          <span className="block text-gradient">
            <TextGenerateEffect words="당신이 직접 관리합니다." />
          </span>
        </h1>

        <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
          StewardAI는 마케터와 운영팀이 AI 워크플로우를 빌드·배포·관리할 수 있는 단일
          플랫폼입니다. 분기가 아닌 며칠 안에 출시하세요. 모델 박사 학위는 필요 없습니다.
        </p>

        <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
          <MovingBorderButton
            as={Link}
            href="/signup"
            className="bg-foreground text-background hover:bg-foreground/90 font-semibold"
            containerClassName="w-full sm:w-auto"
          >
            <span className="flex items-center gap-1.5">
              무료로 시작하기
              <ArrowRight className="h-4 w-4" />
            </span>
          </MovingBorderButton>
          <Link
            href="/kr/blog"
            className="tap text-sm font-medium px-5 h-12 rounded-2xl border border-border hover:bg-muted transition w-full sm:w-auto inline-flex items-center justify-center"
          >
            플레이북 읽기 →
          </Link>
        </div>

        <p className="mt-5 text-xs text-muted-foreground">
          분기당 평균 47개의 AI 워크플로우를 출시하는 그로스 팀들이 사용 중입니다.
        </p>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 pb-10">
        <div className="grid grid-cols-3 gap-2 text-center">
          {[
            { k: '47', v: '워크플로우 / 분기' },
            { k: '6×', v: 'SOP 대비 속도' },
            { k: '0', v: '박사 학위 불필요' }
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
