import { ReactElement, useContext, useState, useEffect, useRef } from "react"
import Tilt from "react-parallax-tilt"

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

const ProjectDescription = ({ text }: {text: string}): ReactElement => {
    const { lang } = useContext<UseSettingsContextType>(SettingsContext);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const expandText = lang === "de" ? TextContent.german.expandButton : TextContent.english.expandButton;
    const collapseText = lang === "de" ? TextContent.german.collapseButton : TextContent.english.collapseButton;

    return (
        <>
            {/* First div needs to have z-Index of 20 so it can be overlapped by the radiant Gradient of the ProjectCard */}
            <div 
                className={`${isOpen ? "max-h-[1000px]" : "max-h-20"} px-10 relative z-20 overflow-hidden transition-[max-height] duration-200`}
            >
                <p 
                    className="dark:text-darkTextPrimary text-textPrimary"
                >
                    {text}
                </p>
                <div className={`absolute bottom-0 w-[calc(100%-5rem)] h-20 ${isOpen ? "bg-transparent" : "bg-gradient-to-t"} dark:from-darkBaseTertiary from-baseTertiary from-0% to-transparent to-100%`} />
            </div>

            {/* Second div needs to have z-Index of 40 to make sure the Button can still be clicked */}
            <div className="px-10 w-full mt-3 mb-8 relative z-40 flex items-center justify-center">
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
    const { lang, color } = useContext<UseSettingsContextType>(SettingsContext);
    const description: string = lang === "de" ? project.description_de : project.description_en;

    const ringColorClass: string = `ring-action${color}-900/30`;

    return (
        <Tilt
            scale={1}
            transitionSpeed={250}
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}  
        >
            <div className="projectcard lg:max-w-none max-w-[410px] relative rounded-xl dark:bg-darkBaseTertiary/10 bg-baseTertiary/10  shadow-lg before:absolute before:top-0 before:left-0 before:h-full before:w-full before:rounded-xl before:content-[''] before:z-30 before:opacity-0 before:transition-opacity before:duration-500 before:hover:opacity-100 after:absolute after:top-0 after:left-0 after:h-full after:w-full after:rounded-xl after:content-[''] after:z-10 after:opacity-0 after:transition-opacity after:duration-500 group-hover:after:opacity-100">
                {/* card background div. z-Index needs to be between ::before and ::after of parent */}
                <div className="inset-[1px] absolute z-20 rounded-xl dark:bg-darkBaseTertiary bg-baseTertiary" />
                
                {/* project image and title container. z-Index needs to be higher than all for links to be clickable */}
                <div className="px-10 pt-10 relative z-40">
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
                                className="group outline-none absolute top-4 right-20"
                                href={project.liveLink} 
                                target="_blank"
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
                        }

                        <a 
                            className="group outline-none"
                            href={project.githubLink} 
                            target="_blank"
                        >
                            <img 
                                className="absolute top-4 right-4 w-12 h-12 rounded-full hover:scale-125 group-focus:ring-4 ring-black/30 ring-offset-2 transition-[transform] duration-500 ease-linear"
                                src={githubLogo} 
                                alt="Github Logo"
                            />
                        </a>
                    </div>

                    <h4 className="my-10 text-2xl text-center dark:text-darkTextPrimary text-textPrimary">
                        {lang === "de" ? project.title_de : project.title_en}
                    </h4>
                </div>

                <ProjectDescription text={description} />

                <div className="px-10 pb-10 relative z-40">
                    <Tags tags={project.tags} />
                </div>
            </div>
        </Tilt>
    )
}


const Projects = () => {
    const { lang } = useContext<UseSettingsContextType>(SettingsContext);
    const projectsRef: React.MutableRefObject<null | HTMLElement> = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            for (const card of document.getElementsByClassName("projectcard")) {
                const rect = card.getBoundingClientRect(),
                    x = e.clientX - rect.left,
                    y = e.clientY - rect.top
                ;

                if (!(card instanceof(HTMLDivElement))) return
                card.style.setProperty("--mouse-x", `${x}px`);
                card.style.setProperty("--mouse-y", `${y}px`);
            }
        }
        projectsRef.current?.addEventListener("mousemove", handleMouseMove)

        return () => projectsRef.current?.removeEventListener("mousemove", handleMouseMove)
    }, [projectsRef])

    return (
        <section id="projects" className="group w-full py-16" ref={projectsRef}>
            <h2 className="mt-8 mb-16 text-5xl text-center dark:text-darkTextPrimary text-textPrimary">
                {lang === "de" ? TextContent.german.projectsHead : TextContent.english.projectsHead}
            </h2>
            
            <div className="lg:px-20 px-2 grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 justify-items-center gap-4">
                {projects.map((project, idx) => (
                    <ProjectCard
                        key={idx}
                        project={project}
                    />
                ))}
            </div>
        </section>
    )
}

export default Projects