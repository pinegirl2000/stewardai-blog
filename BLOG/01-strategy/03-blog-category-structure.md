# StewardAI — Blog Category & Tag Architecture

> Information architecture for the blog feed, designed for an SNS-style mobile-first interface.
> **Last updated:** 2026-04-27

---

## 1. Top-level Categories (= 4 content pillars)

These render as filter chips at the top of the blog feed (Instagram-style horizontal scroll).

| Slug | EN label | KR label | Color token | Icon |
|---|---|---|---|---|
| `playbooks` | Playbooks | 플레이북 | `--accent-violet` | ⚡ |
| `marketing-ai` | Marketing AI | 마케팅 AI | `--accent-pink` | 🎯 |
| `tools` | Tools & Stacks | 툴 & 스택 | `--accent-cyan` | 🧩 |
| `governance` | Governance | 거버넌스 | `--accent-amber` | 🛡 |

**Rule:** every post belongs to exactly **one** category (single-select). Multi-tagging is handled via tags, not categories.

---

## 2. Tag Taxonomy

Tags are free-form but governed by an allowlist. Authors propose new tags via the editorial sheet; the content lead approves before publishing.

### Function tags
`#email` `#seo` `#paid-ads` `#content-ops` `#crm` `#analytics` `#lead-scoring` `#segmentation`

### Persona tags
`#for-marketers` `#for-ops` `#for-founders` `#for-enterprise`

### Format tags
`#playbook` `#deep-dive` `#comparison` `#case-study` `#checklist` `#calculator`

### Maturity tags
`#beginner` `#intermediate` `#advanced`

**Display rule on the feed:** show max 2 tags per card on mobile (function tag + format tag preferred). Full tag list lives on the post detail page.

---

## 3. URL Structure

```
/blog                              → feed (all categories)
/blog/[category-slug]              → category feed
/blog/[category-slug]/[post-slug]  → post detail
/tags/[tag-slug]                   → tag page (canonical: noindex if < 3 posts)
/authors/[author-slug]             → author hub
```

**Locale handling:**
```
/en/blog/...   (default, no prefix in production)
/ko/blog/...   (Korean translations, hreflang paired)
```

---

## 4. SNS-style Feed UX Rules

The mobile blog feed mimics modern SNS apps (Threads / Instagram / 카카오뷰).

- **Sticky top bar:** logo (left), search icon, profile icon (right).
- **Story rail:** horizontal scroll of "spotlight" posts directly under top bar (max 8).
- **Category chips:** sticky below story rail, single-select filter.
- **Feed cards (vertical scroll):**
  - Author avatar (gradient border for new posts < 7 days)
  - Author name + relative time ("2일 전" / "2d ago")
  - Hero image (16:9 on mobile, 4:5 option for vertical hero)
  - Title (2 lines max, ellipsis)
  - 2-line excerpt
  - Action row: 👁 reads · 💬 comments · 🔖 save · ↗ share
  - Tag chips (max 2)
- **Bottom navigation (sticky):** Home · Explore · Search · Saved · Profile.
- **Pull-to-refresh** on the feed.
- **Infinite scroll** with skeleton loaders; cursor-based pagination.

---

## 5. Cornerstone Post Slots (first 90 days)

Three cornerstone posts go live with the launch — one per primary commercial cluster:

| Slot | Category | Working title | Primary keyword |
|---|---|---|---|
| 1 | playbooks | "Build Your First AI Agent Workflow in 30 Minutes" | how to build ai agent workflow |
| 2 | marketing-ai | "AI Automation for Marketers in 2026: A Practitioner's Field Guide" | ai automation for marketers |
| 3 | tools | "5 High-ROI AI Workflows Marketing Teams Are Shipping This Quarter" | high roi ai workflows |

Each cornerstone post receives:
- A "Spotlight" slot in the story rail for 30 days
- Pinned position at the top of its category feed
- Korean translation paired via `hreflang`

---

## 6. Editorial Workflow (OpenClaw-ready)

```
1. Brief approved (Notion → editorial sheet)
2. Draft written in Markdown/MDX with frontmatter
3. Frontmatter validated (required fields below)
4. PR opened against `content/blog/` directory
5. Preview deployment auto-built
6. SEO checklist + LCP image check
7. Merge → OpenClaw API publishes + revalidates the cluster pages
```

### Required frontmatter

```yaml
---
title: "..."                       # ≤ 60 chars
description: "..."                 # 140–155 chars
slug: "kebab-case-slug"
category: "playbooks"              # one of: playbooks | marketing-ai | tools | governance
tags: ["#email", "#playbook"]      # max 5
locale: "en"                       # en | ko
translations:
  ko: "/ko/blog/.../..."           # if translation exists
author: "eunice"
publishedAt: "2026-04-27"
updatedAt: "2026-04-27"
heroImage: "/images/blog/.../hero.jpg"
heroAlt: "..."
readingTime: 6                     # minutes, integer
featured: false
spotlight: false                   # surface in story rail
---
```
