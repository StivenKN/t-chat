/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        dark: '#121212',
      },
      backgroundColor: {
        dark: '#121212',
      }
    }
  },
  plugins: []
};
