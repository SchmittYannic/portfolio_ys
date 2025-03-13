import { motion } from "framer-motion";
import { styles } from "../styles";

type DescriptionItem = { type: "p" | "h4" | "ol"; content: string } | string[];

type ProjectDescriptionPropsType = {
    description: string[],
}

const ProjectDescription = ({
    description,
}: ProjectDescriptionPropsType) => {
    if (description.length === 0) return null;

    const elements: DescriptionItem[] = description.slice(1).reduce<DescriptionItem[]>((acc, text) => {
        if (text.startsWith("- ")) {
            if (acc.length > 0 && Array.isArray(acc[acc.length - 1])) {
                (acc[acc.length - 1] as string[]).push(text.slice(2));
            } else {
                acc.push([text.slice(2)]);
            }
        } else if (text.startsWith("#4 ")) {
            acc.push({ type: "h4", content: text.slice(3) });
        } else {
            acc.push({ type: "p", content: text });
        }
        return acc;
    }, []);

    return (
        <motion.div
            initial={{ maxHeight: "0px", opacity: 0 }}
            animate={{ maxHeight: "2000px", opacity: 1 }}
            exit={{ maxHeight: "0px", opacity: 0 }}
            transition={{ duration: 1 }}
        >
            {elements.map((item, index) => {
                const isLastBeforeH4 =
                    (elements[index + 1] && (elements[index + 1] as { type: "h4"; content: string }).type === "h4");

                return (
                    Array.isArray(item) ? (
                        <ul
                            key={`ul-${index}`}
                            className="list-disc ml-6 mb-2"
                        >
                            {item.map((liText, liIndex) => (
                                <li
                                    key={`li-${index}-${liIndex}`}
                                    className={`${styles.primaryFontSize} ${styles.primaryTextColor}`}
                                >
                                    {liText}
                                </li>
                            ))}
                        </ul>
                    ) : item.type === "h4" ? (
                        <h4
                            key={`h4-${index}`}
                            className={`mb-1 text-xl ${styles.headlineTextColor}`}
                        >
                            {item.content}
                        </h4>
                    ) : (
                        <p
                            key={`p-${index}`}
                            className={`${isLastBeforeH4 ? "mb-4 " : "mb-2 "} ${styles.primaryFontSize} ${styles.primaryTextColor}`}
                        >
                            {item.content}
                        </p>
                    )
                )
            })}
        </motion.div>
    );
}

export default ProjectDescription