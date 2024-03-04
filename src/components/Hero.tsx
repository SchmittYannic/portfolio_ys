import { useContext } from "react";
import { placeholderProfile } from "../assets";
import { TextContent } from "../constants";
import { styles } from "../styles";
import { UseSettingsContextType, SettingsContext } from "../context/SettingsProvider";

const Hero = () => {

    const {lang, color} = useContext<UseSettingsContextType>(SettingsContext);
    const bgColorClass900 = `bg-action${color}-900`;
    const borderColorClass900 = `border-action${color}-900`;
    const textColorClass900 = `text-action${color}-900`;


    return (
        <section className="hero-section relative w-full lg:h-screen lg:pt-0 pt-32">

            <div className="hero-background absolute inset-0 flex justify-end -z-1">
                <div className="lg:w-[50%] w-full flex items-center overflow-hidden">
                    <div className="max-w-[960px] w-full relative">
                        <div className={`img-background absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 ${styles.heroImgWidth} ${styles.heroImgHeight} rounded-bl-full rounded-br-full rotate-45 ${bgColorClass900}`} />
                        <div className={`rect-corner absolute bottom-[50%] left-[50%] ${styles.heroImgWidth} h-[1500px] -translate-x-1/2 origin-bottom rotate-45 ${bgColorClass900}`} />
                    </div>
                </div>
            </div>


            <div className="hero-content absolute inset-0">
                <div className="max-w-[1920px] min-w-[320px] h-full mx-auto flex lg:flex-row-reverse flex-col items-center">
                    <div className="hero-img-container w-[50%] flex justify-center">
                        <img 
                            src={placeholderProfile} 
                            alt="" 
                            className={`${styles.heroImgHeight} ${styles.heroImgWidth}`}
                        />
                    </div>


                    <div className={`${styles.heroTextSection} ${styles.heroTextSectionPadding}`}>

                        <h2 className={`${styles.heroHeadText} dark:text-darkTextPrimary text-textPrimary mb-4`}>
                            {lang === "de" ? TextContent.german.heroHeadText : TextContent.english.heroHeadText}<span className={`${textColorClass900}`}>Yannic</span>
                        </h2>
                        <p className={`${styles.heroSubText} dark:text-darkTextPrimary text-textPrimary`}>
                            {lang === "de" ? TextContent.german.heroSubText1 : TextContent.english.heroSubText1}
                            <span className={`${textColorClass900}`}>Frontend</span>
                            {lang === "de" ? TextContent.german.heroSubText2 : TextContent.english.heroSubText2}
                        </p>

                        <div className="mt-12">
                            <button 
                                type="button"
                                className="sm:px-6 px-3 py-[8px] border-4 rounded dark:text-darkTextPrimary text-textPrimary dark:border-darkTextPrimary border-textPrimary text-xl font-bold">
                                Resume
                            </button>
                            <a href="#contact" className={`ml-5 sm:px-6 px-3 py-[13px] rounded ${bgColorClass900} dark:text-darkTextPrimary text-textPrimary text-xl font-bold`}>
                                {lang === "de" ? TextContent.german.contact : TextContent.english.contact}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero