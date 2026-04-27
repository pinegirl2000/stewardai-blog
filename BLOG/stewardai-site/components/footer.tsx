import Link from 'next/link'

export function Footer({ locale = 'en' }: { locale?: 'en' | 'kr' }) {
  const isKr = locale === 'kr'
  const base = isKr ? '/kr' : ''
  const t = isKr
    ? {
        about: '소개',
        blog: '블로그',
        playbooks: '플레이북',
        pricing: '가격',
        privacy: '개인정보',
        terms: '이용약관',
        switch: 'English',
        switchHref: '/',
        tagline: '실무자를 위해 만들었습니다.'
      }
    : {
        about: 'About',
        blog: 'Blog',
        playbooks: 'Playbooks',
        pricing: 'Pricing',
        privacy: 'Privacy',
        terms: 'Terms',
        switch: '한국어',
        switchHref: '/kr',
        tagline: 'Made for practitioners.'
      }

  return (
    <footer className="border-t border-border mt-8">
      <div className="max-w-3xl mx-auto px-4 py-8 text-sm text-muted-foreground">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <Link href={`${base}/about`} className="hover:text-foreground">{t.about}</Link>
          <Link href={`${base}/blog`} className="hover:text-foreground">{t.blog}</Link>
          <Link href={`${base}/playbooks`} className="hover:text-foreground">{t.playbooks}</Link>
          <Link href={`${base}/pricing`} className="hover:text-foreground">{t.pricing}</Link>
          <Link href={`${base}/legal/privacy`} className="hover:text-foreground">{t.privacy}</Link>
          <Link href={`${base}/legal/terms`} className="hover:text-foreground">{t.terms}</Link>
          <Link
            href={t.switchHref}
            hrefLang={isKr ? 'en-US' : 'ko-KR'}
            className="ml-auto hover:text-foreground"
          >
            {t.switch}
          </Link>
        </div>
        <p className="mt-4 text-xs">© {new Date().getFullYear()} StewardAI · {t.tagline}</p>
      </div>
    </footer>
  )
}
