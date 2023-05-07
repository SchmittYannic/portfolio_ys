import { useState, useRef, useContext, ChangeEvent, useEffect, KeyboardEvent, ReactElement } from "react";
import { Link } from "react-router-dom";
import { useInView } from "framer-motion";

import { Toggle } from ".";
import { ColorOptionType, TextContent, colorOption, menuWidth, navLinks, navbarHeight } from "../constants";
import { closeBlack, closeWhite, cogBlack, cogWhite, logoBlack, logoWhite, menuBlack, menuWhite } from "../assets";
import { SettingsContext, UseSettingsContextType } from "../context/SettingsProvider";
import { determineIfCheckbox } from "../utils/typeguards";

type NavMenuPropsType = {
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>,
    isSettingOpen: boolean,
    setIsSettingOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

const NavMenu = ({ setIsMenuOpen, isSettingOpen, setIsSettingOpen }: NavMenuPropsType): ReactElement => {
    const { lang, theme } = useContext<UseSettingsContextType>(SettingsContext);
    const cog: string = theme === "light" ? cogBlack : cogWhite;

    return (
        <div className={`xl:ml-6 xl:mt-6 rounded-lg dark:bg-darkBase bg-base border-2 dark:border-darkBaseSecondary border-baseSecondary dark:shadow-darkTextPrimary/10 dark:shadow-md shadow-xl z-10`}>
            <div className="px-4 py-3 text-sm text-textPrimary dark:text-darkTextPrimary">
                <div className="text-center font-medium truncate">
                    {lang === "de" ? TextContent.german.navigation : TextContent.english.navigation}
                </div>
            </div>

            <hr className="dark:border-darkBaseSecondary border-baseSecondary" />

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

            <hr className="dark:border-darkBaseSecondary border-baseSecondary" />

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
    const { lang, color, setColor } = useContext<UseSettingsContextType>(SettingsContext);

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
    const { lang, theme, setTheme } = useContext<UseSettingsContextType>(SettingsContext);
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
        <div className="lg:mr-6 lg:mt-6 rounded-lg dark:bg-darkBase bg-base border-2 dark:border-darkBaseSecondary border-baseSecondary dark:shadow-darkTextPrimary/10 dark:shadow-md shadow-xl z-10">
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

            <hr className="dark:border-darkBaseSecondary border-baseSecondary" />

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

const LanguageToggle = (): ReactElement => {
    const { lang, setLang } = useContext<UseSettingsContextType>(SettingsContext);

    const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>): void => {
        const { code } = e;
        if (code === "Space") {
            e.preventDefault();
            const checkbox = document.getElementById("flag-checkbox");

            if (!checkbox) return;
            if (!determineIfCheckbox(checkbox)) return;

            const checkbox2 = document.getElementById("flag-checkbox") as HTMLInputElement;

            changeLang(!checkbox2.checked);
        }
    };

    const handleChangeLang = (e: ChangeEvent<HTMLInputElement>): void => {
        changeLang(e.target.checked)
    };

    const changeLang = (bool: boolean): void => {
        if (bool) {
            setLang("en");
            localStorage.lang = "en";
            document.documentElement.setAttribute("lang", "en");
        } else {
            setLang("de");
            localStorage.lang = "de";
            document.documentElement.setAttribute("lang", "de");
        }
    };

    return (
        <div 
            className="ml-6 flex p-2" 
            tabIndex={0}
            onKeyDown={(e) => handleKeyDown(e)}
        >
            <label className="inline-flex items-center w-full cursor-pointer">
                <input 
                    id="flag-checkbox"
                    className="sr-only peer" 
                    type="checkbox" 
                    onChange={(e) => {
                        handleChangeLang(e)
                    }}
                    tabIndex={-1}
                    checked={lang === "de" ? false : true}
                />                         
                <svg
                    className="w-8 h-8"
                    id="german-flag"
                    version="1.0" 
                    viewBox="1.505 2.031 42.244 32.201" 
                    width="850px" 
                    height="647.923px" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect className="rect" x="4.626" y="5.155" width="36" height="25.956" rx="1" ry="1" stroke="rgba(0, 0, 0, 0)" strokeWidth="6px" fill="none"/>
                    <path fill="#FFCD05" d="M 4.627 27.076 C 4.627 29.285 6.417 31.076 8.627 31.076 L 36.627 31.076 C 38.836 31.076 40.627 29.285 40.627 27.076 L 40.627 23.076 L 4.627 23.076 L 4.627 27.076 Z"/>
                    <path fill="#ED1F24" d="M 4.627 14.076 L 40.627 14.076 L 40.627 23.076 L 4.627 23.076 L 4.627 14.076 Z"/>
                    <path fill="#141414" d="M 36.627 5.076 L 8.627 5.076 C 6.417 5.076 4.627 6.866 4.627 9.076 L 4.627 14.076 L 40.627 14.076 L 40.627 9.076 C 40.627 6.866 38.836 5.076 36.627 5.076 Z"/>
                </svg>
                <svg
                    className="w-8 h-8"
                    id="uk-flag" 
                    version="1.0"
                    viewBox="1.505 2.031 42.244 32.201" 
                    width="850px" 
                    height="647.923px" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect className="rect" x="4.626" y="5.155" width="36" height="25.956" rx="1" ry="1" stroke="rgba(0, 0, 0, 0)" strokeWidth="6px" fill="none"/>
                    <path fill="#FFCD05" d="M 4.627 27.076 C 4.627 29.285 6.417 31.076 8.627 31.076 L 36.627 31.076 C 38.836 31.076 40.627 29.285 40.627 27.076 L 40.627 23.076 L 4.627 23.076 L 4.627 27.076 Z"/>
                    <path fill="#ED1F24" d="M 4.627 14.076 L 40.627 14.076 L 40.627 23.076 L 4.627 23.076 L 4.627 14.076 Z"/>
                    <path fill="#141414" d="M 36.627 5.076 L 8.627 5.076 C 6.417 5.076 4.627 6.866 4.627 9.076 L 4.627 14.076 L 40.627 14.076 L 40.627 9.076 C 40.627 6.866 38.836 5.076 36.627 5.076 Z"/>
                    <path fill="rgb(65, 71, 155)" d="M 37.998 5.022 L 7.289 5.022 C 5.796 5.022 4.584 6.358 4.584 8.006 L 4.584 28.142 C 4.584 29.79 5.796 31.125 7.289 31.125 L 37.998 31.125 C 39.493 31.125 40.703 29.79 40.703 28.142 L 40.703 8.006 C 40.703 6.358 39.493 5.022 37.998 5.022 Z"/>
                    <path fill="rgb(245, 245, 245)" d="M 40.666 7.512 C 40.453 6.099 39.339 5.022 37.998 5.022 L 37.294 5.022 L 25.757 13.36 L 25.757 5.022 L 19.53 5.022 L 19.53 13.36 L 7.993 5.022 L 7.289 5.022 C 5.947 5.022 4.835 6.099 4.623 7.512 L 14.482 14.639 L 4.584 14.639 L 4.584 21.509 L 14.482 21.509 L 4.623 28.635 C 4.835 30.049 5.947 31.125 7.289 31.125 L 7.993 31.125 L 19.53 22.788 L 19.53 31.125 L 25.757 31.125 L 25.757 22.788 L 37.294 31.125 L 37.998 31.125 C 39.339 31.125 40.453 30.049 40.666 28.635 L 30.805 21.508 L 40.703 21.508 L 40.703 14.639 L 30.805 14.639 L 40.666 7.512 Z"/>
                    <g transform="matrix(0.070545, 0, 0, 0.077818, 4.585371, -1.848224)">
                        <polygon fill="#FF4B55" points="282.483,88.276 229.517,88.276 229.517,229.517 0,229.517 0,282.483 229.517,282.483 &#10;&#9;&#9;229.517,423.724 282.483,423.724 282.483,282.483 512,282.483 512,229.517 282.483,229.517 &#9;"/>
                        <path fill="#FF4B55" d="M24.793,421.252l186.583-121.114h-32.428L9.224,410.31 C13.377,415.157,18.714,418.955,24.793,421.252z"/>
                        <path fill="#FF4B55" d="M346.388,300.138H313.96l180.716,117.305c5.057-3.321,9.277-7.807,12.287-13.075L346.388,300.138z"/>
                        <path fill="#FF4B55" d="M4.049,109.475l157.73,102.387h32.428L15.475,95.842C10.676,99.414,6.749,104.084,4.049,109.475z"/>
                        <path fill="#FF4B55" d="M332.566,211.862l170.035-110.375c-4.199-4.831-9.578-8.607-15.699-10.86L300.138,211.862H332.566z"/>
                    </g>
                </svg>
            </label>
        </div>
    )
}

const DesktopNav = () => {
    const [isSettingOpen, setIsSettingOpen] = useState<boolean>(false);
    const { lang, theme} = useContext<UseSettingsContextType>(SettingsContext);

    const cog: string = theme === "light" ? cogBlack : cogWhite;
    const logo: string = theme === "light" ? logoBlack : logoWhite;

    return (
        <>
            <div className="w-fit h-fit">
                <LanguageToggle />
            </div>

            <Link
                to="/"
                className="justify-self-center"
                onClick={() => window.scrollTo(0, 0)}
            >
                <img 
                    src={logo}
                    alt="page-logo" 
                    className="w-[50px] h-[50px]"
                />
            </Link>

            <ul className="mr-6 justify-self-end flex xl:gap-16 gap-7 items-center xl:text-xl text-lg  dark:text-darkTextPrimary text-textPrimary">
                {navLinks.map(link => (
                    <li
                        key={link.id}
                    >
                        <a href={`#${link.id}`}>{lang === "de" ? link.title_de : link.title_en}</a>
                    </li>
                ))}

                <li>
                    <button 
                        type="button"
                        className="flex items-center gap-2"
                        onClick={() => {
                            setIsSettingOpen(!isSettingOpen)
                        }}
                    >
                        <img src={cog} alt="settings" className="w-5 h-5" />
                        {lang === "de" ? TextContent.german.settings : TextContent.english.settings}
                    </button>
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
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [isSettingOpen, setIsSettingOpen] = useState<boolean>(false);
    const { theme } = useContext<UseSettingsContextType>(SettingsContext);

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
            <LanguageToggle />           
         
            <Link
                to="/"
                onClick={() => {
                    window.scrollTo(0, 0);
                }}
            >
                <img 
                    src={logo} 
                    alt="page-logo" 
                    className="w-[50px] h-[50px]" 
                />
            </Link>

            <div className={`mr-6`}>
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
    const ref: React.MutableRefObject<HTMLDivElement | null> = useRef(null);
    const isInView = useInView(ref);

    return (
        <>
            <div ref={ref} />
            <header 
                className={`${isInView ? "bg-transparent" : "dark:bg-darkBase bg-base dark:shadow-darkTextPrimary/10 dark:shadow-md shadow-xl"} fixed max-w-[1920px] min-w-[320px] w-full z-50`}
                style={{height: navbarHeight}}
            >
                <nav className="h-full">
                    <div className="h-full lg:grid grid-cols-[1fr_50px_1fr] items-center hidden">
                        <DesktopNav />
                    </div>
                    <div className="h-full lg:hidden flex items-center justify-between">
                        <MobileNav />
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar