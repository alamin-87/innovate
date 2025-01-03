/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
     // =========== container
     container: {
      center: true,
      padding: {
        DEFAULT: '35px',
        sm: '2rem',
        lg: '6rem',
        xl: '6rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
}