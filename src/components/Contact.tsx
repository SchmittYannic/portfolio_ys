import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form"
import emailjs from "@emailjs/browser";
import useDynamicClasses from "../hooks/useDynamicClasses"
import ContactBg from "./ContactBg";
import { styles } from "../styles"

type FormStateType = {
    name: string,
    email: string,
    message: string,
}

const Contact = () => {

    const { focusRingColorClass, PageTextContent } = useDynamicClasses();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<FormStateType>();

    const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const myEmail = String(import.meta.env.VITE_PERSONAL_EMAIL);
    const myGithub = String(import.meta.env.VITE_PERSONAL_GITHUB);
    const myFirstname = String(import.meta.env.VITE_FIRSTNAME);
    const myLastname = String(import.meta.env.VITE_LASTNAME);
    const serviceId = String(import.meta.env.VITE_EMAILJS_SERVICE_ID);
    const templateId = String(import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
    const publicKey = String(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

    const onSubmit: SubmitHandler<FormStateType> = async (data) => {
        try {
            setFormStatus("loading");
            const { name, email, message } = data;

            await emailjs.send(
                serviceId,
                templateId,
                {
                    from_name: name,
                    to_name: myFirstname,
                    from_email: email,
                    to_email: myEmail,
                    message: message
                },
                publicKey
            );

            setFormStatus("success")
        } catch (error) {
            setFormStatus("error")
        }
    }

    const resetFormStatus = () => setFormStatus("idle");

    useEffect(() => {
        if (formStatus !== "success") return
        reset({
            name: "",
            email: "",
            message: "",
        });
    }, [formStatus]);

    return (
        <section
            id="contact"
            className={`relative w-full lg:py-32 md:py-24 py-12 border-t-2 border-gray-100 dark:border-gray-800`}
        >
            <div
                id="contact-background"
                className={`lg:block hidden overflow-hidden`}
            >
                <ContactBg />
            </div>
            <div
                id="contact-content"
                className={`${styles.maxSiteWidth} relative mx-auto md:px-6 px-4 grid items-start gap-6 lg:grid-cols-2 lg:gap-10 z-10`}
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
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 98 96"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                className={`w-5 h-5 ${styles.primaryTextColor}`}
                            >
                                <path d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" />
                            </svg>
                            <a
                                className={`${styles.primaryTextColor} hover:underline`}
                                href={myGithub}
                            >
                                {myLastname}{myFirstname}
                            </a>
                        </div>
                    </div>
                </div>

                <div
                    id="contact-form"
                    className={`rounded-lg p-6 ${styles.secondaryBackground}`}
                >
                    <form
                        className="space-y-4"
                        onSubmit={handleSubmit(onSubmit)}
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
                                className={`flex h-10 w-full rounded-md border border-input ${styles.primaryTextColor} ${styles.primaryBackground} px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 dark:placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-4 ${focusRingColorClass} focus-visible:ring-offset-2 ring-offset-gray-100 dark:ring-offset-gray-800 disabled:cursor-not-allowed disabled:opacity-50 ${errors.name ? "border-gray-700 dark:border-gray-100" : "dark:border-gray-600"}`}
                                type="text"
                                maxLength={80}
                                placeholder={PageTextContent.namePlaceholder}
                                {...register("name", {
                                    required: "*Pflichtfeld",
                                    onChange: resetFormStatus,
                                })}
                            />
                            {
                                errors.name &&
                                <span className={`text-sm w-full h-4 inline-flex justify-end ${styles.headlineTextColor}`} role="alert">
                                    {errors.name?.message}
                                </span>
                            }
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
                                className={`flex h-10 w-full rounded-md border border-input ${styles.primaryTextColor} ${styles.primaryBackground} px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 dark:placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-4 ${focusRingColorClass} focus-visible:ring-offset-2 ring-offset-gray-100 dark:ring-offset-gray-800 disabled:cursor-not-allowed disabled:opacity-50 ${errors.email ? "border-gray-700 dark:border-gray-100" : "dark:border-gray-600"}`}
                                type="text"
                                maxLength={80}
                                placeholder={PageTextContent.emailPlaceholder}
                                {...register("email", {
                                    required: "*Pflichtfeld",
                                    onChange: resetFormStatus,
                                })}
                            />
                            {
                                errors.email &&
                                <span className={`text-sm w-full h-4 inline-flex justify-end ${styles.headlineTextColor}`} role="alert">
                                    {errors.email?.message}
                                </span>
                            }
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
                                className={`flex min-h-[80px] w-full rounded-md border border-input dark:border-gray-600 ${styles.primaryTextColor} ${styles.primaryBackground} px-3 py-2 text-sm  placeholder:text-gray-500 dark:placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-4 ${focusRingColorClass} focus-visible:ring-offset-2 ring-offset-gray-100 dark:ring-offset-gray-800 disabled:cursor-not-allowed disabled:opacity-50 ${errors.message ? "border-gray-700 dark:border-gray-100" : "dark:border-gray-600"}`}
                                maxLength={2000}
                                placeholder={PageTextContent.messagePlaceholder}
                                {...register("message", {
                                    required: "*Pflichtfeld",
                                    onChange: resetFormStatus,
                                })}
                            ></textarea>
                            {
                                errors.message &&
                                <span className={`text-sm w-full h-4 inline-flex justify-end ${styles.headlineTextColor}`} role="alert">
                                    {errors.message?.message}
                                </span>
                            }
                        </div>
                        {
                            formStatus === "error" &&
                            <div className="w-full py-2 px-4 bg-red-500 text-white text-sm mx-0 rounded grid justify-center" role="alert">
                                {PageTextContent.contactFailureMessage}
                                <a
                                    className="text-blue-400 hover:text-purple-400 underline"
                                    href={`mailto:${myEmail}`}
                                >
                                    {myEmail}
                                </a>
                            </div>
                        }
                        {
                            formStatus === "success" &&
                            <div className="w-full py-2 px-4 bg-green-500 text-white text-sm mx-0 rounded inline-flex justify-center" role="alert">
                                {PageTextContent.contactSuccessMessage}
                            </div>
                        }
                        <button
                            className={`w-full h-10 px-4 py-2 inline-flex items-center justify-center text-white dark:text-black whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-4 ${focusRingColorClass} focus-visible:ring-offset-4 ring-offset-gray-100 dark:ring-offset-gray-800 disabled:pointer-events-none disabled:opacity-50 bg-black dark:bg-white hover:bg-black/70 dark:hover:bg-white/70`}
                            type="submit"
                            onClick={resetFormStatus}
                            disabled={isSubmitting || formStatus === "loading"}
                        >
                            {isSubmitting || formStatus === "loading" ?
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white dark:text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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