
import useDynamicClasses from "../hooks/useDynamicClasses"
import { Button, CtaButton } from "./ui";
import { placeholderProfile } from "../assets";
import { styles } from "../styles";

const Hero = () => {
    const { PageTextContent } = useDynamicClasses();

    return (
        <section
            id="hero"
            className={`w-full lg:py-32 md:py-24 pb-12 pt-24`}
        >
            <div
                id="hero-content"
                className={`${styles.maxSiteWidth} mx-auto md:px-6 px-4 grid items-center gap-6 lg:grid-cols-2 lg:gap-10`}
            >
                <div
                    id="hero-text"
                    className="mx-auto space-y-4 order-1 lg:-order-1"
                >
                    <h1
                        className={`text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl ${styles.headlineTextColor}`}
                    >
                        {PageTextContent.firstName} {PageTextContent.lastName}
                    </h1>
                    <h2
                        className={`text-xl font-medium ${styles.primaryTextColor}`}
                    >
                        {PageTextContent.jobTitle}
                    </h2>
                    <p
                        className={`${styles.maxContainer} ${styles.primaryFontSize} ${styles.primaryTextColor}`}
                    >
                        {PageTextContent.heroSubText1}
                        Frontend
                        {PageTextContent.heroSubText2}
                    </p>
                    <div
                        className="flex flex-col gap-2 min-[400px]:flex-row"
                    >
                        <Button
                            type="button"
                        >
                            Resume
                        </Button>
                        <CtaButton tag="link" href={"#contact"}>
                            {PageTextContent.contact}
                        </CtaButton>
                    </div>
                </div>
                <div
                    id="hero-img"
                >
                    <img
                        className="mx-auto aspect-[3/2] overflow-hidden rounded-xl object-cover object-center border-2"
                        src={placeholderProfile}
                        alt=""
                        width={600}
                        height={400}
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero