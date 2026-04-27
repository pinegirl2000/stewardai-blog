# stewardai-site

The marketing site + blog for **stewardai.ai** — an AI automation platform built for marketers and operators.

Built with **Next.js 14 (App Router)** + **TypeScript** + **Tailwind CSS** + **Framer Motion**.
UI components are **Aceternity-style** (Spotlight, BackgroundGradient, MovingBorder, TextGenerateEffect) wrapped in a **mobile-first SNS feed UX** that takes cues from Threads / Instagram / 카카오뷰 — sticky bottom nav, story rail, gradient avatar rings, infinite-scroll cards.

> **Why this stack?** Aceternity UI gives the modern animated aesthetic 20–30 readers expect; Next.js MDX gives an OpenClaw-friendly content pipeline; the design system is mobile-first by default (44px tap targets, safe-area padding, no horizontal scroll on small viewports).

---

## Project structure

```
stewardai-site/
├── app/
│   ├── layout.tsx              # Top bar + bottom nav + global SEO/Org JSON-LD
│   ├── page.tsx                # Landing (Hero · Features · Feed preview · CTA)
│   ├── globals.css             # Tailwind base + SNS gradient utilities
│   └── blog/
│       ├── page.tsx            # SNS-style feed (story rail, category chips, cards)
│       └── [slug]/page.tsx     # Article detail w/ Article JSON-LD + sticky action bar
├── components/
│   ├── ui/                     # Aceternity-style primitives
│   │   ├── spotlight.tsx
│   │   ├── background-gradient.tsx
│   │   ├── moving-border.tsx
│   │   └── text-generate-effect.tsx
│   ├── sns/                    # SNS-style mobile interaction layer
│   │   ├── top-bar.tsx
│   │   ├── bottom-nav.tsx
│   │   ├── story-rail.tsx
│   │   ├── category-chips.tsx
│   │   └── post-card.tsx
│   ├── hero.tsx
│   ├── features.tsx
│   ├── cta.tsx
│   └── footer.tsx
├── content/blog/
│   ├── en/                     # English (primary) MDX posts
│   └── kr/                     # Korean translations (paired via hreflang)
├── lib/
│   ├── utils.ts                # cn() + relative time
│   └── posts.ts                # MDX loader + categories
├── public/                     # Static assets (logo, og.png, etc.)
├── package.json
├── next.config.mjs
├── tailwind.config.ts
├── postcss.config.mjs
├── tsconfig.json
├── .env.example
└── .gitignore
```

---

## Getting started

```bash
# 1. Install
npm install

# 2. Local dev (http://localhost:3000)
npm run dev

# 3. Production build
npm run build && npm start
```

> Recommended: Node ≥ 20 LTS.

### Environment

Copy `.env.example` to `.env.local` and fill in values you need.

```
NEXT_PUBLIC_SITE_URL=https://stewardai.ai
OPENCLAW_API_KEY=
OPENCLAW_DEPLOY_HOOK_URL=
```

---

## Mobile-first UX rules (enforced in components)

- **Tap targets ≥ 44 × 44 px** (`.tap` utility).
- **Safe-area padding** on top bar and bottom nav (`pt-safe`, `pb-safe`).
- **No horizontal scroll** on small viewports — overflow rails use `.no-scrollbar` + `snap-x`.
- **Sticky bottom nav** hidden on `md+` (desktop uses top-bar nav).
- **LCP image** is set with `priority` on the first feed card / post hero.
- **Schema.org Article** + `Organization` JSON-LD injected from layout & detail page.

---

## Content authoring

Each blog post is an MDX file under `content/blog/{en,kr}/<slug>.mdx` with frontmatter:

```yaml
---
title: "..."                       # ≤ 60 chars
description: "..."                 # 140–155 chars
slug: "kebab-case"
category: "playbooks | marketing-ai | tools | governance"
tags: ["#email", "#playbook"]
locale: "en"                       # or "ko"
translations:
  ko: "/ko/blog/..."               # if a translation exists
author: "eunice"
publishedAt: "2026-04-26"
heroImage: "https://..."
heroAlt: "..."
spotlight: false                   # surface in story rail
---
```

The **EN version is canonical.** When publishing a KR translation, set the EN frontmatter's `translations.ko` to the KR slug, and vice versa — the detail page emits paired `hreflang` tags.

### SEO checklist (run before merging)

- [ ] Title ≤ 60 chars, primary keyword in the first 50%
- [ ] Description 140–155 chars
- [ ] H1 contains the primary keyword
- [ ] First 100 words include the primary keyword + the answer to the search query
- [ ] At least 2 internal links to same-cluster pages, 1 to a different pillar
- [ ] Hero image alt text descriptive (not keyword-stuffed)
- [ ] LCP hero ≤ 100 KB
- [ ] Mobile preview passes (Chrome DevTools → iPhone 14 Pro)
- [ ] Lighthouse mobile: Perf ≥ 90, A11y ≥ 95, SEO = 100

---

## OpenClaw deployment

Authoring → publish flow:

```
1. Author drafts MDX in `content/blog/{locale}/`
2. PR opened → Vercel preview auto-built
3. SEO checklist + LCP image check (CI step)
4. Merge to main
5. OpenClaw deploy hook → revalidates cluster pages + sitemap + RSS
```

Hook URL goes in `OPENCLAW_DEPLOY_HOOK_URL`. The repo is set up so any push to `main` that touches `content/**` or `app/**` triggers it.

---

## Design tokens

The SNS gradient palette lives in `tailwind.config.ts`:

| Token | Hex | Use |
|---|---|---|
| `--accent-violet` | `#7C3AED` | Brand primary, CTA bg |
| `--accent-pink` | `#EC4899` | Highlights, "fresh" indicators |
| `--accent-cyan` | `#06B6D4` | Secondary accents |
| `--accent-amber` | `#F59E0B` | Tertiary, governance pillar |
| `bg-sns-gradient` | violet → pink → amber | Hero, CTA, avatar rings |
| `bg-sns-gradient-cool` | cyan → violet | Author avatars |

---

## Roadmap

- [ ] `/ko` locale routing with full Korean UI strings
- [ ] Sitemap + RSS auto-generation
- [ ] Comment system (Threads-style replies)
- [ ] Save / bookmark persistence (Supabase)
- [ ] Workflow template library (`/playbooks`)
- [ ] ROI calculator (interactive)

---

## License

Proprietary — StewardAI internal.
