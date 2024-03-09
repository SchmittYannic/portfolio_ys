import { PropsWithChildren, ReactElement, useRef } from "react";
import { motion } from "framer-motion";
import useNavHoverState from "../../hooks/useNavHoverState";

const NavElement = ({ children }: PropsWithChildren): ReactElement => {
    const { 
        lastHoveredNavElement,
        setLastHoveredNavElement,
    } = useNavHoverState();
    const ref = useRef<HTMLDivElement | null>(null);

    return (
        <div
            ref={ref}
            className={`group h-full rounded-md [&:has(:focus-visible)]:dark:bg-darkBase-800 [&:has(:focus-visible)]:bg-base-800`}
            onMouseOver={() => setLastHoveredNavElement(ref.current)}
        >
            {ref.current && ref.current === lastHoveredNavElement && (
                <motion.div 
                    layoutId="hover-box" 
                    className={`absolute inset-0 rounded-md z-10 group-hover:dark:bg-darkBase-700  group-hover:bg-base-700`} 
                />
            )}
            {children}
        </div>
    )
};

export default NavElement