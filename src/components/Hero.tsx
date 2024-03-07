import { placeholderProfile } from "../assets"
import { TextContent } from "../constants";
import useSettings from "../hooks/useSettings";
import { Button, CtaButton } from "./ui";
import { heroStyles, styles } from "../styles";


const Hero = () => {

    const {lang, color} = useSettings();

    const PageTextContent = lang === "en" ? TextContent.english : TextContent.german;

    const bgColorClass900 = `bg-action${color}-900`;
    const textColorClass900 = `text-action${color}-900`;

    return (
        <section className="hero-section relative w-full xl:h-screen xl:max-h-[1400px] xl:min-h-[900px]">
            <div className="hero-background absolute inset-0 overflow-hidden">
                <div className={`max-container ${styles.maxContainer} h-full ${heroStyles.heroPaddingTop}`}>
                    <div className="w-full h-full flex xl:flex-row-reverse flex-col items-center xl:justify-between">
                        <div className="hero-img-container xl:w-[50%] flex justify-center">
                            <div className={`relative ${heroStyles.heroImgWidth} ${heroStyles.heroImgHeight}`}>
                                <div className={`img-background absolute inset-0 rounded-bl-full rounded-br-full rotate-45 ${bgColorClass900}`} />
                                <div className={`rect-corner absolute bottom-1/2 right-0 left-0 origin-bottom rotate-45 h-[1500px] ${bgColorClass900}`} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero-content xl:absolute relative inset-0">
                <div className={`max-container ${styles.maxContainer} h-full ${heroStyles.heroPaddingTop}`}>
                    <div className={`w-full h-full flex xl:flex-row-reverse flex-col items-center xl:justify-between ${heroStyles.heroImgTextGap}`}>
                        <div className="hero-img-container xl:w-[50%] flex justify-center">
                            <img 
                                src={placeholderProfile} 
                                alt="" 
                                className={`${heroStyles.heroImgWidth} ${heroStyles.heroImgHeight}`}
                            />
                        </div>

                        <div className="hero-text-container xl:w-[50%]">
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

export default Hero