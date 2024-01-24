/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "ws": ["'Work Sans', sans-serif;"],
        "lora": ["'Lora', serif;"]
      }
    },
  },
  plugins: [],
}