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
        sm: '3rem',
        lg: '3rem',
        xl: '3rem',
        '2xl': '3rem',
      },
    },
  },
  plugins: [],
}