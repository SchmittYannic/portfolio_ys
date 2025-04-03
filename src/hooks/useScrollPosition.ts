import { useEffect, useState } from "react"
import { ScrollPositionType } from "../utils/types";

const useScrollPosition = () => {
    const [currentScrollPosition, setCurrentScrollPosition] = useState<ScrollPositionType>({
        scrollY: window.scrollY,
        scrollX: window.scrollX,
    });

    useEffect(() => {
        let animationFrameId: number;

        const handleScroll = () => {
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
            animationFrameId = requestAnimationFrame(() => {
                setCurrentScrollPosition({
                    scrollY: window.scrollY,
                    scrollX: window.scrollX,
                });
            });
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return currentScrollPosition;
};

export default useScrollPosition;