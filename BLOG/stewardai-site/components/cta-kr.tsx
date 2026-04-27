import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function CtaKr() {
  return (
    <section className="max-w-3xl mx-auto px-4 pb-16">
      <div className="relative overflow-hidden rounded-3xl bg-sns-gradient p-8 sm:p-10 text-center text-white">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
          오늘 밤, 첫 AI 워크플로우를 출시하세요.
        </h2>
        <p className="mt-2 text-white/85 max-w-md mx-auto text-sm sm:text-base">
          첫 1,000회 실행 무료. 신용카드 불필요. 사용 중인 스택에 그대로 붙여드립니다.
        </p>
        <div className="mt-5 flex flex-col sm:flex-row gap-2.5 items-center justify-center">
          <Link
            href="/signup"
            className="tap inline-flex items-center justify-center gap-1.5 px-5 h-12 rounded-2xl bg-white text-foreground font-semibold w-full sm:w-auto"
          >
            무료로 시작 <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/demo"
            className="tap inline-flex items-center justify-center px-5 h-12 rounded-2xl border border-white/40 text-white font-medium w-full sm:w-auto backdrop-blur"
          >
            20분 데모 예약하기
          </Link>
        </div>
      </div>
    </section>
  )
}
