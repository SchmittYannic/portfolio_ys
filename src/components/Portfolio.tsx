import useWindowSize from "../hooks/useWindowSize";
import Hero from "./Hero"
import Projects from "./Projects"
import ProjectsMobile from "./ProjectsMobile";

const Portfolio = () => {

    const windowSize = useWindowSize();

    const isLgScreen = windowSize.width && windowSize.width >= 1024;

    return (
        <main id="portfolio">
            <Hero />
            {isLgScreen ? <Projects /> : <ProjectsMobile />}
        </main>
    )
}

export default Portfolio