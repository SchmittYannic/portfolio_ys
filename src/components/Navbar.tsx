import { useState, useRef, useContext, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { useInView } from "framer-motion";

import { TextContent, colorOption, navLinks } from "../constants";
import { closeBlack, closeWhite, cogBlack, cogWhite, logoBlack, logoWhite, menuBlack, menuWhite } from "../assets";
import { SettingsContext } from "../context/SettingsProvider";

const NavMenu = ({ setIsMenuOpen }: { setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const { lang } = useContext(SettingsContext);

    return (
        <div className={`xl:ml-6 xl:mt-6 rounded-lg dark:bg-darkBase bg-base border-2 dark:border-darkBaseSecondary border-baseSecondary divide-y dark:divide-darkBaseSecondary divide-baseSecondary dark:shadow-darkTextPrimary/10 dark:shadow-md shadow-xl z-10`}>
            <div className="px-4 py-3 text-sm text-textPrimary dark:text-darkTextPrimary">
                <div className="text-center font-medium truncate">
                    {lang === "de" ? TextContent.german.navigation : TextContent.english.navigation}
                </div>
            </div>

            <ul className="py-2 text-sm">
                {navLinks.map(link => (
                    <li
                        key={link.id}
                        onClick={() => {setIsMenuOpen(false)}}
                    >
                        <div className="p-2 h-12 w-full inline-flex items-center justify-center cursor-pointer dark:text-darkTextPrimary text-textPrimary hover:bg-gray-100 dark:hover:bg-gray-600">
                            <a href={`#${link.id}`}>{lang === "de" ? link.title_de : link.title_en}</a>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

const SettingsMenu = () => {
    const [isColorMenuOpen, setIsColorMenuOpen] = useState(false);
    const { theme, setTheme, lang, setLang, color, setColor } = useContext(SettingsContext)

    const handleChangeTheme = (e: ChangeEvent<HTMLInputElement>) => {
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

    const handleChangeLang = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setLang("en");
            localStorage.lang = "en";
            document.documentElement.setAttribute("lang", "en");
        } else {
            setLang("de");
            localStorage.lang = "de";
            document.documentElement.setAttribute("lang", "de");
        }
    }

    const handleChangeColor = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        
        setColor(value);
        document.documentElement.setAttribute("data-color", value);
        localStorage.color = value;
    }

    return (
        <div className={`lg:ml-6 lg:mt-6 rounded-lg dark:bg-darkBase bg-base border-2 dark:border-darkBaseSecondary border-baseSecondary divide-y dark:divide-darkBaseSecondary divide-baseSecondary dark:shadow-darkTextPrimary/10 dark:shadow-md shadow-xl z-10`}>
            <div className="px-4 py-3 text-sm dark:text-darkTextPrimary text-textPrimary">
                <div className="text-center font-medium truncate">
                    {lang === "de" ? TextContent.german.settings : TextContent.english.settings}
                </div>
            </div>
            
            <ul className="py-2 text-sm">
                <li>
                    <div className="flex p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                        <label className="inline-flex items-center w-full cursor-pointer">
                            <span className="mx-3 text-sm font-medium text-textPrimary dark:text-darkTextPrimary">
                                {lang === "de" ? TextContent.german.darkmode : TextContent.english.darkmode}
                            </span>
                            <div className="relative h-8 flex items-center">
                                <input 
                                    type="checkbox" 
                                    className="sr-only peer" 
                                    onChange={(e) => {
                                        handleChangeTheme(e)
                                    }}
                                    checked={theme === "light" ? false : true}
                                />
                                <div className="w-9 h-5 mr-3 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-actionOrange-400 dark:peer-focus:ring-actionOrange-900 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[50%] after:-translate-y-[50%] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-actionOrange-700" />
                            </div>
                        </label>
                    </div>
                </li>


                <li>
                    <div className="flex p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                        <label className="inline-flex items-center w-full cursor-pointer">
                            <span className="mx-3 text-sm font-medium dark:text-darkTextPrimary text-textPrimary">
                                {lang === "de" ? TextContent.german.language : TextContent.english.language}
                            </span>
                            <input 
                                className="flag-checkbox sr-only peer" 
                                type="checkbox" 
                                onChange={(e) => {
                                    handleChangeLang(e)
                                }}
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
                </li>


                <li>
                    <button 
                        type="button"
                        className="h-12 w-full px-5 py-2 flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white dark:text-darkTextPrimary text-textPrimary"
                        onClick={() => setIsColorMenuOpen(!isColorMenuOpen)}
                    >
                        {lang === "de" ? TextContent.german.colorscheme : TextContent.english.colorscheme}
                        <svg aria-hidden="true" className="w-4 h-4 rotate-90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                    </button>
                    <div className={`${isColorMenuOpen ? "visible opacity-100" : "invisible opacity-0"} absolute left-0 w-[100%] rounded-bl-lg rounded-br-lg dark:bg-darkBase bg-base border-2 border-t-[1px] dark:border-darkBaseSecondary border-baseSecondary dark:shadow-darkTextPrimary/10 dark:shadow-md shadow-xl z-10`}> 
                        <ul className="py-2 text-sm text-textPrimary dark:text-darkTextPrimary">
                            {colorOption.map(option => {
                                const colorClass = `bg-action${option.name_en}-900`;
                                return (
                                    <li key={option.id}>
                                        <label className="flex items-center h-12 w-full px-5 text-sm font-medium text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer">
                                            <input 
                                                type="radio"
                                                value={`${option.name_en}`} 
                                                name="color" 
                                                className="sr-only peer"
                                                onChange={(e) => handleChangeColor(e)}
                                                checked={color === option.name_en ? true : false}
                                            />
                                            <div className={`${colorClass} checkmark-container relative w-8 h-8 mr-4 rounded-full`}>
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
                            })}
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    )
}

const DesktopNav = () => {
    const [isSettingOpen, setIsSettingOpen] = useState(false);
    const { lang, theme} = useContext(SettingsContext);

    const close = theme === "light" ? closeBlack : closeWhite;
    const cog = theme === "light" ? cogBlack : cogWhite;
    const logo = theme === "light" ? logoBlack : logoWhite;

    return (
        <>
            <div className={`ml-6`}>
                <img 
                    src={isSettingOpen ? close : cog} 
                    alt={isSettingOpen ? "close-settings" : "settings"}
                    className="w-[50px] h-[50px] cursor-pointer"
                    onClick={() => setIsSettingOpen(!isSettingOpen)}
                />
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

            <ul className="justify-self-end flex xl:gap-16 gap-7 items-center mr-6 text-xl dark:text-darkTextPrimary text-textPrimary">
                {navLinks.map(link => (
                    <li
                        key={link.id}
                    >
                        <a href={`#${link.id}`}>{lang === "de" ? link.title_de : link.title_en}</a>
                    </li>
                ))}
            </ul>

            <div className={`${isSettingOpen ? "visible opacity-100" : "invisible opacity-0"} absolute top-[calc(1rem+50px)] left-0`}>
                <SettingsMenu />
            </div>
        </>
    )
}

const MobileNav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSettingOpen, setIsSettingOpen] = useState(false);
    const { theme } = useContext(SettingsContext);

    const close = theme === "light" ? closeBlack : closeWhite;
    const cog = theme === "light" ? cogBlack : cogWhite;
    const logo = theme === "light" ? logoBlack : logoWhite;
    const menu = theme === "light" ? menuBlack : menuWhite;

    return (
        <>
            <div className={`ml-6`}>
                <img 
                    src={isSettingOpen ? close : cog} 
                    alt={isSettingOpen ? "close-settings" : "settings"} 
                    className="w-[50px] h-[50px] cursor-pointer"
                    onClick={() => setIsSettingOpen(!isSettingOpen)}
                />
            </div>

            
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
                    onClick={() => {
                        setIsMenuOpen(!isMenuOpen);
                    }}
                />
            </div>

            <div 
                className={`${isMenuOpen ? "visible opacity-100" : "invisible opacity-0"} absolute top-[calc(80px)] right-0 w-[180px]`}
            >
                <NavMenu setIsMenuOpen={setIsMenuOpen} />
            </div>

            <div className={`${isSettingOpen ? "visible opacity-100" : "invisible opacity-0"} absolute top-[calc(80px)] left-0`}>
                <SettingsMenu />
            </div>
        </>
    )
};

const Navbar = () => {
    const ref = useRef(null);
    const isInView = useInView(ref);

    return (
        <>
            <div ref={ref} />
            <header className={`${isInView ? "bg-transparent" : "dark:bg-darkBase bg-base dark:shadow-darkTextPrimary/10 dark:shadow-md shadow-xl"} fixed max-w-[1920px] min-w-[320px] w-full h-[80px] z-50`}>
                <nav className="h-full">
                    <div className="h-full lg:grid grid-cols-3 items-center hidden">
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