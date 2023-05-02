/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{ts,tsx}"],
    mode: "jit",
    theme: {
        extend: {
            colors: {
                base: "#fff",
                textPrimary: "#000000",
                action: "#FFA500",
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

