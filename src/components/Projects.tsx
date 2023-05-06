import { ReactElement, useContext, useState } from "react"
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

                <a href={project.githubLink} target="_blank">
                    <img 
                        className="absolute top-4 right-4 w-12 h-12 hover:scale-125"
                        src={githubLogo} 
                        alt="Github Logo"
                    />
                </a>

                {project.liveLink &&
                    <a href={project.liveLink} target="_blank">
                        <div 
                            className="absolute top-4 right-20 w-12 h-12 rounded-full flex items-center justify-center bg-red-700 hover:scale-125"
                        >
                            <img 
                                className="w-4 h-4 translate-x-0.5"
                                src={playButton} 
                                alt="Live version" 
                            />
                        </div>
                    </a>
                }
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

    return (
        <section id="projects" className="w-full mb-32">
            <h2 className="mb-16 text-5xl text-center dark:text-darkTextPrimary text-textPrimary">
                {lang === "de" ? TextContent.german.projectsHead : TextContent.english.projectsHead}
            </h2>

            <div className="lg:px-20 grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 justify-items-center">
                {projects.map(project => (
                    <ProjectCard project={project} />
                ))}
            </div>
        </section>
    )
}

export default Projects