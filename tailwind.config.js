/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    gap: {
      '1rem': '1rem',
      '2rem': '2rem',
      '3rem': '3rem',
      '4rem': '4rem',
      '5rem': '5rem',
    },
    fontSize: {
      sm: '0.875rem',
      base: '1rem',
      lg: '1.25rem',
      xl: '2rem',
      '2xl': '2.25rem',
      '3xl': '2.5rem',
      '4xl': '2.75rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    borderRadius: {
      none: '0',
      sm: '0.125rem',
      DEFAULT: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      '4xl': '2rem',
      full: '9999px',
    },
  },
  plugins: [],
}
