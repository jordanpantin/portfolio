// @ts-check
import { defineConfig, envField } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { loadEnv } from "vite";

import node from "@astrojs/node";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'server',
  adapter: node({
    mode: "standalone",
  }),
  env: {
    schema: {
      TELEGRAM_BOT_TOKEN: envField.string({ context: 'server', access: 'secret' }),
      TELEGRAM_CHAT_ID: envField.string({ context: 'server', access: 'secret' }),
    }
  }
});