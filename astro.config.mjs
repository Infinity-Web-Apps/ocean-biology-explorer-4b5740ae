import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://ocean-biology-explorer.onrender.com',
  integrations: [],
  vite: {
    plugins: [tailwindcss()],
  },
});
