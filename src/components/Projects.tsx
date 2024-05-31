import { useState, Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useSettings from "../hooks/useSettings";
import useDynamicClasses from "../hooks/useDynamicClasses";
import { ExpandButton } from "./ui";
import TechTags from "./ui/TechTags";
import { styles } from "../styles";
import { githubLogo, playButton } from "../assets";
import { ProjectType, projects } from "../constants";
import { removeItemFromArray } from "../constants/array";

const Projects = () => {

    const { lang } = useSettings();
    const { PageTextContent, ringColorClass, borderColorClass900 } = useDynamicClasses();
    const [activeProject, setActiveProject] = useState<ProjectType>(projects[0]);
    const [selectedProjects, setSelectedProjects] = useState<ProjectType[]>(projects.filter(p => p.title_en !== projects[0].title_en));
    const [isDescExpanded, setIsDescExpanded] = useState<boolean>(false);

    const description: string[] = lang === "en" ? activeProject.description_en : activeProject.description_de;

    return (
        <section
            id="projects"
            className={`w-full lg:py-32 md:py-24 py-12 ${styles.secondaryBackground}`}
        >
            <div
                id="projects-content"
                className={`${styles.maxSiteWidth} mx-auto md:px-6 px-4`}
            >
                <div
                    id="projects-header"
                    className="text-center space-y-4"
                >
                    <h2
                        className={`md:text-5xl sm:text-4xl text-3xl font-bold tracking-tighter ${styles.headlineTextColor}`}
                    >
                        {PageTextContent.projectsHead}
                    </h2>
                    <p
                        className={`mx-auto ${styles.maxContainer} ${styles.primaryFontSize} ${styles.primaryTextColor}`}
                    >
                        {PageTextContent.projectsSub}
                    </p>
                </div>

                <div
                    id="projects-main"
                    className={`lg:mt-14 md:mt-10 mt-8 grid grid-cols-[2fr_1fr] gap-6`}
                >
                    <div
                        id="projects-display"
                    >
                        <div
                            id="projects-display-img-wrapper"
                            className={`relative border-2 ${borderColorClass900} ${styles.primaryBackground}`}
                        >
                            <motion.video
                                key={activeProject.title_en}
                                className="aspect-[16/9] overflow-hidden object-cover object-top"
                                poster={activeProject.image}
                                width={1600}
                                height={900}
                                muted={true}
                                controls
                                autoPlay
                                loop
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1, ease: "linear" }}
                            >
                                <source src={activeProject.webm} type="video/webm" />
                                Your browser does not support the video tag.
                            </motion.video>


                            <a
                                className="group outline-none"
                                href={activeProject.githubLink}
                                target="_blank"
                                title={PageTextContent.githubtitle}
                            >
                                <img
                                    className="absolute bottom-6 left-6 w-16 h-16 rounded-full hover:scale-125 group-focus:ring-4 ring-black/30 ring-offset-2 transition-[transform] duration-500 ease-linear"
                                    src={githubLogo}
                                    alt="Github Logo"
                                />
                            </a>

                            {activeProject.liveLink && (
                                <a
                                    className="group outline-none absolute bottom-6 left-28"
                                    href={activeProject.liveLink}
                                    target="_blank"
                                    title={PageTextContent.livelinktitle}
                                >
                                    <div
                                        className={`liveLink w-16 h-16 relative rounded-full flex items-center justify-center hover:scale-125 transition-[transform] duration-500 ease-linear group-focus:ring-4 ${ringColorClass} ring-offset-2 z-10 before:inset-0 before:absolute before:content-[''] before:rounded-full before:opacity-0 before:-z-10 before:transition-opacity before:duration-500 before:ease-linear before:hover:opacity-100`}
                                    >
                                        <img
                                            className="w-6 h-6 translate-x-0.5"
                                            src={playButton}
                                            alt="Live version"
                                        />
                                    </div>
                                </a>
                            )}
                        </div>

                        <motion.div
                            id="project-description"
                            key={activeProject.title_en}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1, ease: "linear" }}
                        >
                            <h3 className={`mt-8 mb-4 text-3xl font-bold ${styles.headlineTextColor}`}>
                                {lang === "en" ? activeProject.title_en : activeProject.title_de}
                            </h3>

                            <div className="mb-4">
                                <p className={`mb-2 ${styles.primaryFontSize} ${styles.primaryTextColor}`}>
                                    {description[0]}
                                </p>

                                <AnimatePresence>
                                    {isDescExpanded && (
                                        <motion.div
                                            initial={{ maxHeight: "0px", opacity: 0 }}
                                            animate={{ maxHeight: "1000px", opacity: 1 }}
                                            exit={{ maxHeight: "0px", opacity: 0 }}
                                            transition={{ duration: 1 }}
                                        >
                                            {description.map((paragraph, idx) =>
                                                <Fragment key={activeProject.title_en + idx}>
                                                    {idx !== 0 && (
                                                        <p
                                                            className={`mb-2 ${styles.primaryFontSize} ${styles.primaryTextColor}`}
                                                        >
                                                            {paragraph}
                                                        </p>
                                                    )}
                                                </Fragment>
                                            )}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {description.length > 1 && (
                                <div className="mb-6">
                                    <ExpandButton
                                        type="button"
                                        onClick={() => setIsDescExpanded(!isDescExpanded)}
                                    >
                                        {isDescExpanded ? PageTextContent.collapseButton : PageTextContent.expandButton}
                                    </ExpandButton>
                                </div>
                            )}

                            <TechTags tags={activeProject.tags} />

                        </motion.div>
                    </div>

                    <div
                        id="projects-selection"
                    >
                        <AnimatePresence mode="popLayout">
                            {selectedProjects.map((project) => {
                                const handleSelectProjectClicked = () => {
                                    setSelectedProjects((prevState) => {
                                        const copy = [...prevState];
                                        removeItemFromArray(copy, project);
                                        copy.push(activeProject);
                                        return copy
                                    })

                                    setActiveProject(project)
                                };

                                return (
                                    <motion.div
                                        key={project.title_en}
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ type: "spring" }}
                                    >
                                        <button
                                            className={`${styles.primaryBackground} ${styles.primaryHoverBackground}`}
                                            type="button"
                                            onClick={handleSelectProjectClicked}
                                        >
                                            <div
                                                className="relative p-4 z-0 grid grid-cols-2 items-center"
                                            >
                                                <img
                                                    src={project.image}
                                                    alt=""
                                                    className={`aspect-[16/9] overflow-hidden object-cover object-top rounded-lg border-2 ${borderColorClass900}`}
                                                    width={1024}
                                                    height={576}
                                                />
                                                <h4
                                                    className={`ml-4 ${styles.primaryTextColor}`}
                                                >
                                                    {lang === "en" ? project.title_en : project.title_de}
                                                </h4>
                                            </div>
                                        </button>
                                    </motion.div>
                                )
                            })}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects