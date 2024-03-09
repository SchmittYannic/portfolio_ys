import { useState, useRef, ChangeEvent, useEffect, KeyboardEvent, ReactElement } from "react";
import { Link } from "react-router-dom";
import { useInView, useScroll, motion } from "framer-motion";

import { Toggle, LanguageToggle } from ".";
import { NavElement } from "./ui";
import { ColorOptionType, TextContent, colorOption, menuWidth, navLinks, navbarHeight } from "../constants";
import { closeBlack, closeWhite, cogBlack, cogWhite, logoBlack, logoWhite, menuBlack, menuWhite } from "../assets";
import useSettings from "../hooks/useSettings";
import { styles } from "../styles";
import useWindowSize from "../hooks/useWindowSize";

type NavMenuPropsType = {
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>,
    isSettingOpen: boolean,
    setIsSettingOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

const NavMenu = ({ setIsMenuOpen, isSettingOpen, setIsSettingOpen }: NavMenuPropsType): ReactElement => {
    const { lang, theme } = useSettings();
    const cog: string = theme === "light" ? cogBlack : cogWhite;

    return (
        <div className={`xl:ml-6 xl:mt-6 mt-1 rounded-lg ${styles.primaryBackground} border-2 ${styles.primaryBorderColor} dark:shadow-darkTextPrimary/10 dark:shadow-md shadow-xl z-10`}>
            <div className="px-4 py-3 text-sm text-textPrimary dark:text-darkTextPrimary">
                <div className="text-center font-medium truncate">
                    {lang === "de" ? TextContent.german.navigation : TextContent.english.navigation}
                </div>
            </div>

            <hr className={`${styles.primaryBorderColor}`} />

            <ul className="py-2 text-sm">
                {navLinks.map(link => (
                    <li
                        key={link.id}
                        onClick={() => {setIsMenuOpen(false)}}
                    >
                        <div className="h-12 w-full inline-flex items-center justify-center cursor-pointer dark:text-darkTextPrimary text-textPrimary hover:bg-gray-100 dark:hover:bg-gray-600">
                            <a 
                                className="w-full h-full flex items-center justify-center"
                                href={`#${link.id}`}
                            >
                                {lang === "de" ? link.title_de : link.title_en}
                            </a>
                        </div>
                    </li>
                ))}
            </ul>

            <hr className={`${styles.primaryBorderColor}`} />

            <button 
                type="button"
                className="w-full px-4 py-3 flex items-center justify-center gap-2 text-sm dark:text-darkTextPrimary text-textPrimary hover:bg-gray-100 dark:hover:bg-gray-600"
                onClick={() => {
                    setIsSettingOpen(!isSettingOpen);
                }}
            >
                <img src={cog} alt="settings" className="w-5 h-5" />
                {lang === "de" ? TextContent.german.settings : TextContent.english.settings}
            </button>

            <div 
                className={`${isSettingOpen ? "visible opacity-100 scale-1" : "invisible opacity-0 scale-0"} absolute top-0 origin-center transition-[transform]`}
                style={{right: menuWidth}}
            >
                <SettingsMenu />
            </div>
        </div>
    )
}

type ColorOptionPropsType = {
    idx: number,
    option: ColorOptionType,
    radioRef: React.MutableRefObject<HTMLInputElement | null>,
    focusedRadio: number,
    setFocusedRadio: React.Dispatch<React.SetStateAction<number>>,
}

const ColorOption = ({idx, option, radioRef, focusedRadio, setFocusedRadio}: ColorOptionPropsType): ReactElement => {
    const { lang, color, setColor } = useSettings();

    const bgColorClass900: string = `bg-action${option.name_en}-900`;
    const ringColorClass600: string = `ring-action${option.name_en}-600`;

    const handleChangeColor = (e: ChangeEvent<HTMLInputElement>): void => {
        const value: string = e.target.value;
        setFocusedRadio(idx);
        setColor(value);
        document.documentElement.setAttribute("data-color", value);
        localStorage.color = value;
    }

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
        const { key } = e
        const colorOptionLength: number = colorOption.length
        if (key === "ArrowDown") {
            e.preventDefault();
            setFocusedRadio(prev => {
                const nextIndexCount = (prev + 1) % colorOptionLength;
                return nextIndexCount;
            })
        }

        if (key === "ArrowUp") {
            e.preventDefault();
            setFocusedRadio(prev => {
                const nextIndexCount = (prev + colorOptionLength - 1) % colorOptionLength;
                return nextIndexCount;
            })
        }
    }

    return (
        <li>
            <label className="flex items-center h-12 w-full px-5 text-sm font-medium text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer">
                <input 
                    type="radio"
                    value={`${option.name_en}`}
                    ref={idx === focusedRadio ? radioRef : null}
                    name="color" 
                    className="sr-only peer"
                    onChange={(e) => handleChangeColor(e)}
                    onKeyDown={(e) => handleKeyDown(e)}
                    checked={color === option.name_en ? true : false}
                />
                <div className={`${bgColorClass900} checkmark-container relative w-8 h-8 mr-4 rounded-full peer-focus:ring-4 ${ringColorClass600}`}>
                    <svg className={`${color === option.name_en ? "opacity-100" : "opacity-0"} checkmark absolute w-4 h-4 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]`} width="800px" height="800px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                        <g id="SVGRepo_iconCarrier"> <path d="M0 0h48v48H0z" fill="none"/> <g id="Shopicon"> <polygon points="18,33.172 6,21.172 3.171,24 18,38.828 44.829,12 42,9.172 "/> </g> </g>
                    </svg>
                </div>
                {lang === "de" ? option.name_de : option.name_en}
            </label>
        </li>
    )
}

