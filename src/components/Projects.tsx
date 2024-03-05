import { useContext, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SettingsContext, UseSettingsContextType } from "../context/SettingsProvider";
import { ProjectType, TagKeyType, TextContent, projects, tagData } from "../constants";
import { githubLogo, playButton } from "../assets";

const Tags = ({ tags }: {tags: TagKeyType[]}) => {

    return(
        <div className="flex flex-wrap gap-2">
            {tags.map((tag, idx) => {
                const tagTextColor = tagData[tag].textColor
                const tagBgColor = tagData[tag].backgroundColor

                return (
                    <div 
                        key={idx}
                        className={`px-2 rounded-sm ${tagTextColor} ${tagBgColor}`}
                    >
                        # {tag}
                    </div>
                )
            })}
        </div>
    )
}

const Projects = () => {
    const { lang, color } = useContext<UseSettingsContextType>(SettingsContext);
    const [activeProject, setActiveProject] = useState<ProjectType>(projects[0]);
    const [isDescExpanded, setIsDescExpanded] = useState<boolean>(false);

    const description: string[] = lang === "en" ? activeProject.description_en : activeProject.description_de;
    const PageTextContent = lang === "en" ? TextContent.english : TextContent.german;

    const bgColorClass900: string = `bg-action${color}-900`;
    const borderColorClass200: string = `border-action${color}-200`;
    const ringColorClass: string = `ring-action${color}-900/30`;

    return (
        <section id="projects" className="relative">
            <div className="projects-background absolute inset-0 flex flex-col justify-between">
                <div className={`w-full h-[200px] ${bgColorClass900}`} />
                <div className={`w-full h-[10px] ${bgColorClass900}`} />
            </div>
            <div className="projects-content relative max-w-[1920px] min-w-[320px] mx-auto lg:px-48">
                <h2 className="pt-12 mb-12 text-5xl text-center dark:text-darkTextPrimary text-textPrimary">
                    {PageTextContent.projectsHead}
                </h2>

                <div className="flex gap-8">
                    <div className="project-display w-[1024px] pb-32">
                        <div className="project-display-img-wrapper relative">
                            <img 
                                src={activeProject.image} 
                                alt="" 
                                className={`w-[1024px] h-[576px] border-2 ${borderColorClass200}`}
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
                        <div className="project-description">
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
                                                <>
                                                    {idx !== 0 && (
                                                        <p 
                                                            key={activeProject.title_en + idx}
                                                            className="mb-2 text-lg dark:text-darkTextPrimary text-textPrimary"
                                                        >
                                                            {paragraph}
                                                        </p>
                                                    )}
                                                </>
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

                            <Tags tags={activeProject.tags} />
                            
                        </div>
                    </div>
                    <div className={`projects-selection mb-8 dark:bg-darkBase bg-base flex flex-col`}>
                        {projects.map((project) => 
                            <>
                                <button 
                                    className="project-preview flex p-4 dark:hover:bg-darkBaseSecondary hover:bg-baseSecondary"
                                    type="button"
                                    onClick={() => setActiveProject(project)}
                                >
                                    <img src={project.image} alt="" className={`w-[180px] h-[100px] border-2 ${borderColorClass200}`} />
                                    <h4 className="p-4 text-xl grow dark:text-darkTextPrimary text-textPrimary">
                                        {lang === "en" ? project.title_en : project.title_de}
                                    </h4>
                                </button>
                                <hr className="dark:border-darkBaseSecondary border-baseSecondary" />
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects