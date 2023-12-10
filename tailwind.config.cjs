/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

// Putting it all together, ./src/**/*.{js,ts,jsx,tsx} means "include all JavaScript, TypeScript, JSX, and TSX files in the src directory and its subdirectories."
