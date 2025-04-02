import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import useSettings from "../hooks/useSettings";
import useDynamicClasses from "../hooks/useDynamicClasses";
import { ExpandButton } from "./ui";
import TechTags from "./ui/TechTags";
import ProjectDescription from "./ProjectDescription";
import { styles } from "../styles";
import { ProjectType, projects } from "../constants";

const Project = ({ project }: { project: ProjectType }) => {
    const { lang } = useSettings();
    const { PageTextContent, borderColorClass900 } = useDynamicClasses();
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

                {/* <a
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
                            <svg className="w-8 h-8" width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 20H16M12 20H8M12 20V16M12 16H5C4.44772 16 4 15.5523 4 15V6C4 5.44771 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6V15C20 15.5523 19.5523 16 19 16H12Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </a>
                )} */}
            </div>

            <div className="mt-4 self-start flex gap-3">
                <a
                    className="h-8 py-1 pl-[10px] pr-2 inline-block text-base rounded-md transition duration-300 text-gray-800 dark:text-base-0 bg-white dark:bg-[#eee] dark:bg-gradient-to-b dark:from-[#fcfcfc] dark:to-[#eee] border border-gray-300 dark:border-[#d5d5d5] hover:bg-gray-100 dark:hover:bg-[#ddd] hover:bg-gradient-to-b hover:from-[#f8f8f8] hover:to-[#e6e6e6] dark:hover:bg-gradient-to-b dark:hover:from-[#eee] dark:hover:to-[#ddd] hover:border-gray-400 dark:hover:border-[#ccc] active:bg-gray-300 dark:active:bg-[#dcdcdc] active:bg-none active:border-gray-500 dark:active:border-[#b5b5b5] active:shadow-inner dark:active:shadow-[inset_0_2px_4px_#00000026] focus:bg-gray-200 dark:focus:bg-[#ddd] focus:bg-gradient-to-b focus:from-[#f0f0f0] focus:to-[#d0d0d0] dark:focus:bg-gradient-to-b dark:focus:from-[#eee] dark:focus:to-[#ddd] focus:border-gray-400 dark:focus:border-[#ccc] focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-[#bbb]"
                    href={project.githubLink}
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

                <a
                    className="h-8 py-1 pl-[10px] pr-2 inline-block text-base rounded-md transition duration-300 text-gray-800 dark:text-base-0 bg-white dark:bg-[#eee] dark:bg-gradient-to-b dark:from-[#fcfcfc] dark:to-[#eee] border border-gray-300 dark:border-[#d5d5d5] hover:bg-gray-100 dark:hover:bg-[#ddd] hover:bg-gradient-to-b hover:from-[#f8f8f8] hover:to-[#e6e6e6] dark:hover:bg-gradient-to-b dark:hover:from-[#eee] dark:hover:to-[#ddd] hover:border-gray-400 dark:hover:border-[#ccc] active:bg-gray-300 dark:active:bg-[#dcdcdc] active:bg-none active:border-gray-500 dark:active:border-[#b5b5b5] active:shadow-inner dark:active:shadow-[inset_0_2px_4px_#00000026] focus:bg-gray-200 dark:focus:bg-[#ddd] focus:bg-gradient-to-b focus:from-[#f0f0f0] focus:to-[#d0d0d0] dark:focus:bg-gradient-to-b dark:focus:from-[#eee] dark:focus:to-[#ddd] focus:border-gray-400 dark:focus:border-[#ccc] focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-[#bbb]"
                    // className="h-8 py-1 pl-[10px] pr-2 inline-block text-base rounded-md transition duration-300 
                    // text-gray-800 dark:text-base-0 
                    // bg-actionBlue-900 dark:bg-actionBlue-900 bg-gradient-to-b from-actionBlue-800 to-actionBlue-900 
                    // border border-actionBlue-900 dark:border-actionBlue-900 
                    // hover:bg-actionBlue-800 dark:hover:bg-actionBlue-600 
                    // hover:bg-gradient-to-b hover:from-actionBlue-700 hover:to-actionBlue-800 
                    // dark:hover:bg-gradient-to-b dark:hover:from-actionBlue-700 dark:hover:to-actionBlue-900 
                    // hover:border-actionBlue-800 dark:hover:border-actionBlue-600 
                    // active:bg-actionBlue-800 dark:active:bg-actionBlue-700 active:bg-none 
                    // active:border-actionBlue-900 dark:active:border-actionBlue-900 
                    // active:shadow-inner dark:active:shadow-[inset_0_2px_4px_#00000026] 
                    // focus:bg-actionBlue-800 dark:focus:bg-actionBlue-700 
                    // focus:bg-gradient-to-b focus:from-actionBlue-700 focus:to-actionBlue-800 
                    // dark:focus:bg-gradient-to-b dark:focus:from-actionBlue-800 dark:focus:to-actionBlue-900 
                    // focus:border-actionBlue-800 dark:focus:border-actionBlue-900 
                    // focus:outline-none focus:ring-2 focus:ring-actionBlue-400 dark:focus:ring-actionBlue-600"



                    // className="h-8 py-1 pl-[10px] pr-2 inline-block text-base rounded-md transition duration-300 
                    // text-white dark:text-gray-50 
                    // bg-blue-500 dark:bg-blue-600 bg-gradient-to-b from-blue-400 to-blue-600 
                    // border border-blue-600 dark:border-blue-700 
                    // hover:bg-blue-600 dark:hover:bg-blue-700 
                    // hover:bg-gradient-to-b hover:from-blue-500 hover:to-blue-700 
                    // dark:hover:bg-gradient-to-b dark:hover:from-blue-600 dark:hover:to-blue-800 
                    // hover:border-blue-700 dark:hover:border-blue-800 
                    // active:bg-blue-700 dark:active:bg-blue-800 active:bg-none 
                    // active:border-blue-800 dark:active:border-blue-900 
                    // active:shadow-inner dark:active:shadow-[inset_0_2px_4px_#00000026] 
                    // focus:bg-blue-600 dark:focus:bg-blue-700 
                    // focus:bg-gradient-to-b focus:from-blue-500 focus:to-blue-700 
                    // dark:focus:bg-gradient-to-b dark:focus:from-blue-600 dark:focus:to-blue-800 
                    // focus:border-blue-800 dark:focus:border-blue-900 
                    // focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600"
                    href={project.githubLink}
                    target="_blank"
                    title={PageTextContent.githubtitle}
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
            </div>

            <div
                className="project-mobile-description"
            >
                <h3 className={`mt-6 mb-4 md:text-3xl sm:text-2xl text-xl font-bold ${styles.headlineTextColor}`}>
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