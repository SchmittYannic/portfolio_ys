import { useContext, useState, ChangeEvent, SyntheticEvent, ReactElement } from "react";
import emailjs from "@emailjs/browser";

import { ContactsBg } from ".";
import { TextContent } from "../constants";
import { SettingsContext, UseSettingsContextType } from "../context/SettingsProvider";
import { ToastContext } from "../context/ToastProvider";

//public key: gdcYzt-5KPdG9Jqcn
//template id: template_bm7dtbn
//service id: service_upmv0ki

const ContactForm = (): ReactElement => {
    const { lang } = useContext<UseSettingsContextType>(SettingsContext);
    const { addToast } = useContext(ToastContext);

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
            "service_upmv0ki", 
            "template_bm7dtbn",
            {
                from_name: form.name,
                to_name: "Yannic",
                from_email: form.email,
                to_email: "schmitt.yannic@web.com",
                message: form.message
            },
            "gdcYzt-5KPdG9Jqcn"
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

            //console.log(error);
            //alert("Something went wrong.");
            const toastText = lang === "de" ? TextContent.german.failureMessage : TextContent.english.failureMessage;
            addToast("failure", toastText);
        })
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const { name, value } = e.target;
        console.log(name in form)
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
                        className="py-2 px-6 rounded-md dark:bg-darkBase bg-base"
                        type="text"
                        name="name"
                        placeholder="What's your name?"
                        value={form.name}
                        onChange={handleChange}
                    />
                </label>

                <label
                    className="flex flex-col gap-2"
                >
                    <span>{lang === "de" ? TextContent.german.emailLabel : TextContent.english.emailLabel}</span>
                    <input 
                        className="py-2 px-6 rounded-md dark:bg-darkBase bg-base"
                        type="email"
                        name="email"
                        placeholder="What's your email?"
                        value={form.email}
                        onChange={handleChange}
                    />
                </label>

                <label
                    className="flex flex-col gap-2"
                >
                    <span>{lang === "de" ? TextContent.german.messageLabel : TextContent.english.messageLabel}</span>
                    <textarea 
                        className="py-4 px-6 rounded-md dark:bg-darkBase bg-base resize-none"
                        name="message" 
                        rows={7}
                        placeholder="What's your message?"
                        value={form.message}
                        onChange={handleChange}
                    >

                    </textarea>
                </label>

                <button
                    className="py-3 px-8 rounded-md flex flex-row justify-center items-center dark:bg-darkBase bg-base"
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
    const { lang } = useContext(SettingsContext);

    return (
        <section id="contact" className="w-full min-h-[840px] h-screen relative overflow-x-hidden" tabIndex={-1}>
            <ContactsBg />

            <div className="py-16 px-2 max-w-[500px] lg:w-[50%] sm:w-[75%] w-full absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                <h2 className="mb-16 text-5xl text-center dark:text-darkTextPrimary text-textPrimary">
                    {lang === "de" ? TextContent.german.contact : TextContent.english.contact}
                </h2>

                <ContactForm />
            </div>
        </section>
    )
}

export default Contact