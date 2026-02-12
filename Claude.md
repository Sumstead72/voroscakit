# VoroscakIT Website

## Project Overview

A modern, dark-themed website for VoroscakIT LLC — an IT consulting and services company run by Robert Voroscak. The site targets individuals and small businesses needing IT support, cybersecurity, cloud infrastructure, and workflow automation.

**Live domain:** https://www.voroscakit.com/  
**Design mockup:** See `mockup.html` in the project root for the approved visual direction.

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Fonts:** JetBrains Mono (mono/display), Outfit (body) — via `next/font/google`
- **Deployment:** Vercel
- **Language:** TypeScript

## MCP Tools (Claude Code Plugins)

The following MCP servers are available and should be used throughout development:

### context7
- **Purpose:** Fetch up-to-date documentation for any library or framework
- **When to use:** Before implementing anything with Next.js, Tailwind, or any dependency — resolve docs with Context7 first instead of relying on training data. Especially important for Next.js App Router APIs, Tailwind v4 changes, and any unfamiliar package APIs.

### github
- **Purpose:** Repository management, commits, PRs, issues
- **When to use:** Initialize the repo, create branches, commit work, open PRs. The project repo should be created on GitHub and connected to Vercel for automatic deployments.

### vercel
- **Purpose:** Project management, deployments, domain configuration, environment variables
- **When to use:** Create the Vercel project, link the GitHub repo, trigger deployments, configure the `voroscakit.com` domain, and set environment variables when email integration is added.

### playwright
- **Purpose:** End-to-end browser testing
- **When to use:** After the site is built, write and run E2E tests to verify:
  - All 4 pages render correctly
  - Navigation between pages works
  - Contact form validation and submission flow
  - Responsive layout at mobile (768px) and desktop breakpoints
  - Visual elements load (grid bg, hero glow, card hover effects)

### claude-code-setup
- **Purpose:** Project initialization and configuration best practices
- **When to use:** At the start — use it to ensure the project is scaffolded with proper TypeScript config, linting rules, and directory structure.

### code-review
- **Purpose:** Automated code review and quality checks
- **When to use:** After completing each page or major component, run a code review pass to catch issues with accessibility, performance, type safety, and adherence to Next.js best practices.

### code-simplifier
- **Purpose:** Reduce complexity and improve readability
- **When to use:** After the initial build is complete, run through components to simplify any overly complex logic, reduce prop drilling, and clean up verbose Tailwind class strings where `@apply` or component abstraction would help.

### frontend-design
- **Purpose:** Design quality assessment and improvement
- **When to use:** After building the UI, use this to evaluate design fidelity against the mockup, check visual consistency, and suggest improvements to spacing, typography, color usage, and animations.

## Design System

### Color Palette (Tailwind CSS custom theme)

```
bg-primary:     #0a0e17   (main background)
bg-secondary:   #111827   (alternate sections)
bg-card:        #151d2e   (card backgrounds)
bg-card-hover:  #1a2440   (card hover state)
accent:         #00e5ff   (cyan — primary accent)
accent-dim:     rgba(0, 229, 255, 0.15)  (subtle accent backgrounds)
accent-glow:    rgba(0, 229, 255, 0.3)   (glow/shadow effects)
text-primary:   #e8ecf4   (headings, body text)
text-secondary: #8892a8   (descriptions, secondary copy)
text-muted:     #5a6478   (labels, fine print)
border:         rgba(255, 255, 255, 0.06) (card/section borders)
border-accent:  rgba(0, 229, 255, 0.2)   (hover borders, accent lines)
```

### Typography

- **Logo:** JetBrains Mono, bold. "Voroscak" in `text-primary`, "IT" in `accent` with `text-shadow: 0 0 20px accent-glow`
- **Section labels:** JetBrains Mono, 0.75rem, uppercase, letter-spacing 3px, accent color, preceded by a 30px horizontal line
- **Section titles:** Outfit, 2.8rem, font-weight 700, line-height 1.15, letter-spacing -1px. Key words in accent color.
- **Body text:** Outfit, ~1rem–1.15rem, text-secondary, line-height 1.7
- **Buttons:** Outfit, 0.9rem, font-weight 600, uppercase, letter-spacing 0.5px

### Visual Effects

- **Grid background:** Fixed full-screen overlay with subtle cyan grid lines (60px spacing, 0.03 opacity)
- **Hero glow:** Radial gradient (cyan, 0.08 opacity), centered, with a slow 6s pulse animation
- **Card hover:** Background shifts to `bg-card-hover`, border becomes `border-accent`, translateY(-4px), top 2px accent gradient line fades in
- **Buttons (primary):** Solid cyan bg, dark text. On hover: glow shadow + translateY(-2px)
- **Buttons (secondary):** Transparent with subtle border. On hover: border and text become accent
- **Animations:** fadeUp on hero elements (staggered 0.2s delays), smooth transitions on all interactive elements

### Responsive Breakpoints

- Desktop: default (3-column service grids, 2-column layouts)
- Mobile (≤768px): single column, reduced padding, hamburger nav

## Pages & Routes

### 1. Home (`/`)

