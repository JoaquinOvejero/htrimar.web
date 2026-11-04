// Option D: Tailwind is compiled ahead of time (no script in the browser).
// Rebuild after changing classes, from the repository root:
//   npx tailwindcss@3.4.16 -c opcion-d/tailwind.config.js -i opcion-d/assets/d.src.css -o opcion-d/assets/d.min.css --minify
module.exports = {
  content: ['./opcion-d/*.html', './opcion-d/assets/*.js', './assets/site.js'],
  future: { hoverOnlyWhenSupported: true },
  theme: {
    extend: {
      colors: {
        ivory: { 50: '#fdfcf9', 100: '#f8f5ee', 200: '#efe9dc' },
        line: { DEFAULT: '#e6dfd0', strong: '#d3c8b2' },
        navy: { 950: '#0d1235', 900: '#141a45', 800: '#1a2257', 700: '#232c65', 600: '#2f3a80' },
        gold: { 300: '#e9cf8a', 400: '#e0b75a', 500: '#c9992f', 600: '#a67c1f', 700: '#86621a' },
        ink: { DEFAULT: '#3b4157', soft: '#4a5068', muted: '#5f6479' }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif']
      },
      transitionTimingFunction: { DEFAULT: 'cubic-bezier(0.23, 1, 0.32, 1)' },
      transitionDuration: { DEFAULT: '200ms' }
    }
  }
};
