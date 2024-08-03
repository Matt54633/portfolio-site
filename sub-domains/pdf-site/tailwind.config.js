/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "scout-purple": "rgb(116, 19, 220)",
                "scout-purple-hover": "rgb(95, 14, 181)",
            },
        },
    },
    plugins: [],
}
