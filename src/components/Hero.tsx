
import useDynamicClasses from "../hooks/useDynamicClasses"
import useSettings from "../hooks/useSettings";
import { LinkButton, CtaButton } from "./ui";
import HeroWebGL from "./HeroWebGL";
import { cssLogoGrid, htmlLogoGrid, jsLogoGrid } from "../assets";
import HeroBg from "./HeroBg";
import { styles } from "../styles";

const Hero = () => {
    const { PageTextContent } = useDynamicClasses();
    const { lang } = useSettings();

    const lebenslaufLink = String(import.meta.env.VITE_PERSONAL_LEBENSLAUF_LINK);
    const cvLink = String(import.meta.env.VITE_PERSONAL_CV_LINK);

    const heroLink = lang === "en" ? cvLink : lebenslaufLink;

    const firstName = String(import.meta.env.VITE_FIRSTNAME);
    const lastName = String(import.meta.env.VITE_LASTNAME);

    return (
        <section
            id="hero"
            className={`relative w-full lg:py-32 md:py-24 pb-12 pt-24 overflow-hidden`}
        >
            <div
                id="hero-background"
                className={`lg:block hidden overflow-hidden`}
            >
                <HeroBg />
            </div>
            <div
                id="hero-content"
                className={`${styles.maxSiteWidth} relative mx-auto md:px-6 px-4 grid items-center gap-6 lg:grid-cols-2 lg:gap-0 z-10`}
            >
                <div
                    id="hero-text"
                    className="mx-auto space-y-4 order-1 lg:-order-1"
                >
                    <h1
                        className={`text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl ${styles.headlineTextColor}`}
                    >
                        {firstName} {lastName}
                    </h1>
                    <h2
                        className={`text-xl font-medium ${styles.primaryTextColor}`}
                    >
                        {PageTextContent.jobTitle}
                    </h2>
                    <p
                        className={`${styles.maxContainer} ${styles.primaryFontSize} ${styles.primaryTextColor}`}
                    >
                        {PageTextContent.heroHeadText}
                    </p>
                    <div
                        className="flex flex-col gap-2 min-[400px]:flex-row"
                    >
                        <LinkButton
                            href={heroLink}
                            target="_blank"
                        >
                            Resume
                        </LinkButton>
                        <CtaButton tag="link" href={"#contact"}>
                            {PageTextContent.contact}
                        </CtaButton>
                    </div>
                </div>
                <div
                    id="hero-img"
                    className="h-[400px] lg:block hidden"
                >
                    {/* <img
                        className="mx-auto aspect-[3/2] overflow-hidden rounded-xl object-cover object-center border-2"
                        src={}
                        alt=""
                        width={600}
                        height={400}
                    /> */}
                    <HeroWebGL grids={[
                        { grid: jsLogoGrid, x: 205, y: 70 },
                        { grid: htmlLogoGrid, x: 90, y: 130 },
                        { grid: cssLogoGrid, x: 350, y: 130 },
                    ]} />
                </div>
            </div>
        </section>
    )
}

export default Hero