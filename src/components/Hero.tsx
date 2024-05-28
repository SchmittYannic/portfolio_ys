
import useDynamicClasses from "../hooks/useDynamicClasses"
import { Button, CtaButton } from "./ui";
import { placeholderProfile } from "../assets";

const Hero = () => {
    const { PageTextContent } = useDynamicClasses();

    return (
        <section
            id="hero"
            className={`w-full py-12 md:py-24 lg:py-32`}
        >
            <div
                id="hero-wrapper"
                className={`max-w-[1400px] mx-auto grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10`}
            >
                <div
                    id="hero-text"
                    className="mx-auto space-y-4 order-1 lg:-order-1"
                >
                    <h1
                        className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl"
                    >
                        Yannic Schmitt
                    </h1>
                    <h2
                        className="text-xl font-medium text-gray-500 dark:text-gray-400"
                    >
                        Junior Web Developer
                    </h2>
                    <p
                        className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
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