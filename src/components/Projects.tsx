import { ReactElement, useContext, useState, useEffect, useRef } from "react"
import { SettingsContext } from "../context/SettingsProvider";
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

const ProjectDescription = ({ text }: {text: string}): ReactElement => {
    const { lang } = useContext(SettingsContext);
    const [isOpen, setIsOpen] = useState(false);

    const expandText = lang === "de" ? TextContent.german.expandButton : TextContent.english.expandButton;
    const collapseText = lang === "de" ? TextContent.german.collapseButton : TextContent.english.collapseButton;

    return (
        <>
            <div 
                className={`${isOpen ? "max-h-[1000px]" : "max-h-20"} relative overflow-hidden transition-[max-height] duration-200`}
            >
                <p 
                    className="dark:text-darkTextPrimary text-textPrimary"
                >
                    {text}
                </p>
                <div className={`absolute bottom-0 w-full h-20 ${isOpen ? "bg-transparent" : "bg-gradient-to-t"} dark:from-darkBase from-base from-0% to-transparent to-100%`} />
            </div>
            <div className="w-full mt-3 mb-8 flex items-center justify-center dark:bg-darkBase bg-base">
                <button 
                    type="button"
                    className="dark:text-darkTextPrimary text-textPrimary"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? collapseText : expandText}
                </button>
            </div>
        </>
    )
}

const ProjectCard = ({ project }: {project: ProjectType}): ReactElement => {
    const { lang } = useContext(SettingsContext);
    const description = lang === "de" ? project.description_de : project.description_en;

    return (
        <div className="p-10 lg:max-w-none max-w-[410px] hover:scale-105 hover:border-2 border-transparent rounded-xl hover:shadow-lg">
            <div className="relative">
                <img 
                    className="rounded-xl w-full"
                    src={project.image} 
                    alt={`${lang === "de" 
                        ? `Bild des Projects ${project.title_de}` 
                        : `Image of the project ${project.title_en}`}`}
                />

                {project.liveLink &&
                    <a 
                        className="group outline-none"
                        href={project.liveLink} 
                        target="_blank"
                    >
                        <div 
                            className="absolute top-4 right-20 w-12 h-12 rounded-full flex items-center justify-center bg-red-700 hover:scale-125 group-focus:ring-4 ring-red-700/30 ring-offset-2"
                        >
                            <img 
                                className="w-5 h-5 translate-x-0.5"
                                src={playButton} 
                                alt="Live version" 
                            />
                        </div>
                    </a>
                }

                <a 
                    className="group outline-none"
                    href={project.githubLink} 
                    target="_blank"
                >
                    <img 
                        className="absolute top-4 right-4 w-12 h-12 rounded-full hover:scale-125 group-focus:ring-4 ring-black/30 ring-offset-2"
                        src={githubLogo} 
                        alt="Github Logo"
                    />
                </a>
            </div>

            <h4 className="my-10 text-2xl text-center dark:text-darkTextPrimary text-textPrimary">
                {lang === "de" ? project.title_de : project.title_en}
            </h4>

            <ProjectDescription text={description} />

            <Tags tags={project.tags} />
        </div>
    )
}

const Projects = () => {
    const { lang } = useContext(SettingsContext);
    const projectsRef: React.MutableRefObject<null | HTMLDivElement> = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            for (const card of document.getElementsByClassName("projectcard")) {
                const rect = card.getBoundingClientRect(),
                    x = e.clientX - rect.left,
                    y = e.clientY - rect.top;
    
                card.style.setProperty("--mouse-x", `${x}px`);
                card.style.setProperty("--mouse-y", `${y}px`);
            }
        }
        projectsRef.current?.addEventListener("mousemove", handleMouseMove)

        return () => projectsRef.current?.removeEventListener("mousemove", handleMouseMove)
    }, [projectsRef])

    return (
        <section id="projects" className="w-full py-16">
            <h2 className="mt-8 mb-16 text-5xl text-center dark:text-darkTextPrimary text-textPrimary">
                {lang === "de" ? TextContent.german.projectsHead : TextContent.english.projectsHead}
            </h2>

            {/* <div className="lg:px-20 grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 justify-items-center">
                {projects.map((project, idx) => (
                    <ProjectCard 
                        key={idx}
                        project={project} 
                    />
                ))}
            </div> */}

            <div ref={projectsRef} className="projects group lg:px-20 grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 justify-items-center gap-2 bg-[rgb(20,20,20)]">
                {projects.map((project, idx) => (
                    <ProjectCard2
                        key={idx}
                        project={project}
                    />
                ))}
            </div>
        </section>
    )
}

const ProjectCard2 = ({ project }) => {
    const { lang } = useContext(SettingsContext);
    const description = lang === "de" ? project.description_de : project.description_en;

    return (
        <div className="projectcard relative rounded-xl bg-[rgba(255,255,255,0.1)] before:absolute before:top-0 before:left-0 before:h-full before:w-full before:rounded-xl before:content-[''] before:z-30 before:opacity-0 before:transition-opacity before:duration-500 before:hover:opacity-100 after:absolute after:top-0 after:left-0 after:h-full after:w-full after:rounded-xl after:content-[''] after:z-10 after:opacity-0 after:transition-opacity after:duration-500 group-hover:after:opacity-100">
            <div className="inset-1 absolute z-20 rounded-xl bg-[rgb(25,25,25)]">
            </div>
            
            <div className="p-10 relative z-40">
                <div className="relative">
                    <img 
                        className="rounded-xl w-full"
                        src={project.image} 
                        alt={`${lang === "de" 
                            ? `Bild des Projects ${project.title_de}` 
                            : `Image of the project ${project.title_en}`}`}
                    />

                    {project.liveLink &&
                        <a 
                            className="group outline-none"
                            href={project.liveLink} 
                            target="_blank"
                        >
                            <div 
                                className="absolute top-4 right-20 w-12 h-12 rounded-full flex items-center justify-center bg-red-700 hover:scale-125 group-focus:ring-4 ring-red-700/30 ring-offset-2"
                            >
                                <img 
                                    className="w-5 h-5 translate-x-0.5"
                                    src={playButton} 
                                    alt="Live version" 
                                />
                            </div>
                        </a>
                    }

                    <a 
                        className="group outline-none"
                        href={project.githubLink} 
                        target="_blank"
                    >
                        <img 
                            className="absolute top-4 right-4 w-12 h-12 rounded-full hover:scale-125 group-focus:ring-4 ring-black/30 ring-offset-2"
                            src={githubLogo} 
                            alt="Github Logo"
                        />
                    </a>
                </div>

                <h4 className="my-10 text-2xl text-center dark:text-darkTextPrimary text-textPrimary">
                    {lang === "de" ? project.title_de : project.title_en}
                </h4>

                <ProjectDescription text={description} />

                <Tags tags={project.tags} />
            </div>
        </div>
    )
}

export default Projects