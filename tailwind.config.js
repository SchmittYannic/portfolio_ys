/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{ts,tsx}"],
    mode: "jit",
    theme: {
        extend: {
            colors: {
                base: "#fff",
                baseSecondary: "#e8e8e8",
                textPrimary: "#000000",
                actionOrange: {
                    900: "#fe5b02", //using https://maketintsandshades.com/#fe5b02
                    800: "#fe6b1b",
                    700: "#fe7c35",
                    600: "#fe8c4e",
                    500: "#fe9d67",
                    400: "#ffbd9a",
                    300: "#ffceb3",
                    200: "#ffdecc",
                    100: "#ffefe6",
                },
                darkBase: "#15202b",
                darkBaseSecondary: "#38444d",
                darkTextPrimary: "#fff"
            },
            screens: {
                xs: "450px",
                "2xs": "320px",
            }
        },
    },
    plugins: [],
    darkMode: "class",
}

