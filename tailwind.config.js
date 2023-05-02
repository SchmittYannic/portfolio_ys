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
                action: "#fe5b02",
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

