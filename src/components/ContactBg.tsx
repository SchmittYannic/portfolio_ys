import useSettings from "../hooks/useSettings";

const ContactBg = () => {
    const { color } = useSettings();

    const colorClass500 = `text-action${color}-500`;
    const colorClass800 = `text-action${color}-800`;

    return (
        <svg className={`absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1400px] mx-auto z-0`} xmlns="http://www.w3.org/2000/svg" version="1.1" width="1400" height="650" preserveAspectRatio="none" viewBox="0 0 1400 650">
            <g mask="url(&quot;#SvgjsMask1014&quot;)" fill="none">
                <rect width="200" height="200" clip-path="url(&quot;#SvgjsClipPath1019&quot;)" x="1200" y="30" fill="url(&quot;#SvgjsPattern1020&quot;)" transform="rotate(75, 1300, 130)"></rect>
                <rect width="400" height="400" clip-path="url(&quot;#SvgjsClipPath1025&quot;)" x="150" y="350" fill="url(&quot;#SvgjsPattern1026&quot;)" transform="rotate(30, 300, 500)"></rect>
            </g>
            <defs>
                <mask id="SvgjsMask1014">
                    <rect width="1400" height="650" fill="#ffffff"></rect>
                </mask>
                <pattern x="0" y="0" width="7.6" height="7.6" patternUnits="userSpaceOnUse" id="SvgjsPattern1020">
                    <path className={`${colorClass500}`} d="M3.8 1L3.8 6.6M1 3.8L6.6 3.8" stroke="currentColor" fill="none" stroke-width="1"></path>
                </pattern>
                <clipPath id="SvgjsClipPath1019">
                    <circle r="100" cx="1300" cy="130"></circle>
                </clipPath>
                <pattern x="0" y="0" width="9.98" height="9.98" patternUnits="userSpaceOnUse" id="SvgjsPattern1026">
                    <path className={`${colorClass800}`} d="M4.99 1L4.99 8.98M1 4.99L8.98 4.99" stroke="currentColor" fill="none" stroke-width="1"></path>
                </pattern>
                <clipPath id="SvgjsClipPath1025">
                    <circle r="150" cx="300" cy="580"></circle>
                </clipPath>
            </defs>
        </svg>
    )
}

export default ContactBg