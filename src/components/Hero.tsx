import { useRef, useState, useEffect, useContext } from "react";
import { placeholderProfile } from "../assets";
import { styles } from "../styles";
import useWindowSize from "../hooks/useWindowSize";
import { TextContent } from "../constants";
import { SettingsContext } from "../context/SettingsProvider";

const Hero = () => {
    const windowSize = useWindowSize();
    const isMobile = windowSize.width && windowSize.width < 1024;
    const ref = useRef<HTMLDivElement>(null);
    const [rectStyle, setRectStyle] = useState<React.CSSProperties>({
        position: "absolute",
        transformOrigin: "bottom left", //"top left"
        transform: "rotate(45deg)",
        height: "0px", //default
        width: "50px",
        bottom: "0px",
        //top: "0px", // default
        left: "0px", // default
    });
    const {lang, color} = useContext(SettingsContext);
    const bgColorClass900 = `bg-action${color}-900`;
    const borderColorClass900 = `border-action${color}-900`;
    const textColorClass900 = `text-action${color}-900`;

    useEffect(() => {
        const handleResize = () => {
            if (!ref?.current?.clientHeight) {
                return;
            }
            setRectStyle(prev => {
                const newState = { ...prev };
                const refHeight = ref?.current?.clientHeight;
                const parentHeight = ref?.current?.parentElement?.clientHeight;
                const parentWidth = ref?.current?.parentElement?.clientWidth;
                //const newTop = parentHeight! * 0.5 - refHeight! * Math.sqrt(2) * 0.5 + 1;
                //const newBottom = refHeight! + ((refHeight! * Math.sqrt(2)) - refHeight!)*0.5 -1;
                const newLeft = parentWidth! * 0.5 - 1;
                const newHeight = refHeight;
                const newWidth = parentWidth! * Math.sqrt(2) * 0.5;
                //newState["top"] = `${newTop}px`;
                //newState["bottom"] = `${newBottom}px`;
                newState["left"] = `${newLeft}px`;
                newState["width"] = `${newHeight}px`; //switching height and width on purpose
                newState["height"] = `${newWidth}px`;

                if(isMobile) {
                    const newBottom = refHeight! + ((refHeight! * Math.sqrt(2)) - refHeight!)*0.5 - 1;
                    newState["bottom"] = `${newBottom}px`;
                } else {
                    const newBottom = parentHeight! * 0.5 + refHeight! * Math.sqrt(2) * 0.5 - 1;
                    newState["bottom"] = `${newBottom}px`;
                }
                return newState;
            });
        }

        window.addEventListener("resize", handleResize);

        //handleResize();

        setTimeout(
            ()=>{window.dispatchEvent(new Event('resize'));},
            1
        );

        return () => window.removeEventListener("resize", handleResize);
    }, [isMobile])

    return (
        <section className="w-full lg:h-screen pb-16 flex lg:flex-row-reverse flex-col items-center">
            <div
                className={`${styles.heroImgSection} relative w-full overflow-hidden`}
            >
                <div 
                    ref={ref}
                    className={`absolute lg:w-2/3 lg:bottom-[50%] bottom-0 left-[50%] -translate-x-1/2 lg:translate-y-1/2 rounded-bl-full rounded-br-full rotate-45 ${bgColorClass900}`}
                >
                    <img 
                        src={placeholderProfile} 
                        alt="" 
                        className={`${styles.heroImg} rounded-full -rotate-45`} />
                </div>
                <div 
                    style={rectStyle}
                    className={`${bgColorClass900} border-[1px] ${borderColorClass900}`}
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
                    <button className="sm:px-6 px-3 py-[8px] border-4 rounded dark:text-darkTextPrimary text-textPrimary dark:border-darkTextPrimary border-textPrimary text-xl font-bold">
                        Resume
                    </button>
                    <a href="" className={`ml-5 sm:px-6 px-3 py-[13px] rounded ${bgColorClass900} dark:text-darkTextPrimary text-textPrimary text-xl font-bold`}>
                        {lang === "de" ? TextContent.german.contact : TextContent.english.contact}
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero