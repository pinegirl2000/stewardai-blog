import { BackgroundGradient } from '@/components/ui/background-gradient'
import { Workflow, ShieldCheck, LineChart, Plug } from 'lucide-react'

const features = [
  {
    icon: Workflow,
    title: '바로 출시되는 워크플로우 템플릿',
    body:
      '리드 스코어링, 콘텐츠 운영, 광고 QA 등 60개 이상의 검증된 레시피로 시작해 분 단위로 적용하세요.'
  },
  {
    icon: ShieldCheck,
    title: '감(感)이 아닌 거버넌스',
    body:
      '브랜드 보이스 가드레일, 프롬프트 평가, 감사 로그가 기본 탑재. 컴플라이언스도 빠르게 사인오프합니다.'
  },
  {
    icon: Plug,
    title: '기존 스택과 바로 연결',
    body:
      'HubSpot, Salesforce, Slack, Notion, GA4 등 80여 개 네이티브 커넥터. 나머지는 API/웹훅으로.'
  },
  {
    icon: LineChart,
    title: '감사에도 깨끗한 ROI',
    body:
      '모든 실행이 시간·비용·매출에 연결됩니다. 가치 논쟁은 그만 — 대시보드로 보여주세요.'
  }
]

export function FeaturesKr() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="max-w-3xl mx-auto px-4 py-12"
    >
      <div className="text-center mb-8">
        <p className="text-xs uppercase tracking-wider text-accent-violet font-semibold">
          왜 StewardAI인가
        </p>
        <h2 id="features-heading" className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight">
          실제로 일을 굴리는 사람을 위해 만들었습니다.
        </h2>
        <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
          마케터와 운영팀에게 필요한 건 또 다른 모델 마켓플레이스가 아닙니다. 어른의 감독을
          갖춘 출시 능력이 필요합니다.
        </p>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {features.map(({ icon: Icon, title, body }) => (
          <li key={title} className="list-none">
            <BackgroundGradient
              className="rounded-3xl bg-background p-5 h-full"
              containerClassName="rounded-3xl"
            >
              <div className="flex items-start gap-3">
                <span className="shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-muted">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-semibold leading-tight">{title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{body}</p>
                </div>
              </div>
            </BackgroundGradient>
          </li>
        ))}
      </ul>
    </section>
  )
}
