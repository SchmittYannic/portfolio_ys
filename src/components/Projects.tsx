import { Fragment, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import useSettings from "../hooks/useSettings";
import useDynamicClasses from "../hooks/useDynamicClasses";
import { projectsStyles, styles } from "../styles";
import { githubLogo, playButton } from "../assets";
import { removeItemFromArray } from "../constants/array";
import { ProjectType, projects } from "../constants";
import TechTags from "./ui/TechTags";
import { ExpandButton } from "./ui";


const Projects = () => {
    const { lang } = useSettings();
    const { bgColorClass900, borderColorClass900, ringColorClass, PageTextContent, sectionPaddingTop } = useDynamicClasses();
    const [activeProject, setActiveProject] = useState<ProjectType>(projects[0]);
    const [selectedProjects, setSelectedProjects] = useState<ProjectType[]>(projects.filter(p => p.title_en !== projects[0].title_en));
    const [isDescExpanded, setIsDescExpanded] = useState<boolean>(false);

    const description: string[] = lang === "en" ? activeProject.description_en : activeProject.description_de;

    return (
        <section id="projects" className={`relative ${sectionPaddingTop}`}>
            <div className={`projects-background absolute inset-0 flex flex-col ${sectionPaddingTop}`}>
                <div className={`w-full h-[200px] ${bgColorClass900}`} />
                <div className={`w-full ${styles.primaryBackground} grow`} />
                <div className={`w-full h-[10px] ${bgColorClass900}`} />
            </div>

            <div className="projects-content relative">
                <div className={`max-container ${styles.maxContainer}`}>
                    <h2 className="pt-12 mb-12 text-5xl text-center dark:text-darkTextPrimary text-textPrimary">
                        {PageTextContent.projectsHead}
                    </h2>

                    <div className={`flex justify-between items-start`}>
                        <div className={`project-display ${styles.sectionPaddingBottom} ${projectsStyles.projectDisplayWidth}`}>
                            <div className={`project-display-img-wrapper relative border-2 ${borderColorClass900} ${styles.primaryBackground}`}>
                                <motion.img 
                                    key={activeProject.image}
                                    src={activeProject.image} 
                                    alt="" 
                                    className={`${projectsStyles.projectDisplayWidth} ${projectsStyles.projectDisplayImgHeight}`}
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    exit={{opacity: 0}}
                                    transition={{duration: 1, ease: "linear"}}
                                />

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
                                key={activeProject.title_en}
                                className="project-description"
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                                transition={{duration: 1, ease: "linear"}}
                            >
                                <h3 className="mt-8 mb-4 text-4xl dark:text-darkTextPrimary text-textPrimary">
                                    {lang === "en" ? activeProject.title_en : activeProject.title_de}
                                </h3>
                            
                                <div className="mb-4 dark:text-darkTextPrimary text-textPrimary">
                                    <p className="mb-2 text-lg dark:text-darkTextPrimary text-textPrimary">
                                        {description[0]}
                                    </p>

                                    <AnimatePresence>
                                        {isDescExpanded && (
                                            <motion.div
                                                initial={{maxHeight: "0px", opacity: 0}}
                                                animate={{maxHeight: "1000px", opacity: 1}}
                                                exit={{maxHeight: "0px", opacity: 0}}
                                                transition={{duration: 1}}
                                            >
                                                {description.map((paragraph, idx) => 
                                                    <Fragment key={activeProject.title_en + idx}>
                                                        {idx !== 0 && (
                                                            <p
                                                                className="mb-2 text-lg dark:text-darkTextPrimary text-textPrimary"
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

                        <div className={`projects-selection ${projectsStyles.projectsSelectionWidth} mb-8 flex flex-col`}>
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
                                            className="flex flex-col"
                                            initial={{ scale: 0.8, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}                                
                                            transition={{ type: "spring" }}
                                        >
                                            <button 
                                                className={`project-preview relative grow ${styles.secondaryBackground} ${styles.secondaryHoverBackground} disabled:bg-base-900 dark:disabled:bg-darkBase-900`}
                                                type="button"
                                                onClick={handleSelectProjectClicked}
                                            >
                                                <div className="relative p-4 flex 2xl:flex-row flex-col items-center z-0">
                                                    <img 
                                                        src={project.image} 
                                                        alt="" 
                                                        className={`2xl:mb-0 mb-4 border-2 rounded-lg ${borderColorClass900} ${projectsStyles.projectSelectImgWidth} ${projectsStyles.projectSelectImgHeight}`}
                                                    />
                                                    <h4 className={`2xl:p-4 grow dark:text-darkTextPrimary text-textPrimary ${projectsStyles.projectSelectHeadText}`}>
                                                        {lang === "en" ? project.title_en : project.title_de}
                                                    </h4>
                                                </div>
                                            </button>
                                            <hr className={`${styles.primaryBorderColor}`} />
                                        </motion.div>
                                    )
                                })}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects