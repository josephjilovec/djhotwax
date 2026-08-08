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

Optional email environment variables: `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`.
