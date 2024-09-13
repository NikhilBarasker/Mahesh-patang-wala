/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#1F2937', // Dark gray for a professional look
        secondary: '#4B5563', // Medium gray for the subheading
      },
    },
  },
  plugins: [],
};
