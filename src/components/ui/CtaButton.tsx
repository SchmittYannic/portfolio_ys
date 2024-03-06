import { ButtonHTMLAttributes, LinkHTMLAttributes, PropsWithChildren, ReactElement } from "react";
import useSettings from "../../hooks/useSettings";

type CtaButtonPropsType = {
    tag: "link" | "button",
};

const CtaButton = ({ tag, children, ...rest }: PropsWithChildren<CtaButtonPropsType & ButtonHTMLAttributes<HTMLButtonElement> & LinkHTMLAttributes<HTMLAnchorElement>>): ReactElement => {

    const { color } = useSettings();
    const bgColorClass900 = `bg-action${color}-900`;

    if( tag === "link" ) {
        return (
            <a 
                {...rest}
                className={`relative ml-5 px-3 py-[13px] rounded ${bgColorClass900} dark:text-darkTextPrimary text-textPrimary text-xl font-bold transition-[color] ease-button duration-1500 dark:hover:text-textPrimary hover:text-darkTextPrimary before:absolute before:top-0 before:right-0 before:w-0 before:h-full before:rounded dark:before:bg-darkTextPrimary before:bg-textPrimary before:ease-button before:duration-1500 
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
                className={`relative ml-5 px-3 py-[13px] rounded ${bgColorClass900} dark:text-darkTextPrimary text-textPrimary text-xl font-bold transition-[color] ease-button duration-1500 dark:hover:text-textPrimary hover:text-darkTextPrimary before:absolute before:top-0 before:right-0 before:w-0 before:h-full before:rounded dark:before:bg-darkTextPrimary before:bg-textPrimary before:ease-button before:duration-1500 
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