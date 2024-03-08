import { useRef } from "react";
import { motion, MotionValue, useScroll } from "framer-motion";

import useDynamicClasses from "../hooks/useDynamicClasses"
import useSettings from "../hooks/useSettings";
import { styles } from "../styles"
import { education_de, education_en, educationType, liIconCircleRadius, skillsIT_de, skillsIT_en, skillsLanguage_de, skillsLanguage_en, SkillsType } from "../constants";

type fillColorType = `fill-${string}`;

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
};

const LiIcon = ({ progress }: { progress: MotionValue<number>}) => {
    const { color } = useSettings();
    const strokeColorClass900 = `stroke-action${color}-900`;
    const fillColorClass900 = `fill-action${color}-900`

    return (
        <figure className={`absolute left-0 ${strokeColorClass900}`}>
            <svg className="-rotate-90" width={liIconCircleRadius} height={liIconCircleRadius} viewBox="0 0 100 100">
                <circle cx="50" cy="50" r={liIconCircleRadius} className="dark:stroke-base stroke-darkBase stroke-[4px] fill-none" />
                <motion.circle 
                    cx="50" cy="50" r={liIconCircleRadius} className="stroke-[10px] dark:fill-darkBase fill-base"
                    style={{
                        pathLength : progress
                    }}
                />
                <circle cx="50" cy="50" r={liIconCircleRadius/2} className={`animate-pulse stroke-1 ${fillColorClass900}`} />
            </svg>
        </figure>
    )
};

const TimelineEntry = ({ entry }: { entry: educationType }) => {
    const { theme } = useSettings();
    const { PageTextContent } = useDynamicClasses();
    const ref: React.MutableRefObject<null | HTMLLIElement> = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["center end", "center center"]
    });

    return (
        <li ref={ref}>
            <LiIcon progress={scrollYProgress} />

            <motion.div
                className="mb-8"
                initial={{ 
                    y: 50,
                }}
                whileInView={{
                    y: 0,
                }}
                transition={{
                    duration: 0.5,
                    type:"spring",
                }}
                viewport={{ once: true }}
            >
                <h4 className="dark:text-darkTextPrimary text-textPrimary text-2xl mb-2">
                    {entry.name}
                </h4>
                <span className="flex items-center text-md dark:text-darkTextPrimary/60 text-textPrimary/60">
                    <CalendarIcon classes={"w-3 h-3 mr-1"} fillColor={theme === "dark" ? "fill-darkTextPrimary/60" : "fill-textPrimary/60"} />
                    {entry.start} - {entry.end}
                </span>
                <p className="mb-3 text-md dark:text-darkTextPrimary text-textPrimary">
                    {entry.location}
                </p>
                <ul className="ml-4 list-disc list-outside dark:text-darkTextPrimary text-textPrimary">
                    <li className="text-lg">
                        {entry.grade === "noDegree" 
                            ? PageTextContent.noDegree 
                            : PageTextContent.gpa + entry.grade
                        }
                    </li>
                    {entry.thesis &&
                        <li className="text-lg">
                            {PageTextContent.thesis}{entry.thesis}
                        </li>
                    }
                    {entry.focus &&
                        <li className="text-lg">
                            {PageTextContent.focus}{entry.focus}
                        </li>
                    }
                </ul>
            </motion.div>
        </li>
    )
};

const EducationSubSection = () => {
    const { lang } = useSettings();
    const { PageTextContent, bgColorClass900 } = useDynamicClasses();
    const ref: React.MutableRefObject<null | HTMLDivElement> = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 1", "center 0.5"],
    });
    const education = lang === "de" ? education_de : education_en;

    return (
        <>
            <h3 className="mb-12 text-4xl text-center dark:text-darkTextPrimary text-textPrimary">
                {PageTextContent.educationHead}
            </h3>

            <div ref={ref} className="relative w-full">
                {/* left position should be liIconCirleRadius in pixel */}
                <motion.div
                    className={`absolute top-0 left-[20px] w-[4px] h-full origin-top ${bgColorClass900}`}
                    style={{scaleY: scrollYProgress}}
                />

                <ul className="ml-16 flex flex-col items-start">
                    {education.map(entry => (
                        <TimelineEntry key={entry.name} entry={entry} />
                    ))}
                </ul>
            </div>
        </>
    )
};

type SkillPropsType = {
    skill: SkillsType,
    idx: number,
}

