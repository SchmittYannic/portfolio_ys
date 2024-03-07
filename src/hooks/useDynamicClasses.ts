import { TextContent, navbarHeight } from '../constants';
import useSettings from './useSettings';

const useDynamicClasses = () => {

    const { lang, color } = useSettings();

    const sectionPaddingTop: string = `pt-[${navbarHeight}px]`;
    const PageTextContent = lang === "en" ? TextContent.english : TextContent.german;
    const bgColorClass900: string = `bg-action${color}-900`;
    const borderColorClass900: string = `border-action${color}-900`;
    const ringColorClass: string = `ring-action${color}-900/30`;

    return ({
        sectionPaddingTop,
        PageTextContent,
        bgColorClass900,
        borderColorClass900,
        ringColorClass
    })
}

export default useDynamicClasses