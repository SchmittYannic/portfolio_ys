import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useInView } from "framer-motion";

import { navLinks } from "../constants";
import { closeBlack, cogBlack, logoBlack, menuBlack } from "../assets";

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

            <div className={`${isSettingOpen ? "visible opacity-100" : "invisible opacity-0"} absolute top-[calc(1rem+50px)] left-0 w-[50%]`}>
                {/* fill in later */}
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
    const ref = useRef(null);
    const isInView = useInView(ref)

    return (
        <>
            <div ref={ref} />
            <header className={`${isInView ? "bg-transparent" : "bg-base drop-shadow-xl"} fixed max-w-[1920px] min-w-[320px] w-full z-50`}>
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