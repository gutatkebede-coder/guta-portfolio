# GTKA Intelligence Portfolio

A responsive, seven-page portfolio for Guta Teshome Kebede, an Artificial Intelligence Engineering student at Shaggar Institute of Technology in Ethiopia. The site uses React, TypeScript, React Router, Vite, and custom CSS.

## Routes

Each destination is a distinct route with shared navigation and footer:

- Home (`/`)
- About (`/about`)
- Projects (`/projects`)
- Skills (`/skills`)
- Research (`/research`)
- Journey (`/journey`)
- Contact (`/contact`)

Journey also includes community and leadership work. Direct route visits and refreshes use the Vite SPA fallback locally and Vercel rewrites in deployment.

## Run locally

Install Node.js (LTS), then from the project directory run:

```sh
npm install
npm run dev
```

Vite prints the local development URL. The production bundle can be created with:

```sh
npm run build
npm run serve
```

Run static checks with:

```sh
npm run typecheck
npm run lint
```

## Update portfolio content

- Update verified identity, biography, and academic facts in `src/data/profile.ts`.
- Edit portfolio entries in `src/data/projects.ts`, `src/data/skills.ts`, `src/data/research.ts`, `src/data/journey.ts`, and `src/data/community.ts`.
- Configure available contact and social links in `src/data/social-links.ts`. Leave unknown addresses empty rather than publishing guessed contact details.
- The Projects page supports search and category filters. Research projects, publications, preprints, and notes can be added to `researchEntries`; certificates can be added to `certificates`.
- Edit the section components in `src/components/` to adjust narrative copy or layout.
- Shared colors, spacing, responsive rules, and focus styles live in `src/styles/globals.css`.
- Update site-wide title, description, and social preview metadata in `index.html`.

Only add project technologies, repositories, demos, or completion claims when they can be verified. Projects with limited implementation details are intentionally labeled as exploration or team experience.

## Contact form delivery

The contact form does not report success unless the configured service confirms the submission. To enable message delivery:

1. Create a form with Formspree and obtain its HTTPS endpoint.
2. Copy `.env.example` to `.env.local`.
3. Set `VITE_CONTACT_FORM_ENDPOINT` to the real endpoint, for example `https://formspree.io/f/your-form-id`.
4. Restart the development server or rebuild the site.

Without a real endpoint the form explains that delivery is not configured. Do not commit `.env.local`.

## Build and deployment

The output of `npm run build` is written to `dist/`. `vercel.json` configures the Vite output and rewrites direct route requests to the SPA entry point. The local development and preview servers bind to `127.0.0.1`. Add a canonical URL only after a real production domain has been selected.

The Vite project is prepared for Vercel, but no production deployment has been created or verified. Connect the intended GitHub repository to Vercel, use `npm run build` as the build command and `dist` as the output directory, and configure `VITE_CONTACT_FORM_ENDPOINT` in the Vercel project settings if contact-form delivery is enabled. `vercel.json` provides the SPA rewrite for direct visits to the portfolio routes.

## Contact verification

The GitHub username supplied for this portfolio is `gutatkebede-coder`; the profile link is configured in `src/data/social-links.ts`.

## GitHub repository

The intended repository is `https://github.com/gutatkebede-coder/guta-teshome-portfolio`. Publishing requires GitHub authentication and confirmation that the remote history is compatible; do not force-push over existing commits.
