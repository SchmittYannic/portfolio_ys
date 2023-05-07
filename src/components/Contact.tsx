import { useContext, useState, ChangeEvent, SyntheticEvent } from "react";
import emailjs from "@emailjs/browser";

import { ContactsBg } from ".";
import { TextContent } from "../constants";
import { SettingsContext } from "../context/SettingsProvider";

//public key: gdcYzt-5KPdG9Jqcn
//template id: template_bm7dtbn
//service id: service_upmv0ki

const ContactForm = () => {
    const { lang } = useContext(SettingsContext);

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

    const [isSending, setIsSending] = useState(false);

    const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSending(true)

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
            alert("Thank you. I will get back to you as soon as possible");

            setForm({
                name: "",
                email: "",
                message: "",
            })
        }, (error) => {
            setIsSending(false);

            console.log(error);

            alert("Something went wrong.");
        })
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        console.log(name in form)
        setForm(prevState => {
            const newState = { ...prevState }
            newState[name as keyof FormType] = value
            return newState
        })
    }

    return (
        <form 
            className="flex flex-col gap-6 dark:text-darkTextPrimary text-textPrimary"
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
                className="py-3 px-8 rounded-md dark:bg-darkBase bg-base"
                type="submit"
            >
                {lang === "de" ? TextContent.german.sendButton : TextContent.english.sendButton}
            </button>
        </form>
    )
}

const Contact = () => {
    return (
        <section id="contact" className="w-full min-h-[840px] relative overflow-x-hidden" tabIndex={-1}>
            <ContactsBg />

            <div className="py-16 max-w-[500px] lg:w-[50%] sm:w-[75%] w-full absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                <h2 className="mb-16 text-5xl text-center dark:text-darkTextPrimary text-textPrimary">
                    Contact
                </h2>

                <div className="mx-auto p-10 rounded-xl dark:bg-darkBaseSecondary bg-baseSecondary">
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}

export default Contact