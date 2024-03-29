import { Fragment, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import useSettings from "../hooks/useSettings"
import useDynamicClasses from "../hooks/useDynamicClasses";
import { projectsMobileStyles, styles } from "../styles";
import { ProjectType, projects } from "../constants";
import TechTags from "./ui/TechTags";
import { ExpandButton } from "./ui";

const Project = ({ project }: { project: ProjectType }) => {
    const { lang } = useSettings();
    const { PageTextContent } = useDynamicClasses();
    const [isDescExpanded, setIsDescExpanded] = useState<boolean>(false);

    const description: string[] = lang === "en" ? project.description_en : project.description_de;

    return (
        <div key={project.title_en} className={`project-mobile ${styles.sectionPaddingBottom} flex flex-col items-center`}>
            <div className="project-mobile-img-wrapper">
                <img 
                    src={project.image} 
                    alt="" 
                    className={`${projectsMobileStyles.projectImgWidth} ${projectsMobileStyles.projectImgHeight}`}
                />
            </div>
            <div className={`project-mobile-description ${projectsMobileStyles.projectImgWidth}`}>
                <h3 className="mt-8 mb-4 text-4xl dark:text-darkTextPrimary text-textPrimary">
                    {lang === "en" ? project.title_en : project.title_de}
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
                                    <Fragment key={project.title_en + idx}>
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

                <TechTags tags={project.tags} />
            </div>
        </div>
    )
}

const ProjectsMobile = () => {
    const { sectionPaddingTop, PageTextContent, bgColorClass900 } = useDynamicClasses();

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

                    {projects.map(project => (
                        <Project key={project.title_en} project={project} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProjectsMobile