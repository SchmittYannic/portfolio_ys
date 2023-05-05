import { html5Logo, css3Logo, javascriptLogo, reactLogo, pythonLogo, typescriptLogo, germany, uk } from "../assets";

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
        heroSubText2: ". Mit den neuesten Technologien werde ich ihre Designs zum Leben erwecken.",
        
        aboutHead: "Über mich",
        educationHead: "Bildung",
        noDegree: "ohne Abschluss",
        gpa: "Notenschnitt: ",
        thesis: "Thesis: ",
        focus: "Schwerpunkte: ",

        skillsHead: "Kenntnisse",
        itHead: "IT",
        languageHead: "Sprachen",
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
        heroSubText2: ". Using the latest technologies, I will bring your designs to life.",

        aboutHead: "About me",
        educationHead: "Education",
        noDegree: "no degree",
        gpa: "GPA: ",
        thesis: "Thesis: ",
        focus: "Focus: ",

        skillsHead: "Skills",
        itHead: "IT",
        languageHead: "Languages",
    }
}

export type ColorOptionType = {
    id: string,
    name_de: string,
    name_en: string,
}

const colorOption: ColorOptionType[] = [
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

export type educationType = {
    name: string,
    start: string,
    end: string,
    type: string,
    location: string,
    grade: number | "noDegree",
    thesis?: string,
    focus?: string
}

const education_de: educationType[] = [
    {
        name: "Master Wirtschaftsinformatik",
        start: "10/2018",
        end: "07/2022",
        type: "Uni - Master",
        location: "Julius-Maximilians-Universität Würzburg",
        grade: 2.7,
        thesis: "Edge Intelligence: Entwicklung eines Entscheidungsframeworks",
        focus: "E-Business und Business Analytics"
    },
    {
        name: "Bachelor Wirtschaftsinformatik",
        start: "10/2014",
        end: "08/2018",
        type: "Uni - Bachelor",
        location: "Julius-Maximilians-Universität Würzburg",
        grade: 2.3,
        thesis: "Analyse der Einsatzmöglichkeiten von Prototyping"
    },
    {
        name: "Bachelor Informatik",
        start: "10/2013",
        end: "07/2014",
        type: "Uni - Bachelor",
        location: "Julius-Maximilians-Universität Würzburg",
        grade: "noDegree"
    },
    {
        name: "Allgemeine Hochschulreife",
        start: "09/2004",
        end: "07/2013",
        type: "Gymnasium",
        location: "Armin-Knab-Gymnasium, Kitzingen",
        grade: 2.9
    }
];

const education_en: educationType[] = [
    {
        name: "Master Information Systems",
        start: "10/2018",
        end: "07/2022",
        type: "Uni - Master",
        location: "Julius-Maximilians-Universität Würzburg",
        grade: 2.7,
        thesis: "Edge Intelligence: Development of a decision framework",
        focus: "E-Business and Business Analytics"
    },
    {
        name: "Bachelor Information Systems",
        start: "10/2014",
        end: "08/2018",
        type: "Uni - Bachelor",
        location: "Julius-Maximilians-Universität Würzburg",
        grade: 2.3,
        thesis: "Analysis of use of prototyping"
    },
    {
        name: "Bachelor Computer Science",
        start: "10/2013",
        end: "07/2014",
        type: "Uni - Bachelor",
        location: "Julius-Maximilians-Universität Würzburg",
        grade: "noDegree"
    },
    {
        name: "General Higher Qualification for University Entrance",
        start: "09/2004",
        end: "07/2013",
        type: "Gymnasium",
        location: "Armin-Knab-Gymnasium, Kitzingen",
        grade: 2.9
    }
];

const skillsIT = [
    {
        name: "HTML5",
        logo: html5Logo,
    },
    {
        name: "CSS3",
        logo: css3Logo,
    },
    {
        name: "Javascript",
        logo: javascriptLogo,
    },
    {
        name: "React",
        logo: reactLogo,
    },
    {
        name: "Python",
        logo: pythonLogo,
    },
    {
        name: "Typescript",
        logo: typescriptLogo,
    },
];

const skillsLanguage = [
    {
        name_de: "Deutsch",
        name_en: "German",
        logo: germany,
    },
    {
        name_de: "Englisch",
        name_en: "English",
        logo: uk,
    },
];

export {
    navLinks,
    TextContent,
    colorOption,
    education_de,
    education_en,
    skillsIT,
    skillsLanguage,
}