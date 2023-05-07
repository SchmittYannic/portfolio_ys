import { useContext } from "react";
import { SettingsContext } from "../context/SettingsProvider";

const ContactsBg = () => {
    const { color } = useContext(SettingsContext);

    const colorClass400 = `fill-action${color}-400`; // replaces color1
    const colorClass700 = `fill-action${color}-700`; // replaces color2
    const colorClass500 = `fill-action${color}-500`; // replaces color3
    const colorClass800 = `fill-action${color}-800`; // replaces color4
    const colorClass300 = `fill-action${color}-300`; // replaces color5
    const colorClass600 = `fill-action${color}-600`; // replaces color6
    const colorClass900 = `fill-action${color}-900`; // replaces color6

    const color1 = "#646980"; //big stripes
    const color2 = "#3C4673"; //1px stripes insidde left 2 big stripes
    const color3 = "#3B467B"; //left most 1px stripes
    const color4 = "#202D64"; //middle 2px and right most 1px stripes
    const color5 = "#5A607B"; //right most big stripes
    const color6 = "#4A506A"; //surounding middle stripes
    const colorRect1 = "#3B415C"; //background default: #3B415C               //
    const colorRect2 = "white";

    return (
        <svg className="w-full h-full" width="2169" height="896" viewBox="0 0 2169 896" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1524_33)">
                <rect className={colorClass900} width="2169" height="896" fill={colorRect1}/>
                <g opacity="0.5">
                    <path className={colorClass600} d="M2476 899.5L646.003 899.5L1030.5 -0.000126369L2476 0L2476 899.5Z" fill={color6}/>
                    <path className={colorClass400} d="M1126.05 -9H1055.15L669.093 896.16H740L1126.05 -9Z" fill={color1}/>
                    <path className={colorClass400} d="M1119 -9H1126.05L740 896.16H732.946L1119 -9Z" fill={color1}/>
                    <path className={colorClass700} d="M1056.85 -9H1055.15L669.093 896.16H670.794L1056.85 -9Z" fill={color2}/>
                    <path className={colorClass700} d="M1062.63 -9H1060.93L674.878 896.16H676.579L1062.63 -9Z" fill={color2}/>
                    <path className={colorClass700} d="M1068.42 -9H1066.72L680.662 896.16H682.364L1068.42 -9Z" fill={color2}/>
                    <path className={colorClass700} d="M1074.2 -9H1072.5L686.447 896.16H688.149L1074.2 -9Z" fill={color2}/>
                    <path className={colorClass700} d="M1079.99 -9H1078.29L692.232 896.16H693.934L1079.99 -9Z" fill={color2}/>
                    <path className={colorClass700} d="M1085.77 -9H1084.07L698.017 896.16H699.718L1085.77 -9Z" fill={color2}/>
                    <path className={colorClass700} d="M1091.56 -9H1089.86L703.802 896.16H705.503L1091.56 -9Z" fill={color2}/>
                    <path className={colorClass400} d="M654.554 -9H514.054L128 896.16H268.5L654.554 -9Z" fill={color1}/>
                    <path className={colorClass400} d="M585.054 -9H654.554L268.5 896.16H199L585.054 -9Z" fill={color1}/>
                    <path className={colorClass700} d="M515.756 -9H514.054L128 896.16H129.701L515.756 -9Z" fill={color2}/>
                    <path className={colorClass700} d="M521.541 -9H519.839L133.785 896.16H135.486L521.541 -9Z" fill={color2}/>
                    <path className={colorClass700} d="M527.325 -9H525.624L139.57 896.16H141.271L527.325 -9Z" fill={color2}/>
                    <path className={colorClass700} d="M533.11 -9H531.409L145.355 896.16H147.056L533.11 -9Z" fill={color2}/>
                    <path className={colorClass700} d="M538.895 -9H537.194L151.139 896.16H152.841L538.895 -9Z" fill={color2}/>
                    <path className={colorClass700} d="M544.68 -9H542.979L156.924 896.16H158.626L544.68 -9Z" fill={color2}/>
                    <path className={colorClass700} d="M550.465 -9H548.763L162.709 896.16H164.411L550.465 -9Z" fill={color2}/>
                    <path className={colorClass400} d="M1975.05 -9H1606.05L1220 896.16H1589L1975.05 -9Z" fill={color1}/>
                    <path className={colorClass400} d="M1569.05 -9H1315.5L929.445 896.16H1183L1569.05 -9Z" fill={color1}/>
                    <path className={colorClass400} d="M1902.01 -9H1798.55L1412.5 896.16H1515.96L1902.01 -9Z" fill={color1}/>
                    <path className={colorClass700} d="M1573.99 896.16H1572.29L1725 538.114V542.103L1573.99 896.16Z" fill={color2}/>
                    <path className={colorClass700} d="M1579.78 896.16H1578.08L1725 551.678V555.667L1579.78 896.16Z" fill={color2}/>
                    <path className={colorClass700} d="M1585.7 896.16H1584L1736.71 538.114V542.103L1585.7 896.16Z" fill={color2}/>
                    <path className={colorClass700} d="M1591.49 896.16H1589.78L1736.71 551.678V555.667L1591.49 896.16Z" fill={color2}/>
                    <path className={colorClass500} d="M480.187 -588H478.071L-2.06677 537.752H0.0493088L480.187 -588Z" fill={color3}/>
                    <path className={colorClass500} d="M494.576 -588H492.46L12.3225 537.752H14.4386L494.576 -588Z" fill={color3}/>
                    <path className={colorClass500} d="M508.966 -588H506.85L26.7119 537.752H28.8279L508.966 -588Z" fill={color3}/>
                    <path className={colorClass500} d="M523.355 -588H521.239L41.1012 537.752H43.2173L523.355 -588Z" fill={color3}/>
                    <path className={colorClass500} d="M537.744 -588H535.628L55.4905 537.752H57.6066L537.744 -588Z" fill={color3}/>
                    <path className={colorClass500} d="M552.134 -588H550.018L69.8798 537.752H71.9959L552.134 -588Z" fill={color3}/>
                    <path className={colorClass500} d="M393.851 -588H391.735L-88.4027 537.752H-86.2866L393.851 -588Z" fill={color3}/>
                    <path className={colorClass500} d="M408.24 -588H406.124L-74.0134 537.752H-71.8973L408.24 -588Z" fill={color3}/>
                    <path className={colorClass500} d="M422.63 -588H420.514L-59.624 537.752H-57.508L422.63 -588Z" fill={color3}/>
                    <path className={colorClass500} d="M437.019 -588H434.903L-45.2347 537.752H-43.1186L437.019 -588Z" fill={color3}/>
                    <path className={colorClass500} d="M451.408 -588H449.292L-30.8454 537.752H-28.7293L451.408 -588Z" fill={color3}/>
                    <path className={colorClass500} d="M465.798 -588H463.682L-16.4561 537.752H-14.34L465.798 -588Z" fill={color3}/>
                    <path className={colorClass500} d="M480.187 -588H478.071L-2.06677 537.752H0.0493088L480.187 -588Z" fill={color3}/>
                    <path className={colorClass500} d="M652.859 -588H650.743L170.605 537.752H172.721L652.859 -588Z" fill={color3}/>
                    <path className={colorClass500} d="M667.248 -588H665.132L184.994 537.752H187.11L667.248 -588Z" fill={color3}/>
                    <path className={colorClass500} d="M681.637 -588H679.521L199.384 537.752H201.5L681.637 -588Z" fill={color3}/>
                    <path className={colorClass500} d="M566.523 -588H564.407L84.2691 537.752H86.3852L566.523 -588Z" fill={color3}/>
                    <path className={colorClass500} d="M580.912 -588H578.796L98.6584 537.752H100.775L580.912 -588Z" fill={color3}/>
                    <path className={colorClass500} d="M595.302 -588H593.185L113.048 537.752H115.164L595.302 -588Z" fill={color3}/>
                    <path className={colorClass500} d="M609.691 -588H607.575L127.437 537.752H129.553L609.691 -588Z" fill={color3}/>
                    <path className={colorClass500} d="M624.08 -588H621.964L141.826 537.752H143.942L624.08 -588Z" fill={color3}/>
                    <path className={colorClass500} d="M638.469 -588H636.353L156.216 537.752H158.332L638.469 -588Z" fill={color3}/>
                    <path className={colorClass500} d="M652.859 -588H650.743L170.605 537.752H172.721L652.859 -588Z" fill={color3}/>
                    <g opacity="0.6">
                        <path className={colorClass800} d="M1575.99 -561H1572.65L813 1220.1H816.348L1575.99 -561Z" fill={color4}/>
                        <path className={colorClass800} d="M1587.38 -561H1584.03L824.383 1220.1H827.731L1587.38 -561Z" fill={color4}/>
                        <path className={colorClass800} d="M1598.76 -561H1595.41L835.766 1220.1H839.114L1598.76 -561Z" fill={color4}/>
                        <path className={colorClass800} d="M1610.14 -561H1606.79L847.149 1220.1H850.497L1610.14 -561Z" fill={color4}/>
                        <path className={colorClass800} d="M1621.53 -561H1618.18L858.532 1220.1H861.88L1621.53 -561Z" fill={color4}/>
                        <path className={colorClass800} d="M1632.91 -561H1629.56L869.915 1220.1H873.263L1632.91 -561Z" fill={color4}/>
                        <path className={colorClass800} d="M1644.29 -561H1640.94L881.298 1220.1H884.646L1644.29 -561Z" fill={color4}/>
                    </g>
                    <g opacity="0.6">
                        <path className={colorClass800} d="M1654.7 -561H1651.35L891.708 1220.1H895.056L1654.7 -561Z" fill={color4}/>
                        <path className={colorClass800} d="M1666.08 -561H1662.74L903.091 1220.1H906.439L1666.08 -561Z" fill={color4}/>
                        <path className={colorClass800} d="M1677.47 -561H1674.12L914.474 1220.1H917.822L1677.47 -561Z" fill={color4}/>
                        <path className={colorClass800} d="M1688.85 -561H1685.5L925.857 1220.1H929.205L1688.85 -561Z" fill={color4}/>
                        <path className={colorClass800} d="M1700.23 -561H1696.89L937.24 1220.1H940.588L1700.23 -561Z" fill={color4}/>
                        <path className={colorClass800} d="M1711.62 -561H1708.27L948.623 1220.1H951.971L1711.62 -561Z" fill={color4}/>
                        <path className={colorClass800} d="M1723 -561H1719.65L960.006 1220.1H963.354L1723 -561Z" fill={color4}/>
                    </g>
                    <path className={colorClass300} d="M2482.01 -9H1913.05L1527 896.16H2095.96L2482.01 -9Z" fill={color5}/>
                    <path className={colorClass800} opacity="0.6" fillRule="evenodd" clipRule="evenodd" d="M1759.89 966.169H1758.19L2113.11 134H2114.82L1759.89 966.169ZM1765.68 966.169H1763.98L2118.9 134H2120.6L1765.68 966.169ZM1771.46 966.169H1769.76L2124.68 134H2126.39L1771.46 966.169ZM1777.25 966.169H1775.55L2130.47 134H2132.17L1777.25 966.169ZM1783.03 966.169H1781.33L2136.25 134H2137.96L1783.03 966.169ZM1788.82 966.169H1787.12L2142.04 134H2143.74L1788.82 966.169ZM1794.6 966.169H1792.9L2147.82 134H2149.52L1794.6 966.169ZM1800.39 966.169H1798.69L2153.61 134H2155.31L1800.39 966.169ZM1806.17 966.169H1804.47L2159.39 134H2161.09L1806.17 966.169ZM1811.96 966.169H1810.25L2165.18 134H2166.88L1811.96 966.169ZM1817.74 966.169H1816.04L2170.96 134H2172.66L1817.74 966.169ZM1823.53 966.169H1821.82L2176.75 134H2178.45L1823.53 966.169ZM1829.31 966.169H1827.61L2182.53 134H2184.23L1829.31 966.169ZM1835.1 966.169H1833.39L2188.32 134H2190.02L1835.1 966.169ZM1840.88 966.169H1839.18L2194.1 134H2195.8L1840.88 966.169ZM1846.67 966.169H1844.96L2199.89 134H2201.59L1846.67 966.169ZM1852.45 966.169H1850.75L2205.67 134H2207.37L1852.45 966.169ZM1858.24 966.169H1856.53L2211.46 134H2213.16L1858.24 966.169ZM1864.02 966.169H1862.32L2217.24 134H2218.94L1864.02 966.169ZM1869.8 966.169H1868.1L2223.03 134H2224.73L1869.8 966.169ZM1875.59 966.169H1873.89L2228.81 134H2230.51L1875.59 966.169ZM1881.37 966.169H1879.67L2234.6 134H2236.3L1881.37 966.169ZM1887.16 966.169H1885.46L2240.38 134H2242.08L1887.16 966.169ZM1892.94 966.169H1891.24L2246.17 134H2247.87L1892.94 966.169ZM1898.73 966.169H1897.03L2251.95 134H2253.65L1898.73 966.169ZM1904.51 966.169H1902.81L2257.74 134H2259.44L1904.51 966.169ZM1910.3 966.169H1908.6L2263.52 134H2265.22L1910.3 966.169ZM1916.08 966.169H1914.38L2269.31 134H2271.01L1916.08 966.169ZM1921.87 966.169H1920.17L2275.09 134H2276.79L1921.87 966.169ZM1927.65 966.169H1925.95L2280.88 134H2282.58L1927.65 966.169ZM1933.44 966.169H1931.74L2286.66 134H2288.36L1933.44 966.169ZM1939.22 966.169H1937.52L2292.44 134H2294.15L1939.22 966.169ZM1945.01 966.169H1943.31L2298.23 134H2299.93L1945.01 966.169ZM1950.79 966.169H1949.09L2304.01 134H2305.72L1950.79 966.169ZM1956.58 966.169H1954.88L2309.8 134H2311.5L1956.58 966.169ZM1962.36 966.169H1960.66L2315.58 134H2317.29L1962.36 966.169ZM1968.15 966.169H1966.45L2321.37 134H2323.07L1968.15 966.169ZM1973.93 966.169H1972.23L2327.15 134H2328.86L1973.93 966.169ZM1979.72 966.169H1978.02L2332.94 134H2334.64L1979.72 966.169ZM1985.5 966.169H1983.8L2338.72 134H2340.43L1985.5 966.169ZM1991.29 966.169H1989.59L2344.51 134H2346.21L1991.29 966.169ZM1997.07 966.169H1995.37L2350.29 134H2351.99L1997.07 966.169ZM2002.86 966.169H2001.16L2356.08 134H2357.78L2002.86 966.169Z" fill={color4}/>
                </g>
            </g>
            <defs>
            <clipPath id="clip0_1524_33">
            <rect width="2169" height="896" fill={colorRect2}/>
            </clipPath>
            </defs>
        </svg>
    )
}

export default ContactsBg