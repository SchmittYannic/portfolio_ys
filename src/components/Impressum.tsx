import { Link } from "react-router-dom"
import useSettings from "../hooks/useSettings";
import { styles } from "../styles"
import { Navbar } from ".";

const Impressum = () => {

    const { lang } = useSettings();

    const firstname = String(import.meta.env.VITE_FIRSTNAME) ?? "";
    const lastname = String(import.meta.env.VITE_LASTNAME) ?? "";
    const street = String(import.meta.env.VITE_PERSONAL_STREET) ?? "";
    const plz = String(import.meta.env.VITE_PERSONAL_PLZ) ?? "";
    const city = String(import.meta.env.VITE_PERSONAL_CITY) ?? "";
    const email = String(import.meta.env.VITE_PERSONAL_EMAIL) ?? "";

    const buttonText = lang === "de" ? "Zurück zur Startseite" : "Back to homepage";

    return (
        <main
            id="impressum"
            className={`relative w-full h-full ${styles.primaryBackground}`}
        >
            <Navbar type="minimal" />
            <div className={`w-full lg:py-32 md:py-24 pb-12 pt-24`}>
                <div className="max-w-[1400px] mx-auto px-4 md:px-6">
                    <h1
                        className={`text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl ${styles.headlineTextColor}`}
                    >
                        Impressum
                    </h1>
                    <div className="mt-8 mb-6">
                        <p className={`${styles.primaryFontSize} ${styles.primaryTextColor}`}>
                            {firstname} {lastname}
                        </p>
                        <p className={`${styles.primaryFontSize} ${styles.primaryTextColor}`}>
                            {street}
                        </p>
                        <p className={`${styles.primaryFontSize} ${styles.primaryTextColor}`}>
                            {plz} {city}
                        </p>
                        <p className={`${styles.primaryFontSize} ${styles.primaryTextColor}`}>
                            <br />
                        </p>
                        <p className={`${styles.primaryFontSize} ${styles.primaryTextColor}`}>
                            Email:&nbsp;
                            <a
                                className="hover:underline"
                                href={`mailto:${email}`}
                            >
                                {email}
                            </a>
                        </p>
                    </div>
                    <Link
                        className={`px-4 py-2 rounded-full ${styles.secondaryBackground} ${styles.primaryHoverBackground} ${styles.headlineTextColor} inline-flex items-center`}
                        to="/"
                    >
                        <svg className="mr-2" width="12" height="12" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <path d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z" fill="currentColor" />
                        </svg>
                        <span>{buttonText}</span>
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default Impressum