/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "abt-pattern":
          "linear-gradient(45deg, #000000c9, #ffffffc7), url('/sug.jpeg')",
      },
      fontFamily: {
        jose: ["Josefin Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
