/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    100: "#B88E2F",
                    50: "#FFF3E3",
                },
                secondary: {
                    100: "#2EC1AC",
                },
            },
            fontFamily: {
                roboto: ["Roboto Serif", "serif"],
            }
        },
    },
    plugins: [],
};