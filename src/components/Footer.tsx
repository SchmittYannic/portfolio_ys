import { styles } from "../styles"

const Footer = () => {

    const myFirstname = String(import.meta.env.VITE_FIRSTNAME);
    const myLastname = String(import.meta.env.VITE_LASTNAME);
    const now = new Date();

    return (
        <footer
            className={`${styles.primaryTextColor} text-sm py-4 flex justify-center border-t-2`}
        >
            © {now.getFullYear()}  All rights reserved - {myFirstname} {myLastname}
        </footer>
    )
}

export default Footer