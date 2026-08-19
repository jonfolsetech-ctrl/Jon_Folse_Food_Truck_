# Jon Folse Food Truck

Production website for Jon Folse Food Truck, serving Gonzales, Baton Rouge, New Orleans, and communities across South Louisiana.

[View the live site](https://jon-folse-food-truck.jon-folse-tech.chatgpt.site)

## Features

- Responsive Louisiana heritage design using the official brand artwork
- Menu, story, catering, schedule, service-area, gallery, and contact sections
- Search metadata and structured local-business data for South Louisiana markets
- Accessible landmarks, keyboard focus states, reduced-motion support, and mobile navigation
- Open Graph and X sharing metadata
- Automated GitHub pull-request and `main` branch checks

## Tech stack

- Next.js App Router conventions through vinext
- React 19 and TypeScript
- Tailwind CSS 4
- Cloudflare Workers-compatible output
- pnpm with a committed lockfile

## Requirements

- Node.js 22.13 or newer
- pnpm 11.19

## Local development

```bash
git clone <repository-url>
cd jon-folse-food-truck
pnpm install --frozen-lockfile
pnpm run dev
```

Open the local URL printed in the terminal.

## Quality checks

Run the same checks used by GitHub Actions:

```bash
pnpm run check
```

Individual commands are also available:

- `pnpm run lint` — code quality and accessibility rules
- `pnpm run typecheck` — TypeScript validation
- `pnpm run build` — production build
- `pnpm run test` — server-rendering checks against the latest build

## Project structure

```text
app/
  globals.css       Global brand system and responsive styles
  layout.tsx        Site-wide metadata and document layout
  page.tsx          Homepage content and structured data
public/
  jonfolsefoodtrucklogo.png  Official brand artwork
  og.png                    Social-sharing image
tests/
  rendered-html.test.mjs
worker/
  index.ts           Cloudflare-compatible entry point
.github/
  workflows/ci.yml  Automated checks
```

## Content checklist before public promotion

Search for and replace these intentionally editable placeholders:

- `Price TBD`
- `Location to be announced`
- `your-email@example.com`
- `(000) 000-0000`

Keep menus, hours, locations, dietary guidance, and event availability current.

## Deployment

The repository produces a Cloudflare Workers-compatible build through `pnpm run build`. The existing private deployment is managed by OpenAI Sites using `.openai/hosting.json`.

## Brand and legal notes

- Preserve the deep navy, antique gold, aged ivory, and restrained brick-red palette.
- Do not claim an endorsement, partnership, or licensing relationship with Chef John Folse.
- Brand artwork remains the property of its owner. No open-source license is granted for the artwork by this repository.

See [CONTRIBUTING.md](CONTRIBUTING.md) before submitting changes.
