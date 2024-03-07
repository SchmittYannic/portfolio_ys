import { ButtonHTMLAttributes, LinkHTMLAttributes, PropsWithChildren, ReactElement } from "react";
import useDynamicClasses from "../../hooks/useDynamicClasses";

type CtaButtonPropsType = {
    tag: "link" | "button",
};

const CtaButton = ({ tag, children, ...rest }: PropsWithChildren<CtaButtonPropsType & ButtonHTMLAttributes<HTMLButtonElement> & LinkHTMLAttributes<HTMLAnchorElement>>): ReactElement => {

    const { bgColorClass900 } = useDynamicClasses();

    if( tag === "link" ) {
        return (
            <a 
                {...rest}
                className={`relative sm:px-6 px-3 sm:py-[13px] py-[10px] rounded ${bgColorClass900} dark:text-darkTextPrimary text-textPrimary sm:text-xl text-lg font-bold transition-[color] ease-button duration-1500 dark:hover:text-textPrimary hover:text-darkTextPrimary before:absolute before:top-0 before:right-0 before:w-0 before:h-full before:rounded dark:before:bg-darkTextPrimary before:bg-textPrimary before:ease-button before:duration-1500 
                before:z-0 hover:before:w-full hover:before:left-0 hover:before:right-unset`}
            >
                <p className="relative z-10">
                    {children}
                </p>
            </a>
        )
    } else {
        return (
            <button 
                {...rest}
                className={`relative sm:px-6 px-3 sm:py-[13px] py-[10px] rounded ${bgColorClass900} dark:text-darkTextPrimary text-textPrimary sm:text-xl text-lg font-bold transition-[color] ease-button duration-1500 dark:hover:text-textPrimary hover:text-darkTextPrimary before:absolute before:top-0 before:right-0 before:w-0 before:h-full before:rounded dark:before:bg-darkTextPrimary before:bg-textPrimary before:ease-button before:duration-1500 
                before:z-0 hover:before:w-full hover:before:left-0 hover:before:right-unset`}
            >
                <p className="relative z-10">
                    {children}
                </p>
            </button>
        )
    }
};

export default CtaButton