/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "herobg":"url('https://images.unsplash.com/photo-1441986300917-64674bd600d8')"
      }
    },
  },
  plugins: [],
}