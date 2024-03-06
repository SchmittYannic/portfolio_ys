import { placeholderProfile } from "../assets";
import { TextContent } from "../constants";
import useSettings from "../hooks/useSettings";
import { heroStyles } from "../styles";

const HeroGrid = () => {

    const {lang, color} = useSettings();

    const PageTextContent = lang === "en" ? TextContent.english : TextContent.german;

    const bgColorClass900 = `bg-action${color}-900`;
    const textColorClass900 = `text-action${color}-900`;
    const beforeColorClass = `before:bg-action${color}-900`;

    return (
        <section className="hero-section relative w-full lg:h-screen">
            <div className="hero-background absolute inset-0 overflow-hidden">
                <div className="max-container max-w-[1920px] min-w-[320px] h-full mx-auto">
                    <div className="w-full h-full grid gap-[24px] grid-cols-12 items-center">
                        <div className={`relative order-last justify-self-end ${heroStyles.heroImgPosition}`}>
                            <div className={`${heroStyles.heroImgHeight} ${heroStyles.heroImgWidth} rounded-bl-full rounded-br-full rotate-45 ${bgColorClass900}`} />
                            <div className={`rect-corner absolute bottom-1/2 left-1/2 -translate-x-1/2 origin-bottom rotate-45 w-full h-[1500px] ${bgColorClass900}`} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-content absolute inset-0">
                <div className="max-container max-w-[1920px] min-w-[320px] h-full mx-auto border-2">
                    <div className="w-full h-full grid gap-[24px] grid-cols-12 items-center">
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
                                <button
                                    type="button"
                                    className={`relative p-1 rounded dark:bg-darkTextPrimary bg-textPrimary before:absolute before:top-0 before:right-0 before:h-full before:w-0 before:rounded ${beforeColorClass} before:ease-button before:duration-1500 hover:before:w-full hover:before:left-0 hover:before:right-unset`}
                                >
                                    <p className="relative z-10 px-3 py-[9px] text-xl font bold dark:bg-darkBase bg-base dark:text-darkTextPrimary text-textPrimary">
                                        Resume
                                    </p>
                                </button>
                                <a 
                                    href="#contact"
                                    className={`relative ml-5 px-3 py-[13px] rounded ${bgColorClass900} dark:text-darkTextPrimary text-textPrimary text-xl font-bold transition-[color] ease-button duration-1500 dark:hover:text-textPrimary hover:text-darkTextPrimary before:absolute before:top-0 before:right-0 before:w-0 before:h-full before:rounded dark:before:bg-darkTextPrimary before:bg-textPrimary before:ease-button before:duration-1500 
                                    before:z-0 hover:before:w-full hover:before:left-0 hover:before:right-unset`}
                                >
                                    <p className="relative z-10">
                                        {PageTextContent.contact}
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroGrid