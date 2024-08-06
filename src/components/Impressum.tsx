import { styles } from "../styles"
import { Navbar } from ".";

const Impressum = () => {

    const firstname = String(import.meta.env.VITE_FIRSTNAME) ?? "";
    const lastname = String(import.meta.env.VITE_LASTNAME) ?? "";
    const street = String(import.meta.env.VITE_PERSONAL_STREET) ?? "";
    const plz = String(import.meta.env.VITE_PERSONAL_PLZ) ?? "";
    const city = String(import.meta.env.VITE_PERSONAL_CITY) ?? "";
    const email = String(import.meta.env.VITE_PERSONAL_EMAIL) ?? "";

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
                    <div className="mt-8">
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
                </div>
            </div>
        </main>
    )
}

export default Impressum