const SettingsMenu = () => {
    const { lang, theme, setTheme } = useSettings();
    const [focusedRadio, setFocusedRadio] = useState<number>(-1);
    const radioRef = useRef<HTMLInputElement | null>(null);

    const handleChangeTheme = (e: ChangeEvent<HTMLInputElement>): void => {
        if (e.target.checked) {
            setTheme("dark");
            localStorage.theme = "dark";
            document.documentElement.classList.add("dark");
        } else {
            setTheme("light");
            localStorage.theme = "light";
            document.documentElement.classList.remove("dark");
        }
    }

    useEffect(() => {
        if(!radioRef.current) return;
        radioRef.current.focus()
    }, [focusedRadio])

    return (
        <div className={`lg:mr-6 lg:mt-6 mt-1 rounded-lg ${styles.primaryBackground} border-2 ${styles.primaryBorderColor} dark:shadow-darkTextPrimary/10 dark:shadow-md shadow-xl z-10`}>
            <div className="h-12 w-full px-5 py-2 flex items-center text-sm dark:text-darkTextPrimary text-textPrimary">
                {lang === "de" ? TextContent.german.colorscheme : TextContent.english.colorscheme}
            </div>
            <ul>
                {colorOption.map((option, idx) => (
                    <ColorOption 
                        key={option.id} 
                        idx={idx} 
                        option={option} 
                        radioRef={radioRef}
                        focusedRadio={focusedRadio}
                        setFocusedRadio={setFocusedRadio}
                    />
                ))}
            </ul>

            <hr className={`${styles.primaryBorderColor}`} />

            <div className="flex p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                <label className="inline-flex items-center w-full cursor-pointer">
                    <span className="mx-3 text-sm font-medium text-textPrimary dark:text-darkTextPrimary">
                        {lang === "de" ? TextContent.german.darkmode : TextContent.english.darkmode}
                    </span>
                    <Toggle 
                        onChange={(e) => handleChangeTheme(e)} 
                        initial={theme === "light" ? false : true}
                    />
                </label>
            </div>
        </div>
    )
}

const DesktopNav = () => {
    const [isSettingOpen, setIsSettingOpen] = useState<boolean>(false);
    const { lang, theme} = useSettings();

    const cog: string = theme === "light" ? cogBlack : cogWhite;
    const logo: string = theme === "light" ? logoBlack : logoWhite;

    return (
        <>
            <div className="ml-6 py-2 w-fit flex items-center">
                <div className="relative h-full">
                    <NavElement>
                        <LanguageToggle />
                    </NavElement>
                </div>
            </div>

            <div className="py-2">
                <div className="relative h-full">
                    <NavElement>
                        <Link
                            to="/"
                            className="relative h-full flex items-center justify-center z-20 rounded-md"
                            onClick={() => window.scrollTo(0, 0)}
                        >
                            <img 
                                src={logo}
                                alt="page-logo" 
                                className="w-[50px] h-[50px]"
                            />
                        </Link>
                    </NavElement>
                </div>
            </div>

            <ul className="mr-6 py-2 justify-self-end flex 2xl:gap-16 xl:gap-10 gap-1 items-stretch  xl:text-xl text-lg  dark:text-darkTextPrimary text-textPrimary">
                {navLinks.map(link => (
                    <li className="relative">
                        <NavElement key={link.id}>
                            <a className="relative px-2 h-full flex items-center z-20 rounded-md" href={`#${link.id}`}>
                                {lang === "de" ? link.title_de : link.title_en}
                            </a>
                        </NavElement>
                    </li>
                ))}

                <li className="relative">
                    <NavElement>
                        <button 
                            type="button"
                            className="relative px-2 h-full flex items-center gap-2 z-20 rounded-md"
                            onClick={() => {
                                setIsSettingOpen(!isSettingOpen)
                            }}
                        >
                            <img src={cog} alt="settings" className="w-5 h-5" />
                            {lang === "de" ? TextContent.german.settings : TextContent.english.settings}
                        </button>
                    </NavElement>
                </li>
            </ul>

            <div 
                className={`${isSettingOpen ? "visible opacity-100 scale-1" : "invisible opacity-0 scale-0"} absolute right-0 origin-center transition-[transform]`}
                style={{top: navbarHeight}}
            >
                <SettingsMenu />
            </div>
        </>
    )
}

