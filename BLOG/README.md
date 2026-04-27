# StewardAI Blog — Project Workspace

This folder contains everything needed to launch **stewardai.ai** — strategy docs, the Next.js + Aceternity UI site source, blog content, and a mobile preview.

## Contents

| Folder | What's in it |
|---|---|
| `01-strategy/` | Brand & content strategy, SEO keyword strategy, blog category/tag architecture |
| `stewardai-site/` | Next.js 14 + TypeScript + Tailwind + Framer Motion site (landing + blog), Aceternity-style UI, mobile-first SNS feed UX |
| `mobile-preview.html` | Static visual preview of the SNS-style mobile interface — open in a browser, no install needed |

## Quick links

- Strategy → [`01-strategy/01-content-strategy.md`](01-strategy/01-content-strategy.md)
- SEO map → [`01-strategy/02-seo-keyword-strategy.md`](01-strategy/02-seo-keyword-strategy.md)
- Blog IA → [`01-strategy/03-blog-category-structure.md`](01-strategy/03-blog-category-structure.md)
- Site setup → [`stewardai-site/README.md`](stewardai-site/README.md)
- Mobile preview → [`mobile-preview.html`](mobile-preview.html)

## Blog posts (3 cornerstone, EN + KR)

| Slug | EN | KR |
|---|---|---|
| `ai-automation-for-marketers-2026` | ✅ | ✅ (`2026-ai-automation-for-marketers`) |
| `build-first-ai-agent-workflow-30-minutes` | ✅ | ✅ (`30-min-first-ai-agent-workflow`) |
| `5-high-roi-ai-workflows-shipping-this-quarter` | ✅ | ✅ (`5-high-roi-ai-workflows-q2-2026`) |

## To run the live site

```bash
cd stewardai-site
npm install
npm run dev
# → http://localhost:3000
```

## Stack rationale

- **Next.js 14 App Router** — server components for SEO + revalidation hooks for OpenClaw.
- **Tailwind + Framer Motion** — Aceternity components rely on this combo.
- **Aceternity UI primitives** (Spotlight, BackgroundGradient, MovingBorder, TextGenerateEffect) — modern animated aesthetic that matches what 20–30 audiences expect from SNS-native brands.
- **MDX content** — git-native, OpenClaw-deployable, easy for editors to author.
- **SNS UX layer** — sticky bottom nav, story rail, gradient avatar rings, glass top bar, snap-scroll chips. Mobile is the first-class experience; desktop is the up-rendering.
