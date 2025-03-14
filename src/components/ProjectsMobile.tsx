import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import useSettings from "../hooks/useSettings";
import useDynamicClasses from "../hooks/useDynamicClasses";
import { ExpandButton } from "./ui";
import TechTags from "./ui/TechTags";
import ProjectDescription from "./ProjectDescription";
import { styles } from "../styles";
import { ProjectType, projects } from "../constants";
import { playButton } from "../assets";

const Project = ({ project }: { project: ProjectType }) => {
    const { lang } = useSettings();
    const { PageTextContent, borderColorClass900, ringColorClass } = useDynamicClasses();
    const [isDescExpanded, setIsDescExpanded] = useState<boolean>(false);

    const description: string[] = lang === "en" ? project.description_en : project.description_de;

    return (
        <div
            key={project.title_en}
            className={`project-mobile ${styles.maxContainer} mx-auto flex flex-col items-center`} //sm:pb-48 pb-24
        >
            <div className={`project-mobile-img-wrapper relative border-2 ${borderColorClass900}`}>
                <img
                    src={project.image}
                    alt=""
                    className="aspect-[16/9] overflow-hidden object-cover object-top"
                    width={1024}
                    height={576}
                />

                <a
                    className="group outline-none"
                    href={project.githubLink}
                    target="_blank"
                    title={PageTextContent.githubtitle}
                >
                    <svg
                        className={`absolute top-4 left-4 w-12 h-12 rounded-full hover:scale-125 group-focus:ring-4 ring-offset-2 transition-[transform] duration-500 ease-linear ${project.mode === "light" && "text-base-0 ring-black/30"} ${project.mode === "dark" && "text-base-800 ring-white/30"}`}
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g fill="none" fillRule="evenodd">
                            <path d="m0 0h32v32h-32z" />
                            <path d="m16 0c8.836556 0 16 7.163444 16 16s-7.163444 16-16 16-16-7.163444-16-16 7.163444-16 16-16zm-.0080357 7.00602603c-4.9680804-.00200817-8.9919643 4.01986687-8.9919643 8.98392937 0 3.9254464 2.5171875 7.2622767 6.0227679 8.4877232.4720982.1185268.3997767-.2169643.3997767-.4459822v-1.5569196c-2.726116.3194196-2.8366071-1.4845982-3.0194196-1.7859375-.3696429-.6308036-1.24352679-.7915179-.98236607-1.0928572.62075897-.3194196 1.25357147.0803572 1.98683037 1.1631697.5303571.7854911 1.5649553.6529018 2.0892857.5223214.1145089-.4720982.3595982-.8939732.6970982-1.2214286-2.8245536-.50625-4.0017857-2.2299107-4.0017857-4.2790178 0-.9944197.3274554-1.9084822.9703125-2.6457589-.4098214-1.2154018.0381696-2.2560268.0984375-2.4107143 1.1671875-.1044643 2.3805804.8357143 2.475.9100446.6629464-.1787946 1.4203125-.2732143 2.2680804-.2732143.8517857 0 1.6111607.0984375 2.2801339.2792411.2270089-.1727679 1.3520089-.9803571 2.4368303-.8819196.058259.1546875.4962054 1.1712053.1104911 2.3705357.6508929.7392857.9823661 1.6613839.9823661 2.6578125 0 2.053125-1.1852679 3.7787946-4.0178572 4.2770089.4720983.4660714.7654018 1.1129464.7654018 1.828125v2.2600446c.0160715.1808036 0 .3595983.3013393.3595983 3.5578125-1.1993304 6.1191964-4.5602679 6.1191964-8.5198661 0-4.9660714-4.0258928-8.98593827-8.9899553-8.98593827z" fill="currentColor" />
                        </g>
                    </svg>
                </a>

                {project.liveLink && (
                    <a
                        className="group outline-none absolute top-4 left-20"
                        href={project.liveLink}
                        target="_blank"
                        title={PageTextContent.livelinktitle}
                    >
                        <div
                            className={`liveLink w-12 h-12 relative rounded-full flex items-center justify-center hover:scale-125 transition-[transform] duration-500 ease-linear group-focus:ring-4 ${ringColorClass} ring-offset-2 z-10 before:inset-0 before:absolute before:content-[''] before:rounded-full before:opacity-0 before:-z-10 before:transition-opacity before:duration-500 before:ease-linear before:hover:opacity-100`}
                        >
                            <img
                                className="w-5 h-5 translate-x-0.5"
                                src={playButton}
                                alt="Live version"
                            />
                        </div>
                    </a>
                )}
            </div>
            <div
                className="project-mobile-description"
            >
                <h3 className={`mt-8 mb-4 md:text-3xl sm:text-2xl text-xl font-bold ${styles.headlineTextColor}`}>
                    {lang === "en" ? project.title_en : project.title_de}
                </h3>

                <div className="mb-4 dark:text-darkTextPrimary text-textPrimary">
                    {project.demoaccname && project.demoaccpw &&
                        <>
                            <h4 className={`mb-1 md:text-xl sm:text-lg ${styles.headlineTextColor}`}>
                                Demoaccount:
                            </h4>
                            <p
                                className={`mb-2 ${styles.primaryFontSize} ${styles.primaryTextColor}`}
                            >
                                {PageTextContent.emailLabel}: {project.demoaccname}
                                <br />
                                {PageTextContent.passwordLabel}: {project.demoaccpw}
                            </p>

                            <h4 className={`mb-1 md:text-xl sm:text-lg ${styles.headlineTextColor}`}>
                                {PageTextContent.descriptionHead}:
                            </h4>
                        </>
                    }

                    <p className={`mb-2 ${styles.primaryFontSize} ${styles.primaryTextColor}`}>
                        {description[0]}
                    </p>

                    <AnimatePresence>
                        {isDescExpanded && (
                            <ProjectDescription description={description} />
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