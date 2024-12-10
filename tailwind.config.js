/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'pulse-subtle': 'subtle-pulse 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
  safelist: [
    'bg-green-100',
    'text-green-800',
    'bg-yellow-100',
    'text-yellow-800',
    'bg-red-100',
    'text-red-800',
  ],
};