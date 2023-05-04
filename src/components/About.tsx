import { useContext, useRef } from "react"
import { motion, useScroll, MotionValue } from "framer-motion"

import { TextContent, education_de, educationType, education_en, skillsIT, skillsLanguage } from "../constants"
import { SettingsContext } from "../context/SettingsProvider"

type fillColorType = `fill-${string}`

const CalendarIcon = ({classes, fillColor="fill-[#000000]"}: {classes: string, fillColor: fillColorType}) => {
    return (
        <svg className={`${classes}`} width="800px" height="800px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"> 
            <defs></defs>
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g className={`${fillColor}`} id="Dribbble-Light-Preview" transform="translate(-300.000000, -2799.000000)">
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                        <path d="M262,2656 C262,2656.552 261.552,2657 261,2657 L247,2657 C246.448,2657 246,2656.552 246,2656 L246,2646 C246,2645.448 246.448,2645 247,2645 L261,2645 C261.552,2645 262,2645.448 262,2646 L262,2656 Z M262,2641 L262,2640 C262,2639.448 261.552,2639 261,2639 C260.448,2639 260,2639.448 260,2640 L260,2641 L255,2641 L255,2640 C255,2639.448 254.552,2639 254,2639 C253.448,2639 253,2639.448 253,2640 L253,2641 L248,2641 L248,2640 C248,2639.448 247.552,2639 247,2639 C246.448,2639 246,2639.448 246,2640 L246,2641 C244.895,2641 244,2641.895 244,2643 L244,2657 C244,2658.104 244.895,2659 246,2659 L262,2659 C263.105,2659 264,2658.104 264,2657 L264,2643 C264,2641.895 263.105,2641 262,2641 L262,2641 Z" id="calendar-[#1196]">

                        </path>
                    </g>
                </g>
            </g>
        </svg>
    )
}

const LiIcon = ({ progress }: { progress: MotionValue<number>}) => {
    const { color } = useContext(SettingsContext);
    const strokeColorClass900 = `stroke-action${color}-900`;
    const fillColorClass900 = `fill-action${color}-900`

    return (
        <figure className={`absolute -left-7 ${strokeColorClass900}`}>
            <svg className="-rotate-90" width="75" height="75" viewBox="0 0 100 100">
                <circle cx="75" cy="50" r="20" className="dark:stroke-base stroke-darkBase stroke-[4px] fill-none" />
                <motion.circle 
                    cx="75" cy="50" r="20" className="stroke-[5px] dark:fill-darkBase fill-base"
                    style={{
                        pathLength : progress
                    }}
                />
                <circle cx="75" cy="50" r="10" className={`animate-pulse stroke-1 ${fillColorClass900}`} />
            </svg>
        </figure>
    )
}

const TimelineEntry = ({ entry }: { entry: educationType }) => {
    const { lang, theme } = useContext(SettingsContext);
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["center end", "center center"]
        }
    );

    return (
        <li ref={ref}>
            <LiIcon progress={scrollYProgress} />

            <motion.div
                className="mb-6"
                initial={{y:50}}
                whileInView={{y:0}}
                transition={{duration:0.5, type:"spring"}}
            >
                <h4 className="dark:text-darkTextPrimary text-textPrimary text-xl mb-1">
                    {entry.name}
                </h4>
                <span className="flex items-center text-sm dark:text-darkTextPrimary/60 text-textPrimary/60">
                    <CalendarIcon classes={"w-3 h-3 mr-1"} fillColor={theme === "dark" ? "fill-darkTextPrimary/60" : "fill-textPrimary/60"} />
                    {entry.start} - {entry.end}
                </span>
                <p className="mb-2 text-sm dark:text-darkTextPrimary text-textPrimary">
                    {entry.location}
                </p>
                <ul className="ml-4 list-disc list-outside dark:text-darkTextPrimary text-textPrimary">
                    <li>
                        {entry.grade === "noDegree" 
                            ? lang === "de" ? TextContent.german.noDegree : TextContent.english.noDegree 
                            : lang === "de" ? TextContent.german.gpa + entry.grade : TextContent.english.gpa + entry.grade
                        }
                    </li>
                    {entry.thesis &&
                        <li>
                            {lang === "de" ? TextContent.german.thesis : TextContent.english.thesis}{entry.thesis}
                        </li>
                    }
                    {entry.focus &&
                        <li>
                            {lang === "de" ? TextContent.german.focus : TextContent.english.focus}{entry.focus}
                        </li>
                    }
                </ul>
            </motion.div>
        </li>
    )
}

