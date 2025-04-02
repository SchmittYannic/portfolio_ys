import { PropsWithChildren, useRef } from "react";
import { motion, MotionValue, useScroll } from "framer-motion";
import useDynamicClasses from "../hooks/useDynamicClasses";
import useSettings from "../hooks/useSettings";
import { styles } from "../styles";
import {
    education_de,
    education_en,
    educationType,
    liIconCircleRadius,
    skillsIT,
    skillsLanguage,
    SkillsType
} from "../constants";
import { ScrollOffset } from "../utils/types";

type fillColorType = `fill-${string}`;

const CalendarIcon = ({ classes, fillColor = "fill-[#000000]" }: { classes: string, fillColor: fillColorType }) => {
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

const LiIcon = ({ progress }: { progress: MotionValue<number> }) => {
    const { color } = useSettings();
    const strokeColorClass900 = `stroke-action${color}-900`;
    const fillColorClass900 = `fill-action${color}-900`

    return (
        <figure className={`absolute left-0 ${strokeColorClass900}`}>
            <svg className="-rotate-90" width={liIconCircleRadius} height={liIconCircleRadius} viewBox="0 0 100 100">
                <circle cx="50" cy="50" r={liIconCircleRadius} className="dark:stroke-base-900 stroke-darkBase-900 stroke-[4px] fill-none" />
                <motion.circle
                    cx="50" cy="50" r={liIconCircleRadius} className="stroke-[10px] dark:fill-darkBase-900 fill-base-900"
                    style={{
                        pathLength: progress,
                    }}
                />
                <circle cx="50" cy="50" r={liIconCircleRadius / 2} className={`animate-pulse stroke-1 ${fillColorClass900}`} />
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
                    type: "spring",
                }}
                viewport={{ once: true }}
            >
                <h4 className="md:text-2xl text-xl mb-2 dark:text-darkTextPrimary text-textPrimary">
                    {entry.name}
                </h4>
                <span className={`flex items-center ${styles.secondaryFontSize} dark:text-darkTextPrimary/60 text-textPrimary/60`}>
                    <CalendarIcon classes={"w-3 h-3 mr-1"} fillColor={theme === "dark" ? "fill-darkTextPrimary/60" : "fill-textPrimary/60"} />
                    {entry.start} - {entry.end}
                </span>
                <p className={`mb-3 ${styles.secondaryFontSize} dark:text-darkTextPrimary text-textPrimary`}>
                    {entry.location}
                </p>
                <ul className={`ml-4 list-disc list-outside ${styles.primaryTextColor} ${styles.primaryFontSize}`}>
                    <li>
                        {entry.grade === "noDegree"
                            ? PageTextContent.noDegree
                            : PageTextContent.gpa + entry.grade
                        }
                    </li>
                    {entry.thesis &&
                        <li>
                            {PageTextContent.thesis}{entry.thesis}
                        </li>
                    }
                    {entry.focus &&
                        <li>
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
            <h3 className="mb-12 md:text-3xl text-2xl text-center dark:text-darkTextPrimary text-textPrimary">
                {PageTextContent.educationHead}
            </h3>

            <div ref={ref} className="relative w-full">
                {/* left position should be liIconCirleRadius in pixel minus half the width of the line */}
                <motion.div
                    className={`absolute top-[2px] left-[18px] w-[4px] h-full origin-top ${bgColorClass900}`}
                    style={{ scaleY: scrollYProgress }}
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

    const { lang } = useSettings();

    const description = lang === "en" ? skill.description_en : skill.description_de;
    const name = lang === "en" ? skill.name_en : skill.name_de;

    return (
        <motion.div
            className="p-[10px] m-[5px] flex flex-col justify-center items-center"
            initial={{
                //y: 300,
                //rotate: 75,
                opacity: 0,
            }}
            whileInView={{
                y: 0,
                rotate: 0,
                opacity: 1,
                transition: {
                    type: "spring",
                    bounce: 0.4,
                    duration: 2,
                    delay: (idx % 3) * 0.2,
                }
            }}
            viewport={{ once: true }}
        >
            <label
                id={skill.id}
                className="text-center dark:text-darkTextPrimary text-textPrimary"
                title={description}
            >
                <p className={`py-3 ${styles.secondaryFontSize}`}>
                    {name}
                </p>
                <img
                    src={skill.logo}
                    alt={name}
                    className="xl:w-[100px] xl:h-[100px] md:w-[80px] md:h-[80px] w-[60px] h-[60px]"
                />
            </label>
        </motion.div>
    )
};

const SkillsSubSectionHeadText = ({ children, offset }: PropsWithChildren<{ offset: ScrollOffset }>) => {
    const { bgColorClass900 } = useDynamicClasses();
    const ref: React.MutableRefObject<null | HTMLDivElement> = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: offset,
    });

    return (
        <h4 ref={ref} className="skillSubHeader w-full flex items-center md:text-2xl text-xl dark:text-darkTextPrimary text-textPrimary">
            {children}
            <motion.div
                className={`ml-2 w-full h-1 ${bgColorClass900} origin-left`}
                style={{ scaleX: scrollYProgress }}
            />
        </h4>
    )
}

const SkillsSubSection = () => {
    const { PageTextContent } = useDynamicClasses();

    return (
        <>
            <h3 className="mb-12 md:text-3xl text-2xl text-center dark:text-darkTextPrimary text-textPrimary">
                {PageTextContent.skillsHead}
            </h3>

            <SkillsSubSectionHeadText offset={["start 1", "center 0.3"]}>
                {PageTextContent.itHead}
            </SkillsSubSectionHeadText>

            <div className="mb-14 flex justify-center flex-wrap">
                {skillsIT.map((skill, idx) => (
                    <Skill
                        key={skill.name_en + idx}
                        skill={skill}
                        idx={idx}
                    />
                ))}
            </div>

            <SkillsSubSectionHeadText offset={["start 1", "center 0.5"]}>
                {PageTextContent.languageHead}
            </SkillsSubSectionHeadText>

            <div className="flex justify-center flex-wrap">
                {skillsLanguage.map((language, idx) => (
                    <Skill
                        key={language.name_en}
                        skill={language}
                        idx={idx}
                    />
                ))}
            </div>
        </>
    )
};

const About = () => {
    const { PageTextContent } = useDynamicClasses();

    return (
        <section
            id="about"
            className={`w-full lg:py-32 md:py-24 py-12`}
        >
            <div
                id="about-content"
                className={`${styles.maxSiteWidth} mx-auto px-4 md:px-6`}
            >
                <div
                    id="about-header"
                    className="text-center space-y-4"
                >
                    <h2
                        className={`md:text-5xl sm:text-4xl text-3xl font-bold tracking-tighter ${styles.headlineTextColor}`}
                    >
                        {PageTextContent.aboutHead}
                    </h2>
                    <p
                        className={`mx-auto ${styles.maxContainer} ${styles.primaryFontSize} ${styles.primaryTextColor}`}
                    >
                        {PageTextContent.aboutSub}
                    </p>
                </div>

                <div
                    className={`lg:max-w-none ${styles.maxContainer} lg:mx-0 mx-auto lg:mt-14 md:mt-10 mt-8 grid lg:grid-cols-2 lg:gap-16 grid-cols-1`}
                >
                    {/* margin bottom should be the same as sectionPaddingBottom */}
                    <div className="education-wrapper lg:mb-0 md:mb-10 mb-8">
                        <EducationSubSection />
                    </div>
                    <div className="skills-wrapper">
                        <SkillsSubSection />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About