import { defineConfig, loadEnv, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

/** Emits robots.txt and sitemap.xml for the configured site URL. */
function seoFiles(siteUrl: string): Plugin {
  return {
    name: 'seo-files',
    apply: 'build',
    generateBundle() {
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
      });
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${siteUrl}/</loc></url>\n</urlset>\n`,
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', 'VITE_');
  const siteUrl = (env.VITE_SITE_URL || 'https://iamofgeha.github.io').replace(/\/$/, '');

  return {
    // Relative base so the same build works at a domain root (Vercel) or a sub-path (GitHub Pages).
    base: './',
    plugins: [react(), seoFiles(siteUrl)],
    build: { target: 'es2020', cssCodeSplit: false },
  };
});
