const TextContent = {
    german: {
        settings: "Einstellungen",
        darkmode: "Dunkelmodus",
        language: "Sprache",
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
        navigation: "Navigation",
        contact: "Contact",
        heroHeadText: "Hi, I am ",
        heroSubText1: "aspiring web developer with focus on the ",
        heroSubText2: ". Using the latest technologies, I will bring your designs to life."
    }
}

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
    TextContent
}