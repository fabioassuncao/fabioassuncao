# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal website for Fabio Assuncao. Built with Nuxt 4 and deployed to Cloudflare Pages.

## Tech Stack

- **Framework:** Nuxt 4 (Vue 3, Vue Router)
- **Deployment:** Cloudflare Pages via Wrangler
- **Server Engine:** Nitro with `cloudflare-pages` preset
- **Dev Module:** `nitro-cloudflare-dev` for local Cloudflare bindings access

## Commands

- `npm run dev` - Start dev server (http://localhost:3000)
- `npm run build` - Build for production
- `npm run preview` - Build + preview with Wrangler Pages dev server
- `npm run deploy` - Build + deploy to Cloudflare Pages
- `npm run cf-typegen` - Generate Cloudflare worker types

## Architecture

- `app/` - Nuxt app directory (components, pages, layouts, composables go here per Nuxt 4 convention)
- `nuxt.config.ts` - Nuxt configuration; Nitro preset set to `cloudflare-pages` with `nodeCompat` enabled
- `wrangler.jsonc` - Wrangler config; build output at `./dist`; `nodejs_compat` flag enabled
- `env.d.ts` - Type augmentation for Cloudflare bindings (`cf`, `cloudflare.env`, `cloudflare.context`) on H3 event context
- `worker-configuration.d.ts` - Auto-generated Cloudflare worker types (via `npm run cf-typegen`)

## Cloudflare Bindings

Access Cloudflare bindings in server routes via `event.context.cloudflare.env`. Types are defined in `env.d.ts` and `worker-configuration.d.ts`.
