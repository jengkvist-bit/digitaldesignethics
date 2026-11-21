import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import rehypeBas from './src/lib/rehype-bas.mjs';
import rehypePrinciper from './src/lib/rehype-principer.mjs';

// SITE = sajtens adress. BASE används bara när sajten testas på en underadress.
export default defineConfig({
  site: process.env.SITE || 'https://www.digitaldesignethics.com',
  base: process.env.BASE || '/',
  // Samma adresser som på Squarespace: /what-is-this utan snedstreck på slutet.
  // GitHub Pages visar what-is-this.html på adressen /what-is-this.
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [sitemap({ filter: (sida) => !sida.endsWith('/home/') && !sida.endsWith('/home') })],
  markdown: { rehypePlugins: [rehypeBas, rehypePrinciper] },
  // Gamla adresser som ska leda vidare
  redirects: { '/home': (process.env.BASE || '/').replace(/\/$/, '') + '/' },
});
