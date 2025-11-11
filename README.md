# Portoflio

Mon portfolio construit avec le framework Astro, stylisé via Tailwind CSS et les composants DaisyUI.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Publication

Publication sur docker.

```sh
docker build -t jordanpantin/portfolio:[v] .
docker tag jordanpantin/portfolio:[v] jordanpantin/portfolio:latest
docker push jordanpantin/portfolio:[v]
docker push jordanpantin/portfolio:latest
```

## Contact

Le formulaire du contact du portfolio effectue une notification, via l'API Telegram. Les messages envoyés depuis le site sont transmis à un bot Telegram, qui relaie les notifications directement dans l'application Telegram.
