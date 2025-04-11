import useWindowSize from "../hooks/useWindowSize";
import Hero from "./Hero"
import Projects from "./Projects"
import ProjectsMobile from "./ProjectsMobile";
import About from "./About";
import Contact from "./Contact";
import { navbarHeight } from "../constants";

const Portfolio = () => {

    const windowSize = useWindowSize();

    const isLgScreen = windowSize.width && windowSize.width >= 1024;

    const navbarHeightClass: string = `-mt-[${navbarHeight}px]`;

    return (
        <main id="portfolio" className={`${navbarHeightClass}`}>
            <Hero />
            {isLgScreen ? <Projects /> : <ProjectsMobile />}
            <About />
            <Contact />
        </main>
    )
}

export default Portfolio