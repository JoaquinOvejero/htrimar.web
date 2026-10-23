// Option B — loaded in <head>, right after the Tailwind CDN script.
document.documentElement.classList.add('js');

tailwind.config = {
  theme: {
    extend: {
      colors: {
        navy: { 950: '#0a0f2c', 900: '#10174a', 800: '#161f5c', 700: '#232c65', 600: '#323d84' },
        steel: { 50: '#f6f7f9', 100: '#eef0f4', 200: '#e2e6ec', 300: '#cfd5de', 400: '#9aa3b2' },
        amber: { 300: '#ffd36e', 400: '#ffc23d', 500: '#f2a900', 600: '#c98a00', 700: '#8f6200' },
        ink: { DEFAULT: '#10174a', 2: '#3c4560', 3: '#5f6779' }
      },
      fontFamily: {
        display: ['Archivo', 'system-ui', 'sans-serif'],
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace']
      }
    }
  }
};
