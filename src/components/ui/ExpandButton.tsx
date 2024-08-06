import { ButtonHTMLAttributes, PropsWithChildren } from "react"
import { styles } from "../../styles"

const ExpandButton = ({ children, ...rest }: PropsWithChildren<Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">>) => {
    return (
        <button
            className={`px-4 py-2 w-[130px] rounded-full ${styles.primaryBackground} ${styles.primaryHoverBackground} ${styles.headlineTextColor}`}
            {...rest}
        >
            {children}
        </button>
    )
}

export default ExpandButton