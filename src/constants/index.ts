import { html5Logo, css3Logo, javascriptLogo, reactLogo, pythonLogo, typescriptLogo, germany, uk, placeholderProject, DataVisualizerImg } from "../assets";

const navbarHeight = 70;
const menuWidth = 180;

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

        projectsHead: "Projekte",
        expandButton: "Weiterlesen...",
        collapseButton: "Schließen",
        livelinktitle: "Live-Demo ansehen",
        githubtitle: "Code auf GitHub anzeigen",

        nameLabel: "Ihr Name",
        emailLabel: "Ihre E-Mail-Adresse",
        messageLabel: "Nachricht",
        sendButton: "Senden",
        successMessage: "Nachricht erfolgreich versendet.",
        failureMessage: "Etwas ist schief gelaufen.",
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

        projectsHead: "Projects",
        expandButton: "Read more",
        collapseButton: "Close",
        livelinktitle: "View Live Demo",
        githubtitle: "View Code on GitHub",

        nameLabel: "Your Name",
        emailLabel: "Your Email",
        messageLabel: "Message",
        sendButton: "Send",
        successMessage: "Message sent successfully.",
        failureMessage: "Something went wrong.",
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
        id: "projects",
        //logoLight: htmlTagBlack,
        //logoDark: htmlTagWhite,
        title_en: "Projects",
        title_de: "Projekte"
    },
    {
        id: "about",
        //logoLight: aboutBlack,
        //logoDark: aboutWhite,
        title_en: "About",
        title_de: "Über mich",
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

const tags = ["React", "Typescript", "Tailwind", "SCSS", "Flask", "D3"] as const;
export type TagKeyType = typeof tags[number];

type TagType = {
    textColor: string,
    backgroundColor: string,
}

type TagDataType = {
    [key in TagKeyType as key]: TagType
}

const tagData: TagDataType = {
    React: {
        textColor: "",
        backgroundColor: "bg-sky-400",
    },
    Typescript: {
        textColor: "text-white",
        backgroundColor: "bg-blue-700",
    },
    Tailwind: {
        textColor: "text-cyan-500",
        backgroundColor: "bg-gray-300",
    },
    SCSS: {
        textColor: "text-white",
        backgroundColor: "bg-pink-500",
    },
    Flask: {
        textColor: "text-black",
        backgroundColor: "bg-white",
    },
    D3: {
        textColor: "text-white",
        backgroundColor: "bg-orange-500",
    }
}

export type ProjectType = {
    title_de: string,
    title_en: string,
    image: string,
    description_de: string[],
    description_en: string[],
    tags: TagKeyType[],
    githubLink: string,
    liveLink?: string,
}

const projects: ProjectType[] = [
    {
        title_de: "DataVisualizer",
        title_en: "DataVisualizer",
        image: DataVisualizerImg,
        description_de: ["DataVisualizer ist ein Tool, das die Erstellung von Diagrammen ermöglicht. Ein Nutzer kann Daten in Form einer CSV-Datei hochgeladen und ein Diagramm aus einer großen Auswahl an Diagrammtypen auswählen.", "DataVisualizer unterstützt die Erstellung von Boxplots, Säulen-, Kreis-, Streu-, Linien- und Flächendiagrammen. Eine einfache Anpassung der Dimensionen, Farbgestaltung und Textinhalte der Diagramme anhand individueller Bedürfnisse ist gegeben.", "Das Projekt nutzt React im Frontend, Flask als Backend und D3 für die Erstellung der Diagramme"],
        description_en: ["DataVisualizer is a tool that allows the creation of charts. A user can upload data in the form of a CSV file and select a chart from a wide range of chart types.", "DataVisualizer supports the creation of boxplots, bar, pie, scatter, line and area charts.The dimensions, coloring and text content of the charts can be easily adjusted based on individual needs.", "The project uses React on the frontend, Flask on the backend and D3 for creating the diagrams"],
        tags: ["React", "Flask", "D3"],
        githubLink: "https://github.com/SchmittYannic/DataVisualizer",
        liveLink: "https://data-visualizer-live.vercel.app/",
    },
    {
        title_de: "Elden Ring Buildplanner",
        title_en: "Elden Ring Buildplanner",
        image: placeholderProject,
        description_de: ["No more than lipsum and some Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lo"],
        description_en: ["No more than lipsum and some Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lo"],
        tags: ["React", "Typescript", "SCSS"],
        githubLink: "https://www.google.com",
        liveLink: "https://www.google.com",
    },
    {
        title_de: "Mein Portfolio",
        title_en: "My Portfolio",
        image: placeholderProject,
        description_de: ["Meine persönliche Portfolio Webseite, auf der ich meine Projekte und meine Person präsentiere. Ein Besucher kann Informationen über meinen Werdegange, Bildungsgrad und meine technischen Fähigkeiten erhalten sowie mit mir direkt in Kontakt treten."],
        description_en: ["My personal portfolio website, where I present my projects and myself. A visitor can get information about my career, educational level and technical skills as well as contact me directly."],
        tags: ["React", "Typescript", "Tailwind"],
        githubLink: "https://github.com/SchmittYannic/portfolio_ys",
    },
]

export {
    navLinks,
    TextContent,
    colorOption,
    education_de,
    education_en,
    skillsIT,
    skillsLanguage,
    projects,
    tagData,

    navbarHeight,
    menuWidth
}