const MobileNav = (): ReactElement => {
    const { theme } = useSettings();
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [isSettingOpen, setIsSettingOpen] = useState<boolean>(false);

    const close: string = theme === "light" ? closeBlack : closeWhite;
    const logo: string = theme === "light" ? logoBlack : logoWhite;
    const menu: string = theme === "light" ? menuBlack : menuWhite;

    const handleKeyDown = (e: KeyboardEvent<HTMLImageElement>): void => {
        const { key } = e;
        if (key === "Enter") {
            e.preventDefault();
            setIsMenuOpen(!isMenuOpen);
        }
    }

    return (
        <>  
            <div className="ml-6 py-2 w-fit flex items-center">
                <div className="relative h-full">
                    <NavElement>
                        <LanguageToggle />
                    </NavElement>
                </div>
            </div>                     
         
            <div className="py-2">
                <div className="relative h-full">
                    <NavElement>
                        <Link
                            to="/"
                            className="relative h-full flex items-center justify-center z-20 rounded-md"
                            onClick={() => window.scrollTo(0, 0)}
                        >
                            <img 
                                src={logo}
                                alt="page-logo" 
                                className="w-[50px] h-[50px]"
                            />
                        </Link>
                    </NavElement>
                </div>
            </div>

            <div className={`mr-6 py-2 justify-self-end`}>
                <div className="relative h-full">
                    <NavElement>
                        <button
                            className="relative px-2 h-full z-20 rounded-md"
                            type="button"
                            onClick={() => {
                                setIsMenuOpen(!isMenuOpen);
                            }}
                        >
                            <img 
                                src={isMenuOpen ? close : menu}
                                alt={isMenuOpen ? "close-burger-menu" : "burger-menu"} 
                                className="w-[50px] h-[50px] cursor-pointer"
                                tabIndex={0}
                                onClick={() => {
                                    setIsMenuOpen(!isMenuOpen);
                                }}
                                onKeyDown={handleKeyDown}
                            />
                        </button>
                    </NavElement>
                </div>
            </div>

            <div 
                className={`${isMenuOpen ? "visible opacity-100 scale-1" : "invisible opacity-0 scale-0"} absolute right-0 origin-center transition-[transform]`}
                style={{
                    top: navbarHeight,
                    width: menuWidth,
                }}
            >
                <NavMenu setIsMenuOpen={setIsMenuOpen} isSettingOpen={isSettingOpen} setIsSettingOpen={setIsSettingOpen} />
            </div>
        </>
    )
};

const Navbar = (): ReactElement => {
    const { color } = useSettings();
    const windowSize = useWindowSize();
    const ref: React.MutableRefObject<HTMLDivElement | null> = useRef(null);

    const isInView = useInView(ref);
    const { scrollYProgress } = useScroll();
    const scaleX = scrollYProgress;

    const bgColorClass600: string = `bg-action${color}-600`;
    const isXlScreen = windowSize.width && windowSize.width >= 1280;

    return (
        <>
            <div ref={ref} />
            <header 
                className={`${isInView ? "bg-transparent" : `${styles.primaryBackground} dark:shadow-darkTextPrimary/10 dark:shadow-md shadow-xl`} fixed w-full z-50`}
                style={{height: navbarHeight}}
            >
                <nav className="relative h-full mx-auto max-w-[1920px] min-w-[320px]">
                    <div className="h-full grid grid-cols-[1fr_70px_1fr] items-stretch">
                        {isXlScreen ? <DesktopNav /> : <MobileNav />}
                    </div>
                </nav>

                <motion.div className={`h-1 ${bgColorClass600} origin-left`} style={{ scaleX }} />
            </header>
        </>
    )
}

export default Navbar