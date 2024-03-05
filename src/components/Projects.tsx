import { useContext, useState } from "react";
import { SettingsContext, UseSettingsContextType } from "../context/SettingsProvider";
import { ProjectType, TagKeyType, TextContent, projects, tagData } from "../constants";

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

    const description = lang === "en" ? activeProject.description_en : activeProject.description_de;

    const bgColorClass900 = `bg-action${color}-900`;
    const borderColorClass200 = `border-action${color}-200`;

    return (
        <section id="projects" className="relative">
            <div className="projects-background absolute inset-0 flex flex-col justify-between">
                <div className={`w-full h-[200px] ${bgColorClass900}`} />
                <div className={`w-full h-[10px] ${bgColorClass900}`} />
            </div>
            <div className="projects-content relative max-w-[1920px] min-w-[320px] mx-auto lg:px-48 pb-8">
                <h2 className="pt-12 mb-12 text-5xl text-center dark:text-darkTextPrimary text-textPrimary">
                    {lang === "de" ? TextContent.german.projectsHead : TextContent.english.projectsHead}
                </h2>

                <div className="flex gap-8">
                    <div className="project-display w-[1024px]">
                        <div className="project-display-img-wrapper">
                            <img src={activeProject.image} alt="" className={`w-[1024px] h-[576px] border-2 ${borderColorClass200}`} />
                        </div>
                        <div className="project-description">
                            <h3 className="mt-8 mb-4 text-4xl dark:text-darkTextPrimary text-textPrimary">
                                {lang === "en" ? activeProject.title_en : activeProject.title_de}
                            </h3>
                        
                            <div className="mb-4 dark:text-darkTextPrimary text-textPrimary">
                                {description.map((paragraph, idx) => 
                                    <>
                                        <p 
                                            key={activeProject.title_en + idx}
                                            className="mb-2 text-lg dark:text-darkTextPrimary text-textPrimary"
                                        >
                                            {paragraph}
                                        </p>
                                    </>
                                )}
                            </div>

                            <Tags tags={activeProject.tags} />
                            
                        </div>
                    </div>
                    <div className={`projects-selection max-h-[576px] dark:bg-darkBase bg-base flex flex-col`}>
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