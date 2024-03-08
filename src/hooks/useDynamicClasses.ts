import { TextContent, TooltipTextContent, navbarHeight } from '../constants';
import useSettings from './useSettings';

const useDynamicClasses = () => {

    const { lang, color } = useSettings();

    const sectionPaddingTop: string = `pt-[${navbarHeight}px]`;
    const PageTextContent = lang === "en" ? TextContent.english : TextContent.german;
    const TooltipContent = lang === "en" ? TooltipTextContent.english : TooltipTextContent.german;
    const bgColorClass900: string = `bg-action${color}-900`;
    const borderColorClass900: string = `border-action${color}-900`;
    const ringColorClass: string = `ring-action${color}-900/30`;
    const textColorClass900: string = `text-action${color}-900`;

    return ({
        sectionPaddingTop,
        PageTextContent,
        TooltipContent,
        bgColorClass900,
        borderColorClass900,
        ringColorClass,
        textColorClass900,
    })
}

export default useDynamicClasses