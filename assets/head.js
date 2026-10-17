// Loaded in <head>, right after the Tailwind CDN script.
document.documentElement.classList.add('js');

tailwind.config = {
  theme: {
    extend: {
      colors: {
        ivory: { 50: '#fdfcf9', 100: '#f8f5ee', 200: '#efe9dc' },
        navy: { 950: '#0d1235', 900: '#141a45', 800: '#1a2257', 700: '#232c65', 600: '#2f3a80' },
        gold: { 300: '#e9cf8a', 400: '#e0b75a', 500: '#c9992f', 600: '#a67c1f', 700: '#86621a' },
        ink: { DEFAULT: '#3b4157', soft: '#4a5068', muted: '#6b7086' }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif']
      }
    }
  }
};
