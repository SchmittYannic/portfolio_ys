import { useState, Fragment } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useSettings from "../hooks/useSettings";
import useDynamicClasses from "../hooks/useDynamicClasses";
import { ExpandButton } from "./ui";
import TechTags from "./ui/TechTags";
import { styles } from "../styles";
import { ProjectType, projects } from "../constants";

const Project = ({ project }: { project: ProjectType }) => {
    const { lang } = useSettings();
    const { PageTextContent } = useDynamicClasses();
    const [isDescExpanded, setIsDescExpanded] = useState<boolean>(false);

    const description: string[] = lang === "en" ? project.description_en : project.description_de;

    return (
        <div
            key={project.title_en}
            className={`project-mobile ${styles.maxContainer} mx-auto flex flex-col items-center`} //sm:pb-48 pb-24
        >
            <div className="project-mobile-img-wrapper">
                <img
                    src={project.image}
                    alt=""
                    className="aspect-[16/9] overflow-hidden object-cover object-top"
                    width={1024}
                    height={576}
                />
            </div>
            <div
                className="project-mobile-description"
            >
                <h3 className={`mt-8 mb-4 md:text-3xl sm:text-2xl text-xl font-bold ${styles.headlineTextColor}`}>
                    {lang === "en" ? project.title_en : project.title_de}
                </h3>

                <div className="mb-4 dark:text-darkTextPrimary text-textPrimary">
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
                                    <Fragment key={project.title_en + idx}>
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

                <TechTags tags={project.tags} />
            </div>
        </div>
    )
}

const ProjectsMobile = () => {
    const { PageTextContent } = useDynamicClasses();

    return (
        <section
            id="projects"
            className={`w-full py-12 md:py-24 lg:py-32 ${styles.secondaryBackground}`}
        >
            <div
                id="projects-content"
                className={`relative ${styles.maxSiteWidth} mx-auto px-4 md:px-6`}
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
                    className="lg:mt-14 md:mt-10 mt-8 flex flex-col md:gap-24 gap-16"
                >
                    {projects.map(project => (
                        <Project key={project.title_en} project={project} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProjectsMobile