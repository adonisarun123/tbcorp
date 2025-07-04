/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        card: 'var(--card-bg)',
        text: 'var(--text)',
        accent: 'var(--accent)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  safelist: ['collapse-section', 'number-highlight'],
}; 