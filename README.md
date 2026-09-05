# SSS Engineering Solutions

Next.js 15 App Router website for an industrial machinery exporter and recycled paper packaging manufacturer. Built with TypeScript, Tailwind CSS, and React 19.

## Tech Stack

- **Framework**: Next.js 15 (App Router, Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4
- **UI**: Radix UI primitives (Accordion, Dropdown, Select)
- **Fonts**: Montserrat (headings), Inter (body) via Google Fonts
- **State**: React Context (`ContentContext`) with `localStorage` persistence (`sss_engineering_content_v5`)

## Project Structure

```
src/
  app/              Next.js App Router pages
  components/
    layout/        Header, Footer
    home/          Hero, StatsSection, ProductGrid, EggTrayGrid, Logistics, ContactSection
    ui/            Card, Button, Input, Textarea (shadcn-style)
  context/         ContentContext.tsx (products, stats, egg tray data)
```

## Key Features

- **Accessible header dropdown**: WAI-ARIA `aria-expanded`, `aria-haspopup`, `role="menu"`, `Escape` key close, focus rings, mobile accordion
- **Responsive layout**: Mobile-first grids (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`); stats stack 2x2; footer collapses to single column; spec tables stack below 480px
- **Client sign-off flags**: MOQ and pallet qty values (10,000 / 15,000 / 5,000 pcs; 4,800 / 3,600 / 2,400 pcs) annotated in `ContentContext` for verification
- **Dynamic copyright**: `new Date().getFullYear()` in footer; `formatDetection` meta tags enabled (`email`, `telephone`)
- **Image optimization**: Next.js `Image` with `sizes`, descriptive `altText`, and `object-cover`

## Running Locally

```bash
npm install
npm run dev        # Turbopack dev server (port 9002)
npm run build      # Production build
npm run lint       # ESLint
npm run typecheck  # TypeScript check
```

## Design System

- **Colors**: Primary red `#C41E1E`, charcoal `#1A1A1A`, light gray `#F5F5F5`
- **Typography**: Montserrat (bold uppercase headings), Inter (body)
- **Layout**: Sharp corners (`rounded-none`), flat cards, thin borders
- **Breakpoints**: Mobile <768px, tablet 768px–1024px, desktop >1024px
