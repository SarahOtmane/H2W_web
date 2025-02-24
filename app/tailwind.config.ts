/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          black: "#000",
          white: "#fff",
          lilas: "#B6A7FC",
          orange: "#FF9B3E",
          "gray-background": "#F6F6F6",
          "gray-border": "#DBDEEF",
          "gray-dark": "#C9C9C9",
        },
      },
    },
    plugins: [],
};
  