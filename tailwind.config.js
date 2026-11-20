/** @type {import('tailwindcss').Config} */
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  // The theme is set on <html data-theme="…"> (see index.html and useTheme).
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        bg: token('bg'),
        surface: token('surface'),
        raised: token('raised'),
        line: token('line'),
        fg: token('fg'),
        muted: token('muted'),
        subtle: token('subtle'),
        accent: token('accent'),
        'accent-fg': token('accent-fg'),
      },
      fontFamily: {
        sans: ['Geist', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      /*
       * Type scale. Use these names instead of arbitrary sizes:
       *   display  hero headline (fluid)
       *   title    section headings (h2)
       *   heading  card and sub-section headings (h3)
       *   lead     intro paragraphs
       *   base / sm / xs  Tailwind defaults for body, secondary and meta text
       *   micro    mono chips and tags
       */
      fontSize: {
        display: ['clamp(2rem, 1.35rem + 2.6vw, 3.25rem)', { lineHeight: '1.08', letterSpacing: '-0.03em' }],
        title: ['1.5rem', { lineHeight: '1.25', letterSpacing: '-0.02em' }],
        heading: ['1.125rem', { lineHeight: '1.4', letterSpacing: '-0.01em' }],
        lead: ['1.0625rem', { lineHeight: '1.7' }],
        micro: ['0.6875rem', { lineHeight: '1' }],
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        rise: { from: { transform: 'translateY(10px)' }, to: { transform: 'none' } },
        'fade-up': { from: { opacity: '0', transform: 'translateY(8px)' }, to: { opacity: '1', transform: 'none' } },
        fade: { from: { opacity: '0' }, to: { opacity: '1' } },
      },
      animation: {
        rise: 'rise 0.6s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-up': 'fade-up 0.3s cubic-bezier(0.22, 1, 0.36, 1) both',
        fade: 'fade 0.2s ease-out both',
      },
    },
  },
  plugins: [],
};
