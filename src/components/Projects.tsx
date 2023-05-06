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
    const [isOpen, setIsOpen] = useState(false);  

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
            <div className="w-full mt-3 mb-8 flex items-center justify-center bg-darkBase">
                <button 
                    className="dark:text-darkTextPrimary text-textPrimary"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    Read more
                </button>
            </div>
        </>
    )
}

const ProjectCard = ({ project }: {project: ProjectType}): ReactElement => {
    const { lang } = useContext(SettingsContext);
    const title = lang === "de" ? project.title_de : project.title_en;
    const description = lang === "de" ? project.description_de : project.description_en;

    return (
        <div className="p-10 max-w-[410px]">
            <div className="relative">
                <img 
                    className="rounded-xl w-full"
                    src={project.image} 
                    alt={`${lang === "de" 
                        ? `Bild des Projects ${project.title_de}` 
                        : `Image of the project ${project.title_en}`}`}
                />
                <img 
                    className="absolute top-2 right-2 w-8 h-8 hover:scale-125"
                    src={githubLogo} 
                    alt="Github Logo" 
                />
                <div className="absolute top-2 right-12 w-8 h-8 rounded-full flex items-center justify-center bg-red-700 hover:scale-125">
                    <img 
                        className="w-4 h-4 translate-x-0.5"
                        src={playButton} 
                        alt="Live version" 
                    />
                </div>
            </div>

            <h4 className="my-6 text-2xl text-center dark:text-darkTextPrimary text-textPrimary">
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

            <div className="lg:px-20 flex lg:flex-row flex-col lg:flex-wrap lg:items-start items-center justify-around gap-3">
                {projects.map(project => (
                    <ProjectCard project={project} />
                ))}
            </div>
        </section>
    )
}

export default Projects