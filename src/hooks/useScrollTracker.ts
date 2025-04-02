import { useEffect, useState, useRef } from "react"
import useScrollPosition from "./useScrollPosition"
import { ScrollPositionType } from "../utils/types";

type userScrollingActionType = "up" | "down" | "left" | "right" | "idle"

const useScrollTracker = () => {
    const { scrollY, scrollX } = useScrollPosition();
    const previousScrollPosition = useRef<ScrollPositionType>({
        scrollY: undefined,
        scrollX: undefined,
    });
    const [userScrollingAction, setUserScrollingAction] = useState<userScrollingActionType>("idle");

    useEffect(() => {
        const prevScrollY = previousScrollPosition.current.scrollY;
        const prevScrollX = previousScrollPosition.current.scrollX

        if (prevScrollY && scrollY && prevScrollY >= 0 && prevScrollY < scrollY) {
            setUserScrollingAction("down");
        } else if (prevScrollY && scrollY && prevScrollY > scrollY) {
            setUserScrollingAction("up");
        } else if (prevScrollX && scrollX && prevScrollX < scrollX) {
            setUserScrollingAction("right");
        } else if (prevScrollX && scrollX && prevScrollX > scrollX) {
            setUserScrollingAction("left");
        } else {
            setUserScrollingAction("idle");
        }

        previousScrollPosition.current = {
            scrollY: scrollY,
            scrollX: scrollX,
        };
    }, [scrollY, scrollX]);

    return userScrollingAction
}

export default useScrollTracker