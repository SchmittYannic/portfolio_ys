import { Fragment, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TextContent, ProjectType, projects } from "../constants"
import useSettings from "../hooks/useSettings";
import { projectsStyles, styles } from "../styles"
import { removeItemFromArray } from "../constants/array";
import TechTags from "./ui/TechTags";
import { githubLogo, playButton } from "../assets";
import useWindowSize from "../hooks/useWindowSize";


const ProjectsGrid = () => {

    const { color, lang } = useSettings();
    const windowSize = useWindowSize();
    const [activeProject, setActiveProject] = useState<ProjectType>(projects[0]);
    const [selectedProjects, setSelectedProjects] = useState<ProjectType[]>(projects.filter(p => p.title_en !== projects[0].title_en));
    const [isDescExpanded, setIsDescExpanded] = useState<boolean>(false);

    const is2XlScreen = windowSize.width && windowSize.width >= 1536;

    const PageTextContent = lang === "en" ? TextContent.english : TextContent.german;

    const description: string[] = lang === "en" ? activeProject.description_en : activeProject.description_de;

    const bgColorClass900: string = `bg-action${color}-900`;
    const borderColorClass900: string = `border-action${color}-900`;
    const ringColorClass: string = `ring-action${color}-900/30`;

    return (
        <section id="projects" className="relative">
            <div className="projects-background absolute inset-0 flex flex-col">
                <div className={`w-full h-[200px] ${bgColorClass900}`} />
                <div className={`w-full dark:bg-darkBaseTertiary bg-baseTertiary grow`} />
                <div className={`w-full h-[10px] ${bgColorClass900}`} />
            </div>
            <div className="projects-content relative">
                <div className="max-container max-w-[1920px] min-w-[320px] mx-auto">
                    <div className={`${styles.grid}`}>
                        <h2 className="pt-12 mb-12 col-span-full justify-self-center text-5xl dark:text-darkTextPrimary text-textPrimary">
                            {PageTextContent.projectsHead}
                        </h2>

                        <div className={`project-display pb-32 col-start-2 col-span-7 ${projectsStyles.projectDisplayWidth}`}>
                            <div className={`project-display-img-wrapper relative dark:bg-darkBase bg-base border-2 ${borderColorClass900}`}>
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
                                        <button 
                                            className="px-4 py-2 w-[130px] rounded-full dark:bg-darkBaseSecondary bg-baseSecondary dark:text-darkTextPrimary text-textPrimary"
                                            type="button"
                                            onClick={() => setIsDescExpanded(!isDescExpanded)}
                                        >
                                            {isDescExpanded ? PageTextContent.collapseButton : PageTextContent.expandButton}
                                        </button>
                                    </div>
                                )}

                                <TechTags tags={activeProject.tags} />
                            </motion.div>
                        </div>

                        <div className={`projects-selection mb-8 col-end-12 col-span-3 self-start justify-self-end ${projectsStyles.projectsSelectionWidth} dark:bg-darkBase bg-base flex flex-col`}>
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
                                                className="project-preview relative grow dark:hover:bg-darkBaseSecondary hover:bg-baseSecondary disabled:bg-base dark:disabled:bg-darkBase"
                                                type="button"
                                                onClick={handleSelectProjectClicked}
                                            >
                                                <div className="relative p-4 grid 2xl:grid-cols-2 z-0">

                                                    {is2XlScreen && (
                                                        <img src={project.image} alt="" className={`w-[180px] h-[100px] border-2 rounded-lg ${borderColorClass900}`} />
                                                    )}
                                                    
                                                    <h4 className="p-4 text-xl dark:text-darkTextPrimary text-textPrimary">
                                                        {lang === "en" ? project.title_en : project.title_de}
                                                    </h4>
                                                </div>
                                            </button>
                                            <hr className="dark:border-darkBaseSecondary border-baseSecondary" />
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

export default ProjectsGrid