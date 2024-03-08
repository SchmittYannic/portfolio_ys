/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{ts,tsx}"],
    mode: "jit",
    theme: {
        extend: {
            colors: {
                base: {
                    900: "#ffffff",
                    800: "#e6e6e6",
                    700: "#cccccc",
                    600: "#b3b3b3",
                    500: "#999999",
                    400: "#808080",
                    300: "#666666",
                    200: "#4c4c4c",
                    100: "#333333",
                    50: "#191919",
                    0: "#000000",
                },
                baseSecondary: "#e8e8e8", // delete once fully unused
                baseTertiary: "#f0f0f0", // delete once fully unused
                textPrimary: "#000000",
                actionBlue: {
                    900: "#1d9bf0",
                    800: "#34a5f2",
                    700: "#4aaff3",
                    600: "#61b9f5",
                    500: "#77c3f6",
                    400: "#8ecdf8",
                    300: "#a5d7f9",
                    200: "#bbe1fb",
                    100: "#d2ebfc",
                },
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
                actionGreen: {
                    900: "#00ba7c",
                    800: "#1ac189",
                    700: "#33c896",
                    600: "#4dcfa3",
                    500: "#66d6b0",
                    400: "#80ddbe",
                    300: "#99e3cb",
                    200: "#b3ead8",
                    100: "#ccf1e5",
                },
                actionPurple: {
                    900: "#7856ff",
                    800: "#8667ff",
                    700: "#9378ff",
                    600: "#a189ff",
                    500: "#ae9aff",
                    400: "#bcabff",
                    300: "#c9bbff",
                    200: "#d7ccff",
                    100: "#e4ddff",
                },
                actionMagenta: {
                    900: "#f91880",
                    800: "#fa2f8d",
                    700: "#fa4699",
                    600: "#fb5da6",
                    500: "#fb74b3",
                    400: "#fc8cc0",
                    300: "#fda3cc",
                    200: "#fdbad9",
                    100: "#fed1e6",
                },
                actionYellow: {
                    900: "#ffd400",
                    800: "#ffd81a",
                    700: "#ffdd33",
                    600: "#ffe14d",
                    500: "#ffe566",
                    400: "#ffea80",
                    300: "#ffee99",
                    200: "#fff2b3",
                    100: "#fff6cc",
                },
                whiteChocolate: "rgb(232, 231, 213)",
                darkBase: {
                    900: "#15202b",
                    800: "#2c3640",
                    700: "#444d55",
                    600: "#5b636b",
                    500: "#737980",
                    400: "#8a9095",
                    300: "#a1a6aa",
                    200: "#b9bcbf",
                    100: "#d0d2d5",
                    50: "#e8e9ea",
                    0: "#ffffff",
                },
                darkBaseSecondary: "#38444d", // delete once fully unused
                darkBaseTertiary: "#060a0d", // delete once fully unused
                darkTextPrimary: "#fff",
            },
            screens: {
                xs: "450px",
                "2xs": "320px",
                "3xl": "1728px",
                "4xl": "1920px",
            },
            transitionTimingFunction: {
                "button": "cubic-bezier(0.785, 0.135, 0.15, 0.86)",
            },
            transitionDuration: {
                "1500": "1500ms",
            },
        },
    },
    variants: {
        extend: {
            backgroundColor: ["disabled"],
        },
    },
    plugins: [],
    safelist: [
        {pattern: /(bg|text|border|stroke|fill|ring)-action(Blue|Green|Purple|Magenta|Yellow|Orange)-(900|800|700|600|500|400|300|200|100)/},
        "before:bg-actionBlue-900",
        "before:bg-actionGreen-900",
        "before:bg-actionPurple-900",
        "before:bg-actionMagenta-900",
        "before:bg-actionYellow-900",
        "before:bg-actionOrange-900",
        "pt-[70px]", // number needs to be the same as navbarHeight in constants file
    ],
    darkMode: "class",
}

