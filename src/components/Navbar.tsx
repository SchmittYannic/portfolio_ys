import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useInView } from "framer-motion";

import { navLinks } from "../constants";
import { closeBlack, cogBlack, logoBlack, menuBlack } from "../assets";

const NavMenu = ({ setIsMenuOpen }: { setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
    return (
        <div className={`xl:ml-6 xl:mt-6 rounded-lg bg-base border-2 border-baseSecondary divide-y divide-baseSecondary shadow-xl z-10`}>
            <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                <div className="text-center font-medium truncate">Navigation</div>
            </div>

            <ul className="py-2 text-sm">
                {navLinks.map(link => (
                    <li
                        key={link.id}
                        onClick={() => {setIsMenuOpen(false)}}
                    >
                        <div className="p-2 h-12 w-full inline-flex items-center justify-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600">
                            <a href={`#${link.id}`}>{link.title_de}</a>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

const SettingsMenu = () => {
    return (
        <div className={`xl:ml-6 xl:mt-6 rounded-lg bg-base border-2 border-baseSecondary divide-y divide-baseSecondary shadow-xl z-10`}>
            <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                <div className="text-center font-medium truncate">Einstellungen</div>
            </div>
            
            <ul className="py-2 text-sm">
                <li>
                    <div className="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                        <label className="inline-flex items-center w-full cursor-pointer">
                            <span className="mx-3 text-sm font-medium text-textPrimary dark:text-gray-300">
                                Dunkelmodus
                            </span>
                            <div className="relative h-8 flex items-center">
                                <input type="checkbox" value="" className="sr-only peer" />
                                <div className="w-9 h-5 mr-3 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-actionOrange-400 dark:peer-focus:ring-actionOrange-900 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[50%] after:-translate-y-[50%] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-actionOrange-700" />
                            </div>
                        </label>
                    </div>
                </li>
                <li>
                    <div className="flex p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                        <label className="inline-flex items-center w-full cursor-pointer">
                            <span className="mx-3 text-sm font-medium text-textPrimary">
                                Sprache
                            </span>
                            <input className="flag-checkbox sr-only peer" type="checkbox" value="" />                         
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
                    {/* Theme change here */}
                </li>
            </ul>
        </div>
    )
}

const DesktopNav = () => {
    const [isSettingOpen, setIsSettingOpen] = useState(false);

    return (
        <>
            <div className={`p-2 ml-6`}>
                <img 
                    src={isSettingOpen ? closeBlack : cogBlack} 
                    alt={isSettingOpen ? "close-settings" : "settings"}
                    className="w-[50px] h-[50px] cursor-pointer"
                    onClick={() => setIsSettingOpen(!isSettingOpen)}
                />
            </div>

            <Link
                to="/"
                className="justify-self-center p-2"
                onClick={() => window.scrollTo(0, 0)}
            >
                <img 
                    src={logoBlack} 
                    alt="page-logo-black" 
                    className="w-[50px] h-[50px]"
                />
            </Link>

            <ul className="justify-self-end flex xl:gap-16 gap-7 items-center p-2 mr-6 text-xl">
                {navLinks.map(link => (
                    <li
                        key={link.id}
                    >
                        <a href={`#${link.id}`}>{link.title_de}</a>
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

    return (
        <>
            <div className={`${isSettingOpen ? "bg-baseSecondary" : ""} p-2`}>
                <img 
                    src={isSettingOpen ? closeBlack : cogBlack} 
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
                    src={logoBlack} 
                    alt="page-logo-black" 
                    className="w-[50px] h-[50px]" 
                />
            </Link>

            <div className={`${isMenuOpen ? "bg-baseSecondary" : ""} p-2`}>
                <img 
                    src={isMenuOpen ? closeBlack : menuBlack}
                    alt={isMenuOpen ? "close-burger-menu" : "burger-menu"} 
                    className="w-[50px] h-[50px] cursor-pointer"
                    onClick={() => {
                        setIsMenuOpen(!isMenuOpen);
                    }}
                />
            </div>

            <div 
                className={`${isMenuOpen ? "visible opacity-100" : "invisible opacity-0"} absolute top-[calc(1rem+50px)] right-0 w-[180px]`}
            >
                <NavMenu setIsMenuOpen={setIsMenuOpen} />
            </div>

            <div className={`${isSettingOpen ? "visible opacity-100" : "invisible opacity-0"} absolute top-[calc(1rem+50px)] left-0`}>
                <SettingsMenu />
            </div>
        </>
    )
};

const Navbar = () => {
    const ref = useRef(null);
    const isInView = useInView(ref)

    return (
        <>
            <div ref={ref} />
            <header className={`${isInView ? "bg-transparent" : "bg-base shadow-xl"} fixed max-w-[1920px] min-w-[320px] w-full z-50`}>
                <nav>
                    <div className="lg:grid grid-cols-3 hidden">
                        <DesktopNav />
                    </div>
                    <div className="lg:hidden flex items-center justify-between">
                        <MobileNav />
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar