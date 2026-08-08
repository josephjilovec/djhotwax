# DJ Hotwax — Next.js / Vercel

A multi-page artist site rebuilt from the original single-file DJ Hotwax website.

## Routes
- `/` — interactive record-room homepage
- `/music` — catalog and release explorer
- `/worlds` — four sonic/visual worlds
- `/licensing` — placements, licensing and collaboration
- `/about` — artist identity
- `/api/contact` — optional server-side email route

## Local
```bash
npm install
npm run dev
```

## Vercel
Import `josephjilovec/djhotwax` and leave Vercel settings at defaults:
- Framework: Next.js
- Root: `./`
- Build: default
- Output: default (do not use `dist`)


## Form delivery

DJ Hotwax forms submit directly through FormSubmit AJAX to `realjjemail@gmail.com`. No API key or Vercel environment variable is required.

