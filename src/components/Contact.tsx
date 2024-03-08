import { useState, ChangeEvent, SyntheticEvent, ReactElement } from "react";
import emailjs from "@emailjs/browser";

import { ContactsBg } from ".";
import { TextContent } from "../constants";
import useSettings from "../hooks/useSettings";
import useToast from "../hooks/useToast";
import { styles } from "../styles";
import useDynamicClasses from "../hooks/useDynamicClasses";

const ContactForm = (): ReactElement => {
    const { lang } = useSettings();
    const { addToast } = useToast();

    const serviceId = String(process.env.EMAILJS_SERVICE_ID);
    const templateId = String(process.env.EMAILJS_TEMPLATE_ID);
    const publicKey = String(process.env.EMAILJS_PUBLIC_KEY);

    type FormType = {
        name: string,
        email: string,
        message: string,
    }

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
            const toastText = lang === "de" ? TextContent.german.successMessage : TextContent.english.successMessage;
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
            const toastText = lang === "de" ? TextContent.german.failureMessage : TextContent.english.failureMessage;
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
        <div className="form-wrapper mx-auto p-10 relative rounded-xl dark:bg-darkBaseTertiary bg-baseSecondary overflow-hidden
        before:content-[''] before:absolute before:-inset-[50%] before:rounded-xl before:z-0 after:content-[''] after:inset-1 after:absolute after:rounded-xl after:z-10 after:dark:bg-darkBaseTertiary after:bg-baseSecondary">
            <form 
                className="relative flex flex-col gap-6 dark:text-darkTextPrimary text-textPrimary z-20"
                onSubmit={handleSubmit}
            >
                <label
                    className="flex flex-col gap-2"
                >
                    <span>{lang === "de" ? TextContent.german.nameLabel : TextContent.english.nameLabel}</span>
                    <input 
                        className={`py-2 px-6 rounded-md ${styles.primaryBackground}`}
                        type="text"
                        name="name"
                        placeholder=""
                        value={form.name}
                        onChange={handleChange}
                    />
                </label>

                <label
                    className="flex flex-col gap-2"
                >
                    <span>{lang === "de" ? TextContent.german.emailLabel : TextContent.english.emailLabel}</span>
                    <input 
                        className={`py-2 px-6 rounded-md ${styles.primaryBackground}`}
                        type="email"
                        name="email"
                        placeholder=""
                        value={form.email}
                        onChange={handleChange}
                    />
                </label>

                <label
                    className="flex flex-col gap-2"
                >
                    <span>{lang === "de" ? TextContent.german.messageLabel : TextContent.english.messageLabel}</span>
                    <textarea 
                        className={`py-4 px-6 rounded-md resize-none ${styles.primaryBackground}`}
                        name="message" 
                        rows={7}
                        placeholder=""
                        value={form.message}
                        onChange={handleChange}
                    >

                    </textarea>
                </label>

                <button
                    className={`py-3 px-8 rounded-md flex flex-row justify-center items-center ${styles.primaryBackground}`}
                    type="submit"
                >
                    {isSending &&
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    }
                    {lang === "de" ? TextContent.german.sendButton : TextContent.english.sendButton}
                </button>
            </form>
        </div>
    )
}

const Contact = (): ReactElement => {
    const { PageTextContent } = useDynamicClasses();

    return (
        <section id="contact" className="relative xl:h-screen xl:max-h-[1400px] min-h-[900px]" tabIndex={-1}>

            <div className="contact-background absolute inset-0 overflow-hidden">
                <ContactsBg />
            </div>

            <div className="contact-content relative h-full">
                <div className={`max-container ${styles.maxContainer} h-full`}>
                    <div className="h-full grid grid-cols-1 justify-items-center items-center">
                        <div className="py-16 px-2 max-w-[500px] lg:w-[50%] sm:w-[75%] w-full">
                            <h2 className="mb-16 text-5xl text-center dark:text-darkTextPrimary text-textPrimary">
                                {PageTextContent.contact}
                            </h2>

                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact