import { placeholderProfile } from "../assets"
import { TextContent } from "../constants"
import useSettings from "../hooks/useSettings"
import { heroStyles, styles } from "../styles"
import { CtaButton, Button } from "./ui"

const HeroGridMobile = () => {

    const { color, lang } = useSettings();

    const PageTextContent = lang === "en" ? TextContent.english : TextContent.german;

    const bgColorClass900 = `bg-action${color}-900`;
    const textColorClass900 = `text-action${color}-900`;

    return (
        <section className="hero-section-mobile relative w-full">
            <div className="hero-background absolute inset-0 overflow-hidden pt-48">
                <div className="max-container max-w-[1920px] min-w-[320px] h-full mx-auto">
                    <div className={`w-full h-1/2 ${styles.gridTablet} justify-items-center`}>
                        <div className={`relative col-start-2 col-end-8`}>
                            <div className={`${heroStyles.heroImgHeight} ${heroStyles.heroImgWidth} rounded-bl-full rounded-br-full rotate-45 ${bgColorClass900}`} />
                            <div className={`rect-corner absolute bottom-1/2 left-1/2 -translate-x-1/2 origin-bottom rotate-45 w-full h-[1500px] ${bgColorClass900}`} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero-content relative pt-48">
                <div className="max-container max-w-[1920px] min-w-[320px] h-full mx-auto">
                    <div className={`mb-16 w-full ${styles.gridTablet} justify-items-center`}>
                        <div className={`hero-img-container col-start-2 col-end-8`}>
                            <img 
                                src={placeholderProfile} 
                                alt="" 
                                className={`${heroStyles.heroImgHeight} ${heroStyles.heroImgWidth}`}
                            />
                        </div>
                    </div>
                    <div className={`w-full ${styles.gridTablet} justify-items-center`}>
                        <div className={`hero-content col-start-2 col-end-8`}>
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

export default HeroGridMobile