import { ContactsBg } from ".";

const Contact = () => {
    return (
        <section id="contact" className="w-full relative bg-red-400">
            <ContactsBg />

            <div className="py-16 absolute top-0 left-0 w-full">
                <h2 className="mb-16 text-5xl text-center dark:text-darkTextPrimary text-textPrimary">
                    Contact
                </h2>

                <div className="h-[300px] w-[300px] mx-auto border-4 bg-white">

                </div>
            </div>
        </section>
    )
}

export default Contact