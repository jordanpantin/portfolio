# AGENTS.md

## Commands
- `npm run dev`: Starts dev server at `localhost:4321`
- `npm run build`: Builds to `./dist/`
- `npm run preview`: Previews build locally
- `npm run astro check`: Type-checks the project

## Environment
- Requires `.env` with `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` secrets for Telegram contact notifications

## Deployment
- Docker build: `docker build -t jordanpantin/portfolio:[v] .` then tag and push as per README

## Design
- Follow `DESIGN.md` for visual and content guidelines
- Light/dark themes supported via DaisyUI