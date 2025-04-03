import { useEffect, useState, useRef } from "react"
import useScrollPosition from "./useScrollPosition"
import { ScrollPositionType } from "../utils/types";

type UserScrollingActionType = "up" | "down" | "left" | "right" | "idle"

const useScrollTracker = () => {
    const { scrollY, scrollX } = useScrollPosition();
    const previousScrollPosition = useRef<ScrollPositionType>({ scrollY: 0, scrollX: 0 });
    const [userScrollingAction, setUserScrollingAction] = useState<UserScrollingActionType>("idle");

    useEffect(() => {
        const { scrollY: prevScrollY, scrollX: prevScrollX } = previousScrollPosition.current;

        let newAction: UserScrollingActionType = "idle";

        if (prevScrollY !== undefined && prevScrollX !== undefined) {
            if (scrollY > prevScrollY && prevScrollY >= 0) newAction = "down";
            else if (scrollY < prevScrollY) newAction = "up";
            else if (scrollX > prevScrollX) newAction = "right";
            else if (scrollX < prevScrollX) newAction = "left";
        }

        setUserScrollingAction((prev) => (prev !== newAction ? newAction : prev));

        previousScrollPosition.current = { scrollY, scrollX };
    }, [scrollY, scrollX]);

    return userScrollingAction;
};

export default useScrollTracker;