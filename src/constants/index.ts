import {
    html5Logo,
    css3Logo,
    javascriptLogo,
    typescriptLogo,
    germany,
    uk,
    hairdresserApp,
    hairdresserAppimg,
    datavisualizerAppimg,
    datavisualizerApp,
    eldenplannerAppimg,
    eldenplannerApp,
    portfolioAppimg
} from "../assets";

const navbarHeight = 72; // when changing also change safelist in tailwind.config -> pt-[${navbarHeight}px]
const menuWidth = 180;
const liIconCircleRadius = 40;

export type LocalizedTextContentType = {
    settings: string,
    darkmode: string,
    language: string,
    colorscheme: string,
    navigation: string,

    contact: string,
    heroHeadText: string,
    heroSubText1: string,
    heroSubText2: string,
    jobTitle: string,

    aboutHead: string,
    aboutSub: string,
    educationHead: string,
    noDegree: string,
    gpa: string,
    thesis: string,
    focus: string,

    skillsHead: string,
    itHead: string,
    languageHead: string,

    projectsHead: string,
    projectsSub: string,
    expandButton: string,
    collapseButton: string,
    livelinktitle: string,
    githubtitle: string,
    descriptionHead: string,

    contactHead: string,
    contactSub: string,
    nameLabel: string,
    namePlaceholder: string,
    emailLabel: string,
    emailPlaceholder: string,
    messageLabel: string,
    messagePlaceholder: string,
    passwordLabel: string,
    sendButton: string,
    contactSuccessMessage: string,
    contactFailureMessage: string,
}

const languages = ["german", "english"] as const

type LanguageType = typeof languages[number];

const TextContent: Record<LanguageType, LocalizedTextContentType> = {
    german: {
        settings: "Einstellungen",
        darkmode: "Dunkelmodus",
        language: "Sprache",
        colorscheme: "Farbschema",
        navigation: "Navigation",

        contact: "Kontakt",
        heroHeadText: "Ich entwickle effiziente und benutzerfreundliche Frontends und setze meine Kenntnisse im Backend-Bereich gezielt ein, um reibungslose und leistungsstarke Webanwendungen zu schaffen.",
        heroSubText1: "Junior Webentwickler mit Fokus auf dem ",
        heroSubText2: ". Mit den neuesten Technologien werde ich ihre Designs zum Leben erwecken.",
        jobTitle: "Webentwickler",

        aboutHead: "Über mich",
        aboutSub: "Erfahre mehr über meinen Bildungsweg und meine Fachkenntnisse",
        educationHead: "Bildung",
        noDegree: "ohne Abschluss",
        gpa: "Notenschnitt: ",
        thesis: "Thesis: ",
        focus: "Schwerpunkte: ",

        skillsHead: "Kenntnisse",
        itHead: "IT",
        languageHead: "Sprachen",

        projectsHead: "Projekte",
        projectsSub: "Schauen Sie sich einige meiner letzten Projekte an.",
        expandButton: "Weiterlesen...",
        collapseButton: "Schließen",
        livelinktitle: "Live-Demo ansehen",
        githubtitle: "Code auf GitHub anzeigen",
        descriptionHead: "Beschreibung",

        contactHead: "Kontakt",
        contactSub: "Bei Fragen können Sie sich jederzeit an mich wenden.",
        nameLabel: "Name",
        namePlaceholder: "Ihr Name",
        emailLabel: "Email",
        emailPlaceholder: "Ihre E-Mail-Adresse",
        messageLabel: "Nachricht",
        messagePlaceholder: "Ihre Nachricht",
        passwordLabel: "Passwort",
        sendButton: "Senden",
        contactSuccessMessage: "Nachricht erfolgreich versendet",
        contactFailureMessage: "Etwas ist schiefgelaufen. Alternativ können Sie mir auch jederzeit eine Email senden: ",
    },
    english: {
        settings: "Settings",
        darkmode: "Darkmode",
        language: "Language",
        colorscheme: "Colorscheme",
        navigation: "Navigation",

        contact: "Contact",
        heroHeadText: "I develop efficient and user-friendly frontends and apply my knowledge of backend technologies to create smooth and high-performance web applications.",
        heroSubText1: "junior web developer with a focus on the ",
        heroSubText2: ". Using the latest technologies, I will bring your designs to life.",
        jobTitle: "Web Developer",

        aboutHead: "About me",
        aboutSub: "Find out more about my educational background and my expertise",
        educationHead: "Education",
        noDegree: "no degree",
        gpa: "GPA: ",
        thesis: "Thesis: ",
        focus: "Focus: ",

        skillsHead: "Skills",
        itHead: "IT",
        languageHead: "Languages",

        projectsHead: "Projects",
        projectsSub: "Check out some of my recent projects.",
        expandButton: "Read more",
        collapseButton: "Close",
        livelinktitle: "View Live Demo",
        githubtitle: "View Code on GitHub",
        descriptionHead: "Description",

        contactHead: "Get in Touch",
        contactSub: "Feel free to reach out to me for any inquiries.",
        nameLabel: "Name",
        namePlaceholder: "Your name",
        emailLabel: "Email",
        emailPlaceholder: "Your email",
        messageLabel: "Message",
        messagePlaceholder: "Your message",
        passwordLabel: "Password",
        sendButton: "Send",
        contactSuccessMessage: "Message sent successfully",
        contactFailureMessage: "Something went wrong. Alternatively, you can always send me an email: ",
    }
};