**Sections in order:**
1. **Hero** — Tagline: "Technology that works for you." Subtext about practical IT support. Two CTAs: "Get Started" (primary) → /contact, "Our Services" (secondary) → /services
2. **Services Preview** — Label: "What We Do". 3-column grid of 6 service cards (icon, title, short description). Links to /services
3. **Why VoroscakIT** — 2-column layout. Left: copy about the personal, no-jargon approach. Right: 2x2 stat grid (10+ Years Experience, 50+ Clients Served, 99% Uptime Guarantee, 24/7 Availability). Stats use JetBrains Mono, large cyan numbers.
4. **CTA Banner** — "Ready to simplify your tech?" with accent button → /contact

### 2. About (`/about`)

**Sections:**
1. **Header** — Label: "About". Title: "The person behind the solutions."
2. **Bio Layout** — 2-column: photo placeholder (280×340px bordered box with offset accent border) + bio text
3. **Bio Content** — Name: Robert Voroscak, Role: "Founder & IT Consultant" (JetBrains Mono, accent). 3 paragraphs about experience, philosophy, approach. All placeholder — owner will update.
4. **Expertise Tags** — Flex-wrap row of tags: Network Architecture, Cybersecurity, Cloud / AWS / Azure, Automation, IT Strategy, Systems Admin. Styled as small bordered pills (JetBrains Mono, uppercase, 0.7rem)

### 3. Services (`/services`)

**Sections:**
1. **Header** — Label: "Services". Title: "What I can do for your business."
2. **Services Grid** — 3-column grid, 6 cards. Each card has: icon, title, description paragraph, and a bullet list (4 items) using `›` as the marker in accent color.

**Placeholder Services:**
- IT Strategy & Consulting (technology audits, roadmap development, vendor selection, budget optimization)
- Cybersecurity Solutions (security assessments, firewall & endpoint protection, employee training, incident response)
- Cloud Infrastructure (migration & setup, AWS/Azure/GCP, cost optimization, hybrid cloud)
- Network Management (design & deployment, Wi-Fi optimization, VPN & remote access, monitoring)
- Workflow Automation (process analysis, integration & API setup, custom scripts & bots, reporting automation)
- Tech Support & Troubleshooting (remote & on-site support, hardware/software setup, maintenance, performance tuning)

### 4. Contact (`/contact`)

**Sections:**
1. **Header** — Label: "Contact". Title: "Let's work together."
2. **2-column layout:**
   - **Left:** Contact info items (each with uppercase JetBrains Mono label in accent + value):
     - Email: robert@voroscakit.com
     - Phone: 267-540-3247
     - Based In: Pennsylvania, USA
     - Availability: Mon – Fri, 9am – 6pm EST
   - **Right:** Contact form with fields: Name, Email (side by side), Phone, Message (textarea), Submit button (full width primary)

**Form handling:** Next.js API route at `/api/contact` — accepts POST, validates fields, returns success/error JSON. For now, just log the submission. Can wire up Resend/SendGrid later.

## Project Structure

```
voroscakit/
├── CLAUDE.md
├── mockup.html
├── public/
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout (fonts, metadata, nav, footer, grid bg)
│   │   ├── page.tsx            # Home (hero, services preview, why, CTA)
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── services/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts    # POST handler for contact form
│   │   └── globals.css         # Tailwind directives + custom CSS (grid bg, glow effects)
│   └── components/
│       ├── Navbar.tsx           # Fixed nav with logo, links, CTA button, mobile hamburger
│       ├── Footer.tsx           # Logo + copyright
│       ├── HeroSection.tsx      # Hero with glow, tagline, CTAs
│       ├── ServiceCard.tsx      # Reusable card (icon, title, description, optional bullet list)
│       ├── SectionLabel.tsx     # Reusable "// Label" with accent line
│       ├── SectionTitle.tsx     # Reusable title with accent word support
│       ├── StatBox.tsx          # Single stat (number + label)
│       └── ContactForm.tsx      # Form with client-side validation + API submission
├── tailwind.config.ts           # Extended theme with custom colors, fonts
├── next.config.ts
├── tsconfig.json
└── package.json
```

## Component Guidelines

- All components should be React Server Components by default; only add `"use client"` when needed (Navbar mobile toggle, ContactForm)
- Use Tailwind utility classes. Extend the theme in `tailwind.config.ts` for the custom color palette — do NOT use arbitrary values repeatedly.
- Import fonts via `next/font/google` in `layout.tsx` and pass as CSS variables to Tailwind
- Keep components small and composable. `ServiceCard` should accept props for both the preview (home) and full (services page) variants.
- Animations: use Tailwind's built-in animation utilities or add custom keyframes in `globals.css`. The hero staggered fadeUp is essential.
- All text content is placeholder and will be updated by the owner. Keep copy in the page components (not a CMS) for simplicity.

## Deployment

- Vercel deployment via `vercel` CLI or Git integration
- Domain: voroscakit.com (to be configured in Vercel dashboard)
- No environment variables needed initially. When email integration is added, store API keys in Vercel env vars.

## Commands

```bash
npm run dev       # Local development (http://localhost:3000)
npm run build     # Production build
npm run start     # Start production server
npm run lint      # ESLint
```