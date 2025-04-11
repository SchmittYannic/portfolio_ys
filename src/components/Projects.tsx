import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useSettings from "../hooks/useSettings";
import useDynamicClasses from "../hooks/useDynamicClasses";
import ProjectDescription from "./ProjectDescription";
import { ExpandButton } from "./ui";
import TechTags from "./ui/TechTags";
import { styles } from "../styles";
import { ProjectType, projects } from "../constants";
import { removeItemFromArray } from "../constants/array";

const Projects = () => {

    const { lang } = useSettings();
    const { PageTextContent, borderColorClass900 } = useDynamicClasses();
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


                            {/* <a
                                className="group outline-none"
                                href={activeProject.githubLink}
                                target="_blank"
                                title={PageTextContent.githubtitle}
                            >
                                <svg
                                    className={`absolute top-6 left-6 w-16 h-16 rounded-full hover:scale-125 group-focus:ring-4 ring-offset-2 transition-[transform] duration-500 ease-linear ${activeProject.mode === "light" && "text-base-0 ring-black/30"} ${activeProject.mode === "dark" && "text-base-800 ring-white/30"}`}
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

                            {activeProject.liveLink && (
                                <a
                                    className="group outline-none absolute top-6 left-28"
                                    href={activeProject.liveLink}
                                    target="_blank"
                                    title={PageTextContent.livelinktitle}
                                >
                                    <div
                                        className={`liveLink w-16 h-16 relative rounded-full flex items-center justify-center hover:scale-125 transition-[transform] duration-500 ease-linear group-focus:ring-4 ${ringColorClass} ring-offset-2 z-10 before:inset-0 before:absolute before:content-[''] before:rounded-full before:opacity-0 before:-z-10 before:transition-opacity before:duration-500 before:ease-linear before:hover:opacity-100`}
                                    >
                                        <svg className="w-10 h-10" width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 20H16M12 20H8M12 20V16M12 16H5C4.44772 16 4 15.5523 4 15V6C4 5.44771 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6V15C20 15.5523 19.5523 16 19 16H12Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </a>
                            )} */}
                        </div>

                        <div className="mt-4 self-start flex gap-3">
                            <a
                                className="h-8 py-1 pl-[10px] pr-2 inline-block text-base rounded-md transition duration-300 text-gray-800 dark:text-base-0 bg-white dark:bg-[#eee] dark:bg-gradient-to-b dark:from-[#fcfcfc] dark:to-[#eee] border border-gray-300 dark:border-[#d5d5d5] hover:bg-gray-100 dark:hover:bg-[#ddd] hover:bg-gradient-to-b hover:from-[#f8f8f8] hover:to-[#e6e6e6] dark:hover:bg-gradient-to-b dark:hover:from-[#eee] dark:hover:to-[#ddd] hover:border-gray-400 dark:hover:border-[#ccc] active:bg-gray-300 dark:active:bg-[#dcdcdc] active:bg-none active:border-gray-500 dark:active:border-[#b5b5b5] active:shadow-inner dark:active:shadow-[inset_0_2px_4px_#00000026] focus:bg-gray-200 dark:focus:bg-[#ddd] focus:bg-gradient-to-b focus:from-[#f0f0f0] focus:to-[#d0d0d0] dark:focus:bg-gradient-to-b dark:focus:from-[#eee] dark:focus:to-[#ddd] focus:border-gray-400 dark:focus:border-[#ccc] focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-[#bbb]"
                                href={activeProject.githubLink}
                                target="_blank"
                                title={PageTextContent.githubtitle}
                            >
                                <span
                                    className="inline-block mr-1 -mb-[3px]"
                                >
                                    <svg className="text-[#333333]" xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" x="0px" y="0px" width="20px" height="20px" viewBox="12 12 40 40" enableBackground="new 12 12 40 40">
                                        <path fill="currentColor" d="M32 13.4c-10.5 0-19 8.5-19 19c0 8.4 5.5 15.5 13 18c1 0.2 1.3-0.4 1.3-0.9c0-0.5 0-1.7 0-3.2 c-5.3 1.1-6.4-2.6-6.4-2.6C20 41.6 18.8 41 18.8 41c-1.7-1.2 0.1-1.1 0.1-1.1c1.9 0.1 2.9 2 2.9 2c1.7 2.9 4.5 2.1 5.5 1.6 c0.2-1.2 0.7-2.1 1.2-2.6c-4.2-0.5-8.7-2.1-8.7-9.4c0-2.1 0.7-3.7 2-5.1c-0.2-0.5-0.8-2.4 0.2-5c0 0 1.6-0.5 5.2 2 c1.5-0.4 3.1-0.7 4.8-0.7c1.6 0 3.3 0.2 4.7 0.7c3.6-2.4 5.2-2 5.2-2c1 2.6 0.4 4.6 0.2 5c1.2 1.3 2 3 2 5.1c0 7.3-4.5 8.9-8.7 9.4 c0.7 0.6 1.3 1.7 1.3 3.5c0 2.6 0 4.6 0 5.2c0 0.5 0.4 1.1 1.3 0.9c7.5-2.6 13-9.7 13-18.1C51 21.9 42.5 13.4 32 13.4z" />
                                    </svg>
                                </span>
                                <span>Github</span>
                            </a>

                            {activeProject.liveLink && (
                                <a
                                    className="color-btn h-8 py-1 pl-[10px] pr-2 inline-block text-base rounded-md transition duration-300 text-gray-800 dark:text-base-0 bg-white dark:bg-[#eee] dark:bg-gradient-to-b dark:from-[#fcfcfc] dark:to-[#eee] border border-gray-300 dark:border-[#d5d5d5] hover:bg-gray-100 dark:hover:bg-[#ddd] hover:bg-gradient-to-b hover:from-[#f8f8f8] hover:to-[#e6e6e6] dark:hover:bg-gradient-to-b dark:hover:from-[#eee] dark:hover:to-[#ddd] hover:border-gray-400 dark:hover:border-[#ccc] active:bg-gray-300 dark:active:bg-[#dcdcdc] active:bg-none active:border-gray-500 dark:active:border-[#b5b5b5] active:shadow-inner dark:active:shadow-[inset_0_2px_4px_#00000026] focus:bg-gray-200 dark:focus:bg-[#ddd] focus:bg-gradient-to-b focus:from-[#f0f0f0] focus:to-[#d0d0d0] dark:focus:bg-gradient-to-b dark:focus:from-[#eee] dark:focus:to-[#ddd] focus:border-gray-400 dark:focus:border-[#ccc] focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-[#bbb]"
                                    href={activeProject.liveLink}
                                    target="_blank"
                                    title={PageTextContent.livelinktitle}
                                >
                                    <span
                                        className="inline-block mr-1 -mb-[3px]"
                                    >
                                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 20H16M12 20H8M12 20V16M12 16H5C4.44772 16 4 15.5523 4 15V6C4 5.44771 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6V15C20 15.5523 19.5523 16 19 16H12Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                    <span>Live Demo</span>
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
                                {activeProject.demoaccname && activeProject.demoaccpw &&
                                    <>
                                        <h4 className={`mb-1 text-xl ${styles.headlineTextColor}`}>
                                            Demoaccount:
                                        </h4>
                                        <p
                                            className={`mb-4 ${styles.primaryFontSize} ${styles.primaryTextColor}`}
                                        >
                                            {PageTextContent.emailLabel}: {activeProject.demoaccname}
                                            <br />
                                            {PageTextContent.passwordLabel}: {activeProject.demoaccpw}
                                        </p>

                                        <h4 className={`mb-1 text-xl ${styles.headlineTextColor}`}>
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
                                                    className={`ml-4 break-words hyphens-auto ${styles.primaryTextColor}`}
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