export type LocalizedTooltipTextContentType = {
    languageToggle: string,
    burgerMenu: string,
    closeMenu: string,
}

const TooltipTextContent: Record<LanguageType, LocalizedTooltipTextContentType> = {
    german: {
        languageToggle: "Sprache wechseln",
        burgerMenu: "Navigation öffnen",
        closeMenu: "Navigation schließen",
    },
    english: {
        languageToggle: "Switch languages",
        burgerMenu: "Open Navigation",
        closeMenu: "Close Navigation",
    }
};

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

export type NavLinkType = {
    id: string,
    title_en: string,
    title_de: string,
}

const navLinks: NavLinkType[] = [
    {
        id: "projects",
        //logoLight: htmlTagBlack,
        //logoDark: htmlTagWhite,
        title_en: "Projects",
        title_de: "Projekte",
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
        title_de: "Kontakt",
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

export type SkillsType = {
    id: string,
    name_en: string,
    name_de: string,
    logo: string,
    description_en: string,
    description_de: string,
};

const skillsIT: SkillsType[] = [
    {
        id: "html5",
        name_en: "HTML5",
        name_de: "HTML5",
        logo: html5Logo,
        description_en: "The markup language defining the structure of web pages, facilitating content presentation and interaction.",
        description_de: "Die Auszeichnungssprache, die die Struktur von Webseiten definiert und die Präsentation und Interaktion von Inhalten ermöglicht.",
    },
    {
        id: "css3",
        name_en: "CSS3",
        name_de: "CSS3",
        logo: css3Logo,
        description_en: "The style sheet language enhancing the visual presentation of HTML elements across web pages",
        description_de: "Die Stylesheet-Sprache zur Verbesserung der visuellen Präsentation von HTML-Elementen auf Webseiten.",
    },
    {
        id: "javascript",
        name_en: "Javascript",
        name_de: "Javascript",
        logo: javascriptLogo,
        description_en: "A programming language enabling dynamic behavior and interactivity within web pages",
        description_de: "Die Programmiersprache, die dynamisches Verhalten und Interaktivität innerhalb von Webseiten ermöglicht.",
    },
    {
        id: "typescript",
        name_en: "Typescript",
        name_de: "Typescript",
        logo: typescriptLogo,
        description_en: "A superset of JavaScript adding static typing, enhancing code quality and scalability in large-scale applications.",
        description_de: "Eine Erweiterung von JavaScript, die statische Typisierung hinzufügt und die Codequalität und Skalierbarkeit in großen Anwendungen verbessert.",
    },
    {
        id: "react",
        name_en: "React",
        name_de: "React",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        description_en: "A JavaScript library for building user interfaces, offering efficient rendering and component-based architecture.",
        description_de: "Eine JavaScript-Bibliothek zum Erstellen von Benutzeroberflächen, die effiziente Renderung und eine komponentenbasierte Architektur bietet.",
    },
    {
        id: "nodejs",
        name_en: "Node.js",
        name_de: "Node.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
        description_en: "A JavaScript runtime environment allowing server-side execution of JavaScript code, facilitating scalable and efficient backend development.",
        description_de: "Eine JavaScript-Laufzeitumgebung, die die serverseitige Ausführung von JavaScript-Code ermöglicht und die skalierbare und effiziente Backend-Entwicklung erleichtert.",
    },
    {
        id: "redux",
        name_en: "Redux",
        name_de: "Redux",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
        description_en: "A predictable state container for JavaScript applications, providing a centralized store for managing application state.",
        description_de: "Ein vorhersehbarer Zustandscontainer für JavaScript-Anwendungen, der einen zentralen Speicher für die Verwaltung des Anwendungszustands bereitstellt.",
    },
    {
        id: "tailwind",
        name_en: "Tailwind",
        name_de: "Tailwind",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        description_en: "A utility-first CSS framework that streamlines web development by providing a set of pre-defined utility classes for styling HTML elements.",
        description_de: "Ein Utility-First-CSS-Framework, das die Webentwicklung vereinfacht, indem es eine Reihe vordefinierter Utility-Klassen zur Gestaltung von HTML-Elementen bereitstellt.",
    },
    // {
    //     id: "d3",
    //     name_en: "D3",
    //     name_de: "D3",
    //     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/d3js/d3js-original.svg",
    //     description_en: "A JavaScript library for manipulating documents based on data, enabling dynamic and interactive data visualizations on the web.",
    //     description_de: "Eine JavaScript-Bibliothek zum Manipulieren von Dokumenten basierend auf Daten, die dynamische und interaktive Datenvisualisierungen im Web ermöglicht.",
    // },
    // {
    //     id: "framermotion",
    //     name_en: "Framer Motion",
    //     name_de: "Framer Motion",
    //     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg",
    //     description_en: "A React library for creating fluid animations and gestures, enhancing user experience in web applications.",
    //     description_de: "Eine React-Bibliothek zum Erstellen flüssiger Animationen und Gesten, die die Benutzererfahrung in Webanwendungen verbessert.",
    // },
    // {
    //     id: "express",
    //     name_en: "Express",
    //     name_de: "Express",
    //     logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    //     description_en: "A minimalist web application framework for Node.js, providing a robust set of features for building web applications and APIs.",
    //     description_de: "Ein minimalistisches Webanwendungs-Framework für Node.js, das einen robusten Satz von Funktionen zum Erstellen von Webanwendungen und APIs bereitstellt.",
    // },
];

const skillsLanguage: SkillsType[] = [
    {
        id: "german",
        name_en: "German",
        name_de: "Deutsch",
        logo: germany,
        description_en: "German",
        description_de: "Deutsch",
    },
    {
        id: "english",
        name_en: "English",
        name_de: "Englisch",
        logo: uk,
        description_en: "English",
        description_de: "Englisch",
    },
];

const tags = ["React", "Typescript", "Tailwind", "SCSS", "Flask", "D3", "Framermotion", "Node", "Mongodb", "Express", "Redux"] as const;
export type TagKeyType = typeof tags[number];

type TagType = {
    name: string,
    textColor: string,
    backgroundColor: string,
    link: string,
}

type TagDataType = {
    [key in TagKeyType as key]: TagType
}

const tagData: TagDataType = {
    React: {
        name: "React",
        textColor: "",
        backgroundColor: "bg-sky-400",
        link: "https://react.dev/",
    },
    Typescript: {
        name: "Typescript",
        textColor: "text-white",
        backgroundColor: "bg-blue-700",
        link: "https://www.typescriptlang.org/",
    },
    Tailwind: {
        name: "Tailwind",
        textColor: "text-cyan-500",
        backgroundColor: "bg-gray-300",
        link: "https://tailwindcss.com/",
    },
    SCSS: {
        name: "SCSS",
        textColor: "text-white",
        backgroundColor: "bg-pink-500",
        link: "https://sass-lang.com/",
    },
    Flask: {
        name: "Flask",
        textColor: "text-black",
        backgroundColor: "bg-white",
        link: "https://flask.palletsprojects.com/",
    },
    D3: {
        name: "D3",
        textColor: "text-white",
        backgroundColor: "bg-orange-500",
        link: "https://d3js.org/",
    },
    Framermotion: {
        name: "Framer Motion",
        textColor: "dark:text-black text-white",
        backgroundColor: "dark:bg-white bg-black",
        link: "https://www.framer.com/motion/",
    },
    Node: {
        name: "Node js",
        textColor: "text-white",
        backgroundColor: "bg-green-600",
        link: "https://nodejs.org/",
    },
    Mongodb: {
        name: "MongoDB",
        textColor: "text-green-600",
        backgroundColor: "bg-whiteChocolate",
        link: "https://www.mongodb.com/",
    },
    Express: {
        name: "Express",
        textColor: "dark:text-black text-white",
        backgroundColor: "dark:bg-white bg-black",
        link: "https://expressjs.com/",
    },
    Redux: {
        name: "Redux Toolkit",
        textColor: "text-white",
        backgroundColor: "bg-purple-600",
        link: "https://redux-toolkit.js.org/",
    },
}

export type ProjectType = {
    title_de: string,
    title_en: string,
    image: string,
    webm: string,
    mode: string,
    description_de: string[],
    description_en: string[],
    tags: TagKeyType[],
    githubLink: string,
    liveLink?: string,
    demoaccname?: string,
    demoaccpw?: string,
}

const projects: ProjectType[] = [
    {
        title_de: "Terminbuchungsapp",
        title_en: "Appointment booking app",
        image: hairdresserAppimg,
        webm: hairdresserApp,
        mode: "light",
        demoaccname: "customer1@demo.com",
        demoaccpw: "Demo#1",
        description_de: [
            "Das Projekt besteht aus einer klassischen Webpräsenz für einen fiktiven Friseursalon sowie einer separaten Terminbuchungsapplikation. Die Anwendung ermöglicht es Nutzern, Termine zu buchen, sich über Dienstleistungen zu informieren und Kontakt mit dem Salon aufzunehmen.",
            "Die Applikation bietet alle wesentlichen Funktionen zur Authentifizierung, darunter die Erstellung eines Benutzerkontos, Anmeldung, Bearbeitung von Nutzerdaten, E-Mail-Verifikation und Passwortzurücksetzung. Die Authentifizierung erfolgt sitzungsbasiert.",
            "Ein zentrales Dashboard ermöglicht Nutzern die Verwaltung ihrer Termine. Sie können sowohl bevorstehende als auch vergangene Buchungen einsehen. Der Buchungsprozess selbst ist in drei Schritte unterteilt:",
            "- Auswahl der gewünschten Dienstleistung",
            "- Auswahl des passenden Termins",
            "- Bestätigung der Buchung",
            "Bei der Dienstleistungsauswahl können Nutzer zwischen verschiedenen Friseurservices wie Haareschneiden oder Haarfärbung wählen, die sich in ihrer Dauer unterscheiden. Zudem kann ein bevorzugter Salonmitarbeiter für die Durchführung der Dienstleistung ausgewählt werden – dabei werden nur Mitarbeiter angezeigt, die für die gewählte Leistung qualifiziert sind.",
            "Die Terminwahl erfolgt über einen Kalender, in dem bereits ausgebuchte Tage sowie Tage, an denen der Salon geschlossen ist, nicht auswählbar sind. Nach der Auswahl eines Tages werden alle verfügbaren Zeitfenster angezeigt. Zusätzlich besteht die Möglichkeit, die verfügbaren Zeiten mithilfe eines Reglers nach bestimmten Zeiträumen zu filtern.",
            "Im letzten Schritt erhält der Nutzer eine Buchungsübersicht, in der alle gewählten Optionen nochmals überprüft werden können, bevor die Buchung final bestätigt wird.",
            "Die gesamte Anwendung ist vollständig responsiv und bietet eine intuitive, benutzerfreundliche Oberfläche. Das Design der Webseite basiert auf der Corporate Identity eines lokalen Friseursalons.",
        ],
        description_en: [
            "The project consists of a classic web presence for a fictional hair salon as well as a separate appointment booking application. The application allows users to book appointments, access information about services, and contact the salon.",
            "The application includes all essential authentication features, such as account creation, login, user data management, email verification, and password reset. Authentication is session-based.",
            "A central dashboard enables users to manage their appointments, allowing them to view both upcoming and past bookings. The booking process itself is divided into three steps:",
            "- Selection of the desired service",
            "- Selection of the preferred appointment time",
            "- Confirmation of the booking",
            "When selecting a service, users can choose from various hair salon offerings such as haircuts or hair coloring, each differing in duration. Additionally, users can select a preferred stylist for their service. Only employees qualified for the chosen service are displayed.",
            "Appointment selection is done via a calendar, where fully booked days as well as days when the salon is closed are not available for selection. After choosing a day, all available time slots for that date are displayed. Users can also refine their selection by filtering available times using a slider.",
            "In the final step, users receive a booking summary where they can review their selected options before confirming the appointment.",
            "The entire application is fully responsive and provides an intuitive, user-friendly interface. The website design is based on the corporate identity of a local hair salon.",
        ],
        tags: ["React", "Typescript", "SCSS", "Node", "Express", "Mongodb"],
        githubLink: "https://github.com/SchmittYannic/hairdresser",
        liveLink: "https://hairdresser.project-domain.de",
    },
    {
        title_de: "DataVisualizer",
        title_en: "DataVisualizer",
        image: datavisualizerAppimg,
        webm: datavisualizerApp,
        mode: "light",
        description_de: [
            "DataVisualizer ist ein Tool zur Erstellung von Diagrammen. Nutzer können eine CSV-Datei hochladen und aus einer Vielzahl an Diagrammtypen wählen, um ihre Daten visuell darzustellen.",
            "DataVisualizer unterstützt die Erstellung von Boxplots, Säulen-, Kreis-, Streu-, Linien- und Flächendiagrammen. Zudem ermöglicht es eine einfache Anpassung der Diagrammgröße, Farbgestaltung und Textinhalte, sodass Visualisierungen individuell konfiguriert werden können.",
            "Der Prozess der Diagrammerstellung ist in drei Schritte unterteilt:",
            "- Daten hochladen",
            "- Datenansicht",
            "- Diagramm erstellen",
            "Im ersten Schritt können Nutzer eine CSV-Datei hochladen oder einen der bereitgestellten Demo-Datensätze verwenden. Es wird empfohlen, die Daten vor dem Hochladen zu bereinigen, um eine optimale Darstellung der Visualisierung sicherzustellen.",
            "Die Datenansicht präsentiert den hochgeladenen Datensatz in einer interaktiven Tabelle. Dadurch kann der Nutzer überprüfen, ob die Daten korrekt eingelesen und analysiert wurden. Die Tabelle basiert auf TanStack Table, wodurch Funktionen wie Paginierung, Sortierung, Filterung und Bearbeitung integriert sind.",
            "Im letzten Schritt wird mithilfe von D3.js das gewünschte Diagramm erstellt. Über ein Konfigurationsmenü lassen sich Diagrammtyp, Titel, Achsenbeschriftungen sowie Farben und Größen der Elemente individuell anpassen.",
            "Das fertige Diagramm kann als SVG-Datei heruntergeladen werden. Alternativ besteht die Möglichkeit, sowohl das SVG als auch ein Skript-Tag in die Zwischenablage zu kopieren. Durch das Einfügen beider Elemente in eine HTML-Datei bleibt die Interaktivität des Diagramms erhalten.",
        ],
        description_en: [
            "DataVisualizer is a tool for creating charts and graphs. Users can upload a CSV file and choose from a variety of chart types to visualize their data effectively.",
            "DataVisualizer supports the creation of box plots, bar charts, pie charts, scatter plots, line charts, and area charts. It also allows for easy customization of chart dimensions, colors, and text elements, enabling tailored visualizations.",
            "The chart creation process is divided into three steps:",
            "- Upload data",
            "- View data",
            "- Generate chart",
            "In the first step, users can upload a CSV file or test the tool using one of the provided demo datasets. It is recommended to clean the data before uploading to ensure an optimal visualization experience.",
            "The data view displays the uploaded dataset in an interactive table, allowing users to verify that their data has been correctly imported and analyzed. The table is built using TanStack Table, which provides features such as pagination, sorting, filtering, and editing.",
            "In the final step, the selected chart is generated using D3.js. A configuration menu allows users to customize the chart type, title, axis labels, and element properties such as color and size.",
            "The completed chart can be downloaded as an SVG file. Alternatively, users can copy both the SVG and a script tag to the clipboard. By inserting both elements into an HTML file, the chart's interactivity remains intact.",
        ],
        tags: ["React", "Typescript", "D3"],
        githubLink: "https://github.com/SchmittYannic/DataVisualizer",
        liveLink: "https://datavisualizer.project-domain.de/",
    },
    {
        title_de: "Elden Ring Buildplaner",
        title_en: "Elden Ring Buildplanner",
        image: eldenplannerAppimg,
        webm: eldenplannerApp,
        mode: "dark",
        demoaccname: "customer1@demo.com",
        demoaccpw: "Demo#1",
        description_de: [
            "Eldenplanner ist ein begleitendes Tool für das Action-Rollenspiel Elden Ring. Es ermöglicht Spielern, individuelle Charakter-Builds zu erstellen, zu speichern und mit anderen zu teilen, um ihre Spielweise gezielt zu optimieren.",
            "Das Herzstück der Anwendung ist der Charakterplaner – ein interaktives Tool, mit dem Spieler ihre Charakterwerte und Ausrüstung strategisch planen können. Basierend auf der aktuellen Spielversion berechnet die Anwendung essenzielle Statistiken wie Lebenspunkte, Ausdauer, Angriffskraft und Verteidigung. Dies ermöglicht es den Spielern, ihre Builds zu optimieren, ohne wertvolle In-Game-Ressourcen zu verbrauchen. Der Charakterplaner ist auch ohne Account vollständig nutzbar.",
            "Im Community Builds-Bereich können Spieler die erstellten Builds anderer Nutzer einsehen. Dank Filter-, Sortier- und Suchfunktionen lassen sich Builds gezielt nach bestimmten Kriterien finden und als Inspiration nutzen. Auch diese Funktion steht ohne Anmeldung zur Verfügung.",
            "Um eigene Builds zu speichern und zu teilen, können Nutzer einen Account erstellen. Ein Account bietet zusätzliche Funktionen wie:",
            "- Kommentieren von Builds und Nutzerprofilen",
            "- Interaktion mit Kommentaren durch Likes, Dislikes oder Antworten",
            "- Favorisieren von Builds für schnellen Zugriff",
            "- Verwaltung eigener und favorisierter Builds über das Nutzerprofil",
            "Die Anwendung ist vollständig responsiv und bietet eine intuitive, benutzerfreundliche Oberfläche.",
            "#4 Technische Umsetzung:",
            "Eldenplanner setzt auf moderne Web-Technologien, um eine performante und reibungslose Nutzererfahrung zu gewährleisten:",
            "- Redux Toolkit für effizientes State-Management",
            "- Optimistische Updates, um Interaktionen mit Kommentarfunktionen flüssig darzustellen",
            "- React Hook Form mit Yup (Frontend) und Joi (Backend) zur Validierung von Nutzereingaben",
            "- TanStack Table für eine performante Tabellenansicht in der Community Builds-Sektion",
            "- Tokenbasierte Authentifizierung für eine sichere Anmeldung und Autorisierung",
        ],
        description_en: [
            "Eldenplanner is a companion tool for the action RPG Elden Ring. It allows players to create, save, and share custom character builds to optimize their gameplay experience.",
            "The core of the application is the Character Planner – an interactive tool that enables players to strategically plan their character stats and equipment. Based on the latest game version, the application calculates key statistics such as health points, stamina, attack power, and defense. This enables players to optimize their builds without consuming valuable in-game resources. The Character Planner is fully accessible without an account.",
            "The Community Builds section allows players to explore builds created by other users. With filtering, sorting, and search functions, users can find builds based on specific criteria and use them as inspiration for their own. This feature is also available without registration.",
            "To save and share custom builds, users can create an account. An account provides additional features such as:",
            "- Commenting on builds and user profiles",
            "- Interacting with comments through likes, dislikes, or replies",
            "- Favoriting builds for quick access",
            "- Managing own and favorited builds via the user profile",
            "The application is fully responsive and provides an intuitive, user-friendly interface.",
            "#4 Technical Implementation:",
            "Eldenplanner leverages modern web technologies to ensure a smooth and high-performance user experience:",
            "- Redux Toolkit for efficient state management",
            "- Optimistic updates for seamless interaction with comment features",
            "- React Hook Form with Yup (frontend) and Joi (backend) for user input validation",
            "- TanStack Table for a fast and flexible table view in the Community Builds section",
            "- Token-based authentication for secure login and authorization",
        ],
        tags: ["React", "Typescript", "SCSS", "Node", "Express", "Mongodb", "Redux"],
        githubLink: "https://github.com/SchmittYannic/Eldenplanner",
        liveLink: "https://eldenplanner.project-domain.de/",
    },
    {
        title_de: "Mein Portfolio",
        title_en: "My Portfolio",
        image: portfolioAppimg,
        webm: hairdresserApp,
        mode: "dark",
        description_de: ["Meine persönliche Portfolio Webseite, auf der ich meine Projekte und meine Person präsentiere. Ein Besucher kann Informationen über meinen Werdegange, Bildungsgrad und meine technischen Fähigkeiten erhalten sowie mit mir direkt in Kontakt treten."],
        description_en: ["My personal portfolio website, where I present my projects and myself. A visitor can get information about my career, educational level and technical skills as well as contact me directly."],
        tags: ["React", "Typescript", "Tailwind", "Framermotion"],
        githubLink: "https://github.com/SchmittYannic/portfolio_ys",
    },
]

export {
    navLinks,
    TextContent,
    TooltipTextContent,
    colorOption,
    education_de,
    education_en,
    skillsIT,
    skillsLanguage,
    projects,
    tagData,

    navbarHeight,
    menuWidth,
    liIconCircleRadius,
}