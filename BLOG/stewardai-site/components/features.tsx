import { BackgroundGradient } from '@/components/ui/background-gradient'
import { Workflow, ShieldCheck, LineChart, Plug } from 'lucide-react'

const features = [
  {
    icon: Workflow,
    title: 'Workflow templates that ship',
    body:
      'Start from 60+ practitioner-proven recipes — lead scoring, content ops, paid ad QA — and adapt in minutes.'
  },
  {
    icon: ShieldCheck,
    title: 'Governance, not vibes',
    body:
      'Brand-voice guardrails, prompt evals, and audit logs are built in. Compliance can sign off without slowing you down.'
  },
  {
    icon: Plug,
    title: 'Plug into your stack',
    body:
      'Native connectors for HubSpot, Salesforce, Slack, Notion, GA4 and 80+ more. APIs and webhooks for the rest.'
  },
  {
    icon: LineChart,
    title: 'ROI that audits clean',
    body:
      'Every run is timed, costed, and tied to revenue. Stop debating value — show it, on a dashboard.'
  }
]

/**
 * Features — 4-up grid of value props.
 * Each card uses BackgroundGradient for the SNS-like glowing edge.
 */
export function Features() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="max-w-3xl mx-auto px-4 py-12"
    >
      <div className="text-center mb-8">
        <p className="text-xs uppercase tracking-wider text-accent-violet font-semibold">
          Why StewardAI
        </p>
        <h2 id="features-heading" className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight">
          Built for the people who actually run the work.
        </h2>
        <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
          Marketers and operators don&apos;t need another model marketplace. They need shipping
          power with adult supervision.
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
