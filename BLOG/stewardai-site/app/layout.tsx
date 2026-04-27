import type { Metadata, Viewport } from 'next'
import './globals.css'
import { TopBar } from '@/components/sns/top-bar'
import { BottomNav } from '@/components/sns/bottom-nav'

export const metadata: Metadata = {
  metadataBase: new URL('https://stewardai.ai'),
  title: {
    default: 'StewardAI — AI automation that ships. Stewarded by you.',
    template: '%s · StewardAI'
  },
  description:
    'StewardAI is the AI automation platform built for marketers and operators. Ship governed AI workflows in days, not quarters.',
  keywords: [
    'AI automation platform',
    'AI workflow automation',
    'AI for marketers',
    'AI agent workflow',
    'marketing automation AI',
    'AI 자동화 플랫폼',
    'AI 워크플로우 자동화'
  ],
  authors: [{ name: 'StewardAI' }],
  openGraph: {
    type: 'website',
    siteName: 'StewardAI',
    title: 'StewardAI — AI automation that ships. Stewarded by you.',
    description:
      'The AI automation platform built for marketers and operators. Ship governed AI workflows in days, not quarters.',
    url: 'https://stewardai.ai',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'StewardAI' }],
    locale: 'en_US',
    alternateLocale: ['ko_KR']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StewardAI',
    description: 'AI automation that ships. Stewarded by you.',
    images: ['/og.png']
  },
  alternates: {
    canonical: 'https://stewardai.ai',
    languages: {
      'en-US': 'https://stewardai.ai',
      'ko-KR': 'https://stewardai.ai/kr'
    }
  },
  robots: { index: true, follow: true }
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0f' }
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover'
}

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'StewardAI',
  url: 'https://stewardai.ai',
  logo: 'https://stewardai.ai/logo.png',
  sameAs: [
    'https://www.linkedin.com/company/stewardai',
    'https://x.com/stewardai',
    'https://github.com/stewardai'
  ]
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body className="min-h-dvh flex flex-col">
        <TopBar />
        <main className="flex-1 pb-24 md:pb-0">{children}</main>
        <BottomNav />
      </body>
    </html>
  )
}
