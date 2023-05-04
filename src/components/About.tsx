import { useContext, useRef } from "react"
import { motion, useScroll, MotionValue } from "framer-motion"

import { TextContent, education_de, educationType, education_en } from "../constants"
import { SettingsContext } from "../context/SettingsProvider"

const LiIcon = ({ progress }: { progress: MotionValue<number>}) => {
    const { color } = useContext(SettingsContext);
    const strokeColorClass900 = `stroke-action${color}-900`;
    const fillColorClass900 = `fill-action${color}-900`

    return (
        <figure className="absolute xl:left-0 -left-7 dark:stroke-lightText stroke-darkText">
            <svg className="-rotate-90" width="75" height="75" viewBox="0 0 100 100">
                <circle cx="75" cy="50" r="20" className={`${strokeColorClass900} stroke-1 fill-none`} />
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
    const { lang } = useContext(SettingsContext);
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
                <span className="text-sm dark:text-darkTextPrimary/60 text-textPrimary/60">
                    {entry.start} - {entry.end}
                </span>
                <p className="mb-2 text-sm dark:text-darkTextPrimary text-textPrimary">
                    {entry.location}
                </p>
                <ul className="ml-4 list-disc list-outside">
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

const About = () => {
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
        <section id="about" className="w-full mb-32">
            <h2 className="mb-16 text-5xl text-center dark:text-darkTextPrimary text-textPrimary">
                {lang === "de" ? TextContent.german.aboutHead : TextContent.english.aboutHead}
            </h2>

            <div>
                <div className="px-10">
                    <h3 className="mb-12 text-4xl text-center dark:text-darkTextPrimary text-textPrimary">
                        {lang === "de" ? TextContent.german.educationHead : TextContent.english.educationHead}
                    </h3>

                    <div ref={ref} className="relative w-full mx-auto">
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
                </div>
            </div>
        </section>
    )
}

export default About