const Skill = ({ skill, idx }: SkillPropsType) => {
    return (
        <motion.div
            className="p-[10px] m-[5px] flex flex-col justify-center items-center"
            initial={{
                y: 300,
                rotate: 75,
                opacity: 0,
            }}
            whileInView={{
                y: 0,
                rotate: 0,
                opacity: 1,
                transition: {
                    type: "spring",
                    bounce: 0.4,
                    duration: 1,
                    delay: (idx % 3)*0.1,
                }
            }}
            viewport={{ once: true }}
        >
            <label 
                className="text-center dark:text-darkTextPrimary text-textPrimary"
                title={skill.description}
            >
                <p className="py-3">{skill.name}</p>
                <img 
                    src={skill.logo} 
                    alt={skill.name} 
                    className="w-[100px] h-[100px]" 
                />
            </label>
        </motion.div>
    )
};

const SkillsSubSection = () => {
    const { lang } = useSettings();
    const { PageTextContent, bgColorClass900 } = useDynamicClasses();
    const itRef: React.MutableRefObject<null | HTMLDivElement> = useRef(null);
    const langRef: React.MutableRefObject<null | HTMLDivElement> = useRef(null);
    const { scrollYProgress: itProgress } = useScroll({
        target: itRef,
        offset: ["start 1", "center 0.3"],
    });
    const { scrollYProgress: langProgress } = useScroll({
        target: langRef,
        offset: ["start 1", "center 0.5"],
    });

    const skillsIT = lang === "en" ? skillsIT_en : skillsIT_de;
    const skillsLanguage = lang === "en" ? skillsLanguage_en : skillsLanguage_de;

    return (
        <>
            <h3 className="mb-12 text-4xl text-center dark:text-darkTextPrimary text-textPrimary">
                {PageTextContent.skillsHead}
            </h3>

            <h4 ref={itRef} className="skillSubHeader w-full flex items-center text-3xl dark:text-darkTextPrimary text-textPrimary">
                {PageTextContent.itHead}
                <motion.div className={`ml-2 w-full h-1 ${bgColorClass900} origin-left`} style={{ scaleX: itProgress }}/>
            </h4>

            <div className="mb-14 flex justify-center flex-wrap">
                {skillsIT.map((skill, idx) => (
                    <Skill 
                        key={skill.name + idx} 
                        skill={skill} 
                        idx={idx}
                    />
                ))}
            </div>

            <h4 ref={langRef} className="skillSubHeader w-full flex items-center text-3xl dark:text-darkTextPrimary text-textPrimary">
                {PageTextContent.languageHead}
                <motion.div className={`ml-2 w-full h-1 ${bgColorClass900} origin-left`} style={{ scaleX: langProgress }}/>
            </h4>

            <div className="flex justify-center flex-wrap">
                {skillsLanguage.map((language, idx) => (
                    <Skill 
                        key={language.name}
                        skill={language}
                        idx={idx}
                    />
                ))}
            </div>
        </>
    )
};

const About = () => {
    const { PageTextContent, sectionPaddingTop, bgColorClass900 } = useDynamicClasses();

    return (
        <section id="about" className={`relative ${sectionPaddingTop}`}>
            <div className={`about-background absolute inset-0 flex flex-col-reverse ${sectionPaddingTop}`}>
                <div className={`w-full h-[10px] ${bgColorClass900}`} />
            </div>
            <div className="about-content relative">
                <div className={`max-container ${styles.maxContainer}`}>
                    <h2 className="pt-12 mb-12 text-5xl text-center dark:text-darkTextPrimary text-textPrimary">
                        {PageTextContent.aboutHead}
                    </h2>

                    <div className={`grid xl:grid-cols-2 xl:gap-16 grid-cols-1 ${styles.sectionPaddingBottom}`}>
                        {/* margin bottom should be the same as sectionPaddingBottom */}
                        <motion.div 
                            className="education-wrapper xl:mb-0 mb-24"
                            initial={{
                                x: -200
                            }}
                            whileInView={{
                                x: 0,
                                transition: {
                                    duration: 1,
                                }
                            }}
                            viewport={{ once: true }}
                        >
                            <EducationSubSection />
                        </motion.div>
                        <motion.div 
                            className="skills-wrapper"
                            initial={{
                                x: 200
                            }}
                            whileInView={{
                                x: 0,
                                transition: {
                                    duration: 1,
                                }
                            }}
                            viewport={{ once: true }}
                        >
                            <SkillsSubSection />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About