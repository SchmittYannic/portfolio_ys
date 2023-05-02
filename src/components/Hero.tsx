import { useRef, useState, useEffect } from "react";
import { placeholderProfile } from "../assets";

const Hero = () => {
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
                const newBottom = refHeight! + ((refHeight! * Math.sqrt(2)) - refHeight!)*0.5 -1;
                const newLeft = parentWidth! * 0.5 - 1;
                const newHeight = refHeight;
                const newWidth = parentHeight! * Math.sqrt(2) * 0.5;
                //newState["top"] = `${newTop}px`;
                newState["bottom"] = `${newBottom}px`;
                newState["left"] = `${newLeft}px`;
                newState["width"] = `${newHeight}px`;
                newState["height"] = `${newWidth}px`;
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
    }, [])

    return (
        <section className="w-full mb-32">
            <div
                className="relative w-full min-h-[300px] mb-10 overflow-hidden"
            >
                <div 
                    ref={ref}
                    className="absolute bg-action bottom-0 left-[50%] -translate-x-1/2 rounded-bl-full rounded-br-full rotate-45"
                >
                    <img src={placeholderProfile} alt="" className="rounded-full -rotate-45" />
                </div>
                <div 
                    style={rectStyle}
                    className="bg-action border-[1px] border-action"
                />
            </div>

            <div className="px-10">

                <h2 className="text-3xl font-bold mb-4">
                    Hi, Ich bin <span className="text-action">Yannic</span>
                </h2>
                <p className="">angehender Webentwickler mit Fokus auf dem <span className="text-action">Frontend.</span> Mit den neuesten Technologien werde ich ihre Designs zum Leben erwecken. </p>

                <div className="mt-12">
                    <button className="px-3 py-[8px] border-4 rounded border-textPrimary">
                        Resume
                    </button>
                    <a href="" className="ml-5 px-3 py-[13px] rounded bg-action">
                        Kontakt
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero