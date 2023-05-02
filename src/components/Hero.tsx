import { useRef, useState, useEffect } from "react";
import { placeholderProfile } from "../assets";

const Hero = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [rectStyle, setRectStyle] = useState<React.CSSProperties>({
        position: "absolute",
        transformOrigin: "top left",
        transform: "rotate(-45deg)",
        height: "0px", //default
        width: "50px",
        top: "0px", // default
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
                const newTop = parentHeight! * 0.5 - refHeight! * Math.sqrt(2) * 0.5 + 1;
                const newLeft = parentWidth! * 0.5 - 1;
                const newHeight = refHeight;
                const newWidth = parentHeight! * Math.sqrt(2) * 0.5;
                newState["top"] = `${newTop}px`;
                newState["left"] = `${newLeft}px`;
                newState["height"] = `${newHeight}px`;
                newState["width"] = `${newWidth}px`;
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
        <section className="w-full h-screen">
            <div
                className="relative w-full min-h-[600px] h-0.5 overflow-hidden"
            >
                <div 
                    ref={ref}
                    className="absolute bg-action top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 rounded-bl-full rounded-br-full rotate-45"
                >
                    <img src={placeholderProfile} alt="" className="rounded-full -rotate-45" />
                </div>
                <div 
                    style={rectStyle}
                    className="bg-action border-2 border-action"
                />
            </div>
        </section>
    )
}

export default Hero