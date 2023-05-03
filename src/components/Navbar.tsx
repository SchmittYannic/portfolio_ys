import { useState } from "react";
import { Link } from "react-router-dom";

import { navLinks } from "../constants";
import { closeBlack, cogBlack, logoBlack, menuBlack } from "../assets";

const DesktopNav = () => {
    const [isSettingOpen, setIsSettingOpen] = useState(false);

    return (
        <>
            <div className={`${isSettingOpen ? "bg-baseSecondary" : ""} p-2 ml-6`}>
                <img 
                    src={isSettingOpen ? closeBlack : cogBlack} 
                    alt={isSettingOpen ? "close-settings" : "settings"}
                    className="w-[50px] h-[50px] cursor-pointer"
                />
            </div>

            <Link
                to="/"
                className="justify-self-center p-2"
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
                className={`${isMenuOpen ? "visible opacity-100" : "invisible opacity-0"} absolute top-[calc(1rem+50px)] right-0 w-[50%] bg-baseSecondary shadow-lg`}
            >
                <ul className="p-8 flex flex-col gap-8 text-2xl">
                    {navLinks.map(link => (
                        <li
                            key={link.id}
                            onClick={() => {
                                setIsMenuOpen(!isMenuOpen)
                            }}
                        >
                            <a href={`#${link.id}`}>
                                {link.title_de}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <div 
                className={`${isSettingOpen ? "visible opacity-100" : "invisible opacity-0"} absolute top-[calc(1rem+50px)] left-0 w-[50%] bg-baseSecondary shadow-lg`}
            >
                {/* fill in later */}
            </div>
        </>
    )
};

const Navbar = () => {
    return (
        <nav>
            <div className="fixed w-full max-w-[1920px] min-w-[320px] lg:grid grid-cols-3 hidden z-50">
                <DesktopNav />
            </div>

            <div className="fixed w-full max-w-[1920px] min-w-[320px] lg:hidden flex items-center justify-between z-50">
                <MobileNav />
            </div>
        </nav>
    )
}

export default Navbar