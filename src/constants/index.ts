const TextContent = {
    german: {
        settings: "Einstellungen",
        darkmode: "Dunkelmodus",
        language: "Sprache",
        colorscheme: "Farbschema",
        navigation: "Navigation",
        contact: "Kontakt",
        heroHeadText: "Hi, Ich bin ",
        heroSubText1: "angehender Webentwickler mit Fokus auf dem ",
        heroSubText2: ". Mit den neuesten Technologien werde ich ihre Designs zum Leben erwecken."
    },
    english: {
        settings: "Settings",
        darkmode: "Darkmode",
        language: "Language",
        colorscheme: "Colorscheme",
        navigation: "Navigation",
        contact: "Contact",
        heroHeadText: "Hi, I am ",
        heroSubText1: "aspiring web developer with focus on the ",
        heroSubText2: ". Using the latest technologies, I will bring your designs to life."
    }
}

const colorOption = [
    {
        id: "blue",
        name_de: "Blau",
        name_en: "Blue",
    },
    {
        id: "orange",
        name_de: "Orange",
        name_en: "Orange",
    },
    {
        id: "green",
        name_de: "Grün",
        name_en: "Green",
    },
    {
        id: "purple",
        name_de: "Lila",
        name_en: "Purple",
    },
    {
        id: "magenta",
        name_de: "Magenta",
        name_en: "Magenta",
    },
    {
        id: "yellow",
        name_de: "Gelb",
        name_en: "Yellow",
    },
]

const navLinks = [
    {
        id: "about",
        //logoLight: aboutBlack,
        //logoDark: aboutWhite,
        title_en: "About",
        title_de: "Über mich",
    },
    {
        id: "projects",
        //logoLight: htmlTagBlack,
        //logoDark: htmlTagWhite,
        title_en: "Projects",
        title_de: "Projekte"
    },
    {
        id: "contact",
        //logoLight: emailBlack,
        //logoDark: emailWhite,
        title_en: "Contact",
        title_de: "Kontakt"
    },
];

export {
    navLinks,
    TextContent,
    colorOption
}