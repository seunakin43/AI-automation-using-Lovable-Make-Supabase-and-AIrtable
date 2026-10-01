# AI Automation using Lovable, Supabase and Airtable

This repository is set up as a Lovable-style starter app for an AI automation workflow that connects a frontend, Supabase, and Airtable.

## What is included

- React + Vite + TypeScript frontend
- Tailwind CSS styling
- Lovable-inspired dashboard layout
- Supabase and Airtable configuration placeholders
- Ready-to-edit starter app shell

## Quick start

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Add your Supabase and Airtable environment variables in `.env.local` based on `.env.example`.

## Environment variables

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
VITE_AIRTABLE_BASE_ID=app1234567890
VITE_AIRTABLE_API_KEY=your-airtable-key
```

## Project structure

- `src/App.tsx` – main Lovable-style dashboard
- `src/lib/supabase.ts` – Supabase client setup
- `src/lib/airtable.ts` – Airtable API helper
- `src/index.css` – styling and theme

## Notes

This is intentionally scaffolded as a clean starting point. You can customize the UX, connect real data sources, and expand the automation workflows from here.
