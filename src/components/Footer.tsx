import { Link } from "react-router-dom";
import { styles } from "../styles"

const Footer = () => {
    return (
        <footer
            className={`${styles.primaryTextColor} text-sm py-4 flex justify-center border-t-2 border-gray-100 dark:border-gray-800`}
        >
            <Link
                to={"/impressum"}
            >
                Impressum
            </Link>
        </footer>
    )
}

export default Footer