const EducationSubSection = () => {
    const { lang, color } = useContext(SettingsContext);
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    );
    const bgColorClass900 = `bg-action${color}-900`;
    const education = lang === "de" ? education_de : education_en;

    return (
        <>
            <h3 className="mb-12 text-4xl text-center dark:text-darkTextPrimary text-textPrimary">
                {lang === "de" ? TextContent.german.educationHead : TextContent.english.educationHead}
            </h3>

            <div ref={ref} className="relative w-full">
                <motion.div
                    className={`absolute top-0 left-2 w-[4px] h-full origin-top ${bgColorClass900}`}
                    style={{scaleY: scrollYProgress}}
                />

                <ul className="ml-12 flex flex-col items-start">
                    {education.map(entry => (
                        <TimelineEntry key={entry.name} entry={entry} />
                    ))}
                </ul>
            </div>
        </>
    )
}

const SkillsSubSection = () => {
    const { lang, color } = useContext(SettingsContext);
    const bgColorClass900 = `bg-action${color}-900`;

    return (
        <>
            <h3 className="mb-12 text-4xl text-center dark:text-darkTextPrimary text-textPrimary">
                {lang === "de" ? TextContent.german.skillsHead : TextContent.english.skillsHead}
            </h3>

            <h4 className="skillSubHeader w-full flex items-center text-3xl dark:text-darkTextPrimary text-textPrimary">
                {lang === "de" ? TextContent.german.itHead : TextContent.english.itHead}
                <div className={`ml-2 w-full h-1 ${bgColorClass900}`}/>
            </h4>

            <div className="mb-14 flex justify-center flex-wrap">
                {skillsIT.map(skill => (
                    <div
                        key={skill.name}
                        className="p-[10px] m-[5px] flex flex-col justify-center items-center"
                    >
                        <label className="text-center dark:text-darkTextPrimary text-textPrimary">
                            <p className="py-3">{skill.name}</p>
                            <img 
                                src={skill.logo} 
                                alt={skill.name} 
                                className="w-[100px] h-[100px]" 
                            />
                        </label>
                    </div>
                ))}
            </div>

            <h4 className="skillSubHeader w-full flex items-center text-3xl dark:text-darkTextPrimary text-textPrimary">
                {lang === "de" ? TextContent.german.languageHead : TextContent.english.languageHead}
                <div className={`ml-2 w-full h-1 ${bgColorClass900}`}/>
            </h4>

            <div className="flex justify-center flex-wrap">
                {skillsLanguage.map(language => (
                    <div
                        key={language.name_en}
                        className="p-[10px] m-[5px] flex flex-col justify-center items-center"
                    >
                        <label className="text-center dark:text-darkTextPrimary text-textPrimary">
                            <p className="py-3">{lang === "de" ? language.name_de : language.name_en}</p>
                            <img 
                                src={language.logo} 
                                alt={`${language.name_en}-icon`} 
                                className="w-[100px] h-[100px]"
                            />
                        </label>
                    </div>
                ))}
            </div>
        </>
    )
}

const About = () => {
    const { lang } = useContext(SettingsContext);

    return (
        <section id="about" className="w-full mb-32">
            <h2 className="mb-16 text-5xl text-center dark:text-darkTextPrimary text-textPrimary">
                {lang === "de" ? TextContent.german.aboutHead : TextContent.english.aboutHead}
            </h2>

            <div className="lg:px-20 grid lg:grid-cols-[1fr_1fr] grid-cols-1">
                <div className="max-w-[700px] lg:pl-0 pl-10 pr-10 mb-16 lg:w-full sm:w-[60%] w-full mx-auto">
                    <EducationSubSection />
                </div>

                <div className="max-w-[700px] lg:pr-0 pr-10 pl-10 lg:w-full w-[60%] mx-auto">
                    <SkillsSubSection />
                </div>
            </div>
        </section>
    )
}

export default About