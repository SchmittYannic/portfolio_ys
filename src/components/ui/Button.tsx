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
            className={`relative p-1 h-10 rounded dark:bg-darkTextPrimary bg-textPrimary before:absolute before:top-0 before:right-0 before:h-full before:w-0 before:rounded ${beforeColorClass} before:ease-button before:duration-1500 hover:before:w-full hover:before:left-0 hover:before:right-unset`}
        >
            <p className={`relative h-full w-full inline-flex items-center justify-center z-10 px-8 text-sm font-bold ${styles.primaryBackground} dark:text-darkTextPrimary text-textPrimary`}>
                {children}
            </p>
        </button>
    )
};

export default Button