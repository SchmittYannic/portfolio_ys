import { placeholderProfile } from "../assets";
import { TextContent } from "../constants";
import useSettings from "../hooks/useSettings";
import { heroStyles, styles } from "../styles";
import { CtaButton, Button } from "./ui";

const HeroGrid = () => {

    const {lang, color} = useSettings();

    const PageTextContent = lang === "en" ? TextContent.english : TextContent.german;

    const bgColorClass900 = `bg-action${color}-900`;
    const textColorClass900 = `text-action${color}-900`;

    return (
        <section className="hero-section relative w-full h-screen max-h-[1400px] min-h-[620px]">
            <div className="hero-background absolute inset-0 overflow-hidden">
                <div className="max-container max-w-[1920px] min-w-[320px] h-full mx-auto">
                    <div className={`w-full h-full ${styles.grid}`}>
                        <div className={`relative order-last justify-self-end ${heroStyles.heroImgPosition}`}>
                            <div className={`${heroStyles.heroImgHeight} ${heroStyles.heroImgWidth} rounded-bl-full rounded-br-full rotate-45 ${bgColorClass900}`} />
                            <div className={`rect-corner absolute bottom-1/2 left-1/2 -translate-x-1/2 origin-bottom rotate-45 w-full h-[1500px] ${bgColorClass900}`} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-content absolute inset-0">
                <div className="max-container max-w-[1920px] min-w-[320px] h-full mx-auto">
                    <div className={`w-full h-full ${styles.grid}`}>
                        <div className={`hero-img-container order-last justify-self-end ${heroStyles.heroImgPosition}`}>
                            <img 
                                src={placeholderProfile} 
                                alt="" 
                                className={`${heroStyles.heroImgHeight} ${heroStyles.heroImgWidth}`}
                            />
                        </div>

                        <div className={`hero-content order-first ${heroStyles.heroTextPosition}`}>
                            <h2 className={`mb-4 dark:text-darkTextPrimary text-textPrimary ${heroStyles.heroHeadText}`}>
                                {PageTextContent.heroHeadText}
                                <span className={`${textColorClass900}`}>Yannic</span>
                            </h2>
                            <p className={`mb-12 ${heroStyles.heroSubTextMaxWidth} dark:text-darkTextPrimary text-textPrimary ${heroStyles.heroSubText}`}>
                                {PageTextContent.heroSubText1}
                                <span className={`${textColorClass900}`}>Frontend</span>
                                {PageTextContent.heroSubText2}
                            </p>
                            <div className="inline-flex">
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
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroGrid