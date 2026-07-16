# Mathzlet

[View the GitHub Pages site](https://future-designer-2026.github.io/team-2-at-home-math-learning/)

Mathzlet is Team 2’s bilingual mathematics-learning project for children aged 5–6. The current website documents a working digital prototype, its research basis, early qualitative feedback, design intentions, market context, and future plans. It does not claim formally validated learning outcomes.

## Team

- Babullee — programming, project organization, and research
- Jameson — design, interview support, information collection, and presentation planning
- Xu-Cindy — design, research, survey review, and progress recording

## Website contents

The single-page site covers the project overview and motivation, team, users and website audiences, research summary and full essay, research-to-design implications, prototype testing lessons, educational goals, qualitative market comparison, future plans, acknowledgements, and verified references.

English and Simplified Chinese content is stored locally. The language control uses the browser language only as an initial suggestion, saves the visitor’s preference in `localStorage`, and updates the document language.

## Technology and local setup

The site uses React, TypeScript, Vite, Tailwind CSS, and Lucide icons. It requires no account, backend, analytics, or API key.

```bash
npm install
npm run dev
npm run lint
npx tsc --noEmit
npm run build
```

## Editing content

Core bilingual project, team, essay, reference, and market content is in `src/data/content.ts`. Interface structure is in `src/App.tsx`; the editorial visual system is in `src/styles.css`. Add both English and Simplified Chinese text for important visible content and keep claims cautious.

Academic references are verified against source pages. Product pages support only public feature observations and must not be presented as proof of educational effectiveness. Record an access date for new market sources and avoid unverified prices, availability, ratings, or market statistics.

## Privacy and prototype confidentiality

The public site does not expose complete gameplay flow, session duration, private prototype media, detailed card categories, mission mechanics, or unreleased challenge structures. Do not add or infer those details.

## Accessibility

The site includes semantic landmarks, a skip link, visible keyboard focus, an accessible responsive menu, an accessible language control, reduced-motion support, readable long-form typography, descriptive external links, and responsive layouts down to 320px.

## Deployment

GitHub Pages deployment is preserved in `.github/workflows/deploy-pages.yml`. The workflow builds `dist`; Vite’s relative base path keeps assets compatible with the repository subpath. Pushes to `main` deploy after review and merge.

## Future direction

Plans include continued prototype refinement, more structured child testing, additional parent and teacher feedback, a downloadable app, exploration of Google Play publication, multiplayer support, a physical card-game version, improved accessibility, and broader international support. No timeline is claimed.
