import { useRef, useState, useEffect } from "react";
import { placeholderProfile } from "../assets";
import { styles } from "../styles";
import useWindowSize from "../hooks/useWindowSize";

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
        <section className="w-full lg:h-screen mb-32 flex lg:flex-row-reverse flex-col items-center">
            <div
                className={`${styles.heroImgSection} relative w-full overflow-hidden`}
            >
                <div 
                    ref={ref}
                    className="absolute lg:w-2/3 bg-actionOrange-900 lg:bottom-[50%] bottom-0 left-[50%] -translate-x-1/2 lg:translate-y-1/2 rounded-bl-full rounded-br-full rotate-45"
                >
                    <img 
                        src={placeholderProfile} 
                        alt="" 
                        className={`${styles.heroImg} rounded-full -rotate-45`} />
                </div>
                <div 
                    style={rectStyle}
                    className="bg-actionOrange-900 border-[1px] border-actionOrange-900"
                />
            </div>

            <div className={`${styles.heroTextSection} ${styles.heroTextSectionPadding}`}>

                <h2 className={`${styles.heroHeadText} mb-4`}>
                    Hi, Ich bin <span className="text-actionOrange-900">Yannic</span>
                </h2>
                <p className={`${styles.heroSubText}`}>angehender Webentwickler mit Fokus auf dem <span className="text-actionOrange-900">Frontend.</span> Mit den neuesten Technologien werde ich ihre Designs zum Leben erwecken. </p>

                <div className="mt-12">
                    <button className="sm:px-6 px-3 py-[8px] border-4 rounded border-textPrimary text-xl font-bold">
                        Resume
                    </button>
                    <a href="" className="ml-5 sm:px-6 px-3 py-[13px] rounded bg-actionOrange-900 text-xl font-bold">
                        Kontakt
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero