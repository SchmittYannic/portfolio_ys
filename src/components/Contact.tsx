import { useState, SyntheticEvent, ChangeEvent } from "react";
import emailjs from "@emailjs/browser";
import useDynamicClasses from "../hooks/useDynamicClasses"
import { styles } from "../styles"
import useToast from "../hooks/useToast";

type FormType = {
    name: string,
    email: string,
    message: string,
}

const Contact = () => {

    const { focusRingColorClass, PageTextContent } = useDynamicClasses();
    const { addToast } = useToast();

    const myEmail = String(import.meta.env.VITE_PERSONAL_EMAIL);
    const serviceId = String(import.meta.env.VITE_EMAILJS_SERVICE_ID);
    const templateId = String(import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
    const publicKey = String(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

    const [form, setForm] = useState<FormType>({
        name: "",
        email: "",
        message: "",
    });

    const [isSending, setIsSending] = useState<boolean>(false);

    const handleSubmit = (e: SyntheticEvent<HTMLFormElement>): void => {
        e.preventDefault();
        setIsSending(true);

        emailjs.send(
            serviceId,
            templateId,
            {
                from_name: form.name,
                to_name: "Yannic",
                from_email: form.email,
                to_email: "schmitt.yannic@web.com",
                message: form.message
            },
            publicKey
        ).then(() => {
            setIsSending(false);
            //alert("Thank you. I will get back to you as soon as possible");
            const toastText = PageTextContent.successMessage;
            addToast("success", toastText);

            setForm({
                name: "",
                email: "",
                message: "",
            })
        }, (error) => {
            setIsSending(false);

            console.log(error);
            //alert("Something went wrong.");
            const toastText = PageTextContent.failureMessage;
            addToast("failure", toastText);
        })
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const { name, value } = e.target;

        setForm(prevState => {
            const newState = { ...prevState }
            newState[name as keyof FormType] = value
            return newState
        })
    }

    return (
        <section
            id="contact"
            className={`w-full lg:py-32 md:py-24 py-12 border-t-2 border-gray-100 dark:border-gray-800`}
        >
            <div
                id="contact-content"
                className={`${styles.maxSiteWidth} mx-auto md:px-6 px-4 grid items-start gap-6 lg:grid-cols-2 lg:gap-10`}
            >
                <div
                    id="contact-text"
                    className="space-y-4"
                >
                    <h2
                        className={`md:text-5xl sm:text-4xl text-3xl font-bold tracking-tighter ${styles.headlineTextColor}`}
                    >
                        {PageTextContent.contactHead}
                    </h2>
                    <p
                        className={`${styles.maxContainer} ${styles.primaryFontSize} ${styles.primaryTextColor}`}
                    >
                        {PageTextContent.contactSub}
                    </p>
                    <div
                        id="contact-links"
                        className="space-y-2"
                    >
                        <div
                            className="flex items-center gap-2 text-gray-100"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className={`w-5 h-5 ${styles.primaryTextColor}`}
                            >
                                <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                                <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                            </svg>
                            <a
                                className={`${styles.primaryTextColor} hover:underline`}
                                href={`mailto:${myEmail}`}
                            >
                                {myEmail}
                            </a>
                        </div>
                        <div
                            className="flex items-center gap-2"
                        >

                        </div>
                    </div>
                </div>

                <div
                    id="contact-form"
                    className={`rounded-lg p-6 ${styles.secondaryBackground}`}
                >
                    <form
                        className="space-y-4"
                        onSubmit={handleSubmit}
                    >
                        <div
                            className="space-y-2"
                        >
                            <label
                                htmlFor="name"
                                className={`${styles.headlineTextColor} text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70`}
                            >
                                {PageTextContent.nameLabel}
                            </label>
                            <input
                                id="name"
                                name="name"
                                className={`flex h-10 w-full rounded-md border border-input dark:border-gray-600 ${styles.primaryTextColor} ${styles.primaryBackground} px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 dark:placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-4 ${focusRingColorClass} focus-visible:ring-offset-2 ring-offset-gray-100 dark:ring-offset-gray-800 disabled:cursor-not-allowed disabled:opacity-50`}
                                type="text"
                                maxLength={80}
                                placeholder={PageTextContent.namePlaceholder}
                                value={form.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div
                            className="space-y-2"
                        >
                            <label
                                htmlFor="email"
                                className={`${styles.headlineTextColor} text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70`}
                            >
                                {PageTextContent.emailLabel}
                            </label>
                            <input
                                id="email"
                                name="email"
                                className={`flex h-10 w-full rounded-md border border-input dark:border-gray-600 ${styles.primaryTextColor} ${styles.primaryBackground} px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 dark:placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-4 ${focusRingColorClass} focus-visible:ring-offset-2 ring-offset-gray-100 dark:ring-offset-gray-800 disabled:cursor-not-allowed disabled:opacity-50`}
                                type="text"
                                maxLength={80}
                                placeholder={PageTextContent.emailPlaceholder}
                                value={form.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div
                            className="space-y-2"
                        >
                            <label
                                htmlFor="message"
                                className={`${styles.headlineTextColor} text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70`}
                            >
                                {PageTextContent.messageLabel}
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                className={`flex min-h-[80px] w-full rounded-md border border-input dark:border-gray-600 ${styles.primaryTextColor} ${styles.primaryBackground} px-3 py-2 text-sm  placeholder:text-gray-500 dark:placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-4 ${focusRingColorClass} focus-visible:ring-offset-2 ring-offset-gray-100 dark:ring-offset-gray-800 disabled:cursor-not-allowed disabled:opacity-50`}
                                maxLength={2000}
                                placeholder={PageTextContent.messagePlaceholder}
                                value={form.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <button
                            className={`w-full h-10 px-4 py-2 inline-flex items-center justify-center text-white dark:text-black whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-4 ${focusRingColorClass} focus-visible:ring-offset-4 ring-offset-gray-100 dark:ring-offset-gray-800 disabled:pointer-events-none disabled:opacity-50 bg-black dark:bg-white hover:bg-black/70 dark:hover:bg-white/70`}
                            type="submit"
                            disabled={isSending}
                        >
                            {isSending ?
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                :
                                PageTextContent.sendButton
                            }
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact