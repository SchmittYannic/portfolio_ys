import { ButtonHTMLAttributes, PropsWithChildren, ReactElement } from "react";
import useSettings from "../../hooks/useSettings";
import { styles } from "../../styles";

const Button = ({ children, ...rest }: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>): ReactElement => {
    const { color } = useSettings();

    const beforeColorClass = `before:bg-action${color}-900`;

    return (
        <button
            {...rest}
            type="button"
            className={`relative p-1 rounded dark:bg-darkTextPrimary bg-textPrimary before:absolute before:top-0 before:right-0 before:h-full before:w-0 before:rounded ${beforeColorClass} before:ease-button before:duration-1500 hover:before:w-full hover:before:left-0 hover:before:right-unset`}
        >
            <p className={`relative z-10 sm:px-6 px-3 sm:py-[9px] py-[6px] sm:text-xl text-lg font bold ${styles.primaryBackground} dark:text-darkTextPrimary text-textPrimary`}>
                {children}
            </p>
        </button>
    )
};

export default Button