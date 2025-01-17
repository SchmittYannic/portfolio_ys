import useSettings from "../hooks/useSettings";

const HeroBg = () => {
    const { color } = useSettings();

    const colorClass500 = `text-action${color}-500`;
    const colorClass800 = `text-action${color}-800`;
    const colorClass600 = `text-action${color}-600`;
    const colorClass900 = `text-action${color}-900`;
    const colorClass700 = `text-action${color}-700`;

    return (
        <svg className={`absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1400px] mx-auto z-0`} xmlns="http://www.w3.org/2000/svg" version="1.1" width="1400" height="656" preserveAspectRatio="none" viewBox="0 0 1400 656">
            <g mask="url(&quot;#SvgjsMask4371&quot;)" fill="none">
                <rect width="277.12" height="277.12" clipPath="url(&quot;#SvgjsClipPath4374&quot;)" x="200" y="0" fill="url(&quot;#SvgjsPattern4375&quot;)"></rect>
                <rect width="408" height="408" clipPath="url(&quot;#SvgjsClipPath4372&quot;)" x="1060.36" y="281.92" fill="url(&quot;#SvgjsPattern4373&quot;)"></rect>
                <rect width="200" height="200" clipPath="url(&quot;#SvgjsClipPath4379&quot;)" x="394.63" y="415.11" fill="url(&quot;#SvgjsPattern4380&quot;)" transform="rotate(45, 494.63, 515.11)"></rect>
                <path className={`${colorClass800}`} d="M650 180a5.6 5.6 0 1 0 1.77-11.06 5.6 5.6 0 1 0-1.77 11.06z M652.53 164.2a5.6 5.6 0 1 0 1.77-11.06 5.6 5.6 0 1 0-1.77 11.06z M655.06 148.4a5.6 5.6 0 1 0 1.77-11.06 5.6 5.6 0 1 0-1.77 11.06z M657.58 132.6a5.6 5.6 0 1 0 1.77-11.06 5.6 5.6 0 1 0-1.77 11.06z M660.74 214.13a5.6 5.6 0 1 0 1.77-11.06 5.6 5.6 0 1 0-1.77 11.06z M663.27 198.33a5.6 5.6 0 1 0 1.77-11.06 5.6 5.6 0 1 0-1.77 11.06z M665.8 182.53a5.6 5.6 0 1 0 1.77-11.06 5.6 5.6 0 1 0-1.77 11.06z M668.33 166.73a5.6 5.6 0 1 0 1.77-11.06 5.6 5.6 0 1 0-1.77 11.06z" stroke="currentColor" strokeWidth="2.81"></path>
                <path className={`${colorClass700}`} d="M1250 150a5.6 5.6 0 1 0-1.39-11.12 5.6 5.6 0 1 0 1.39 11.12z M1248.01 134.12a5.6 5.6 0 1 0-1.39-11.11 5.6 5.6 0 1 0 1.39 11.11z M1246.02 118.24a5.6 5.6 0 1 0-1.39-11.11 5.6 5.6 0 1 0 1.39 11.11z M1244.03 102.37a5.6 5.6 0 1 0-1.39-11.11 5.6 5.6 0 1 0 1.39 11.11z M1269.85 170.76a5.6 5.6 0 1 0-1.39-11.11 5.6 5.6 0 1 0 1.39 11.11z M1267.87 154.88a5.6 5.6 0 1 0-1.4-11.11 5.6 5.6 0 1 0 1.4 11.11z M1265.88 138.01a5.6 5.6 0 1 0-1.4-11.12 5.6 5.6 0 1 0 1.4 11.12z M1263.89 122.13a5.6 5.6 0 1 0-1.39-11.11 5.6 5.6 0 1 0 1.39 11.11z M1289.71 197.52a5.6 5.6 0 1 0-1.39-11.11 5.6 5.6 0 1 0 1.39 11.11z M1287.72 181.65a5.6 5.6 0 1 0-1.39-11.12 5.6 5.6 0 1 0 1.39 11.12z M1285.73 165.77a5.6 5.6 0 1 0-1.39-11.11 5.6 5.6 0 1 0 1.39 11.11z M1283.74 149.89a5.6 5.6 0 1 0-1.39-11.11 5.6 5.6 0 1 0 1.39 11.11z" fill="currentColor"></path>
            </g>
            <defs>
                <mask id="SvgjsMask4371">
                    <rect width="1400" height="656" fill="#ffffff"></rect>
                </mask>
                <pattern x="0" y="0" width="8.66" height="8.66" patternUnits="userSpaceOnUse" id="SvgjsPattern4375">
                    <path className={`${colorClass500}`} d="M0 8.66L4.33 0L8.66 8.66" stroke="currentColor" fill="none"></path>
                </pattern>
                <clipPath id="SvgjsClipPath4374">
                    <circle r="69.28" cx="400" cy="50"></circle>
                </clipPath>
                <pattern x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse" id="SvgjsPattern4373">
                    <path className={`${colorClass900}`} d="M3 1L3 5M1 3L5 3" stroke="currentColor" fill="none" strokeWidth="1.56"></path>
                </pattern>
                <clipPath id="SvgjsClipPath4372">
                    <circle r="112" cx="1204.36" cy="585.92"></circle>
                </clipPath>
                <pattern x="0" y="0" width="60" height="6" patternUnits="userSpaceOnUse" id="SvgjsPattern4380">
                    <rect className={`${colorClass600}`} width="60" height="3" x="0" y="0" fill="currentColor"></rect>
                    <rect width="60" height="3" x="0" y="3" fill="rgba(0, 0, 0, 0)"></rect>
                </pattern>
                <clipPath id="SvgjsClipPath4379">
                    <circle r="60" cx="524.63" cy="545.11"></circle>
                </clipPath>
            </defs>
        </svg>
    )
}

export default HeroBg