/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#16a34a',
          dark: '#15803d',
          light: '#22c55e'
        },
        background: '#f8fafc',
        surface: '#ffffff',
        'surface-alt': '#f1f5f9',
        border: '#e2e8f0',
        'text-primary': '#1e293b',
        'text-secondary': '#64748b'
      },
      fontFamily: {
        sans: ['Spline Sans', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}
