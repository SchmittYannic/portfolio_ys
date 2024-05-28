import { useEffect } from "react";
import { Outlet } from "react-router-dom"
import useToast from "../hooks/useToast";
import useSettings from "../hooks/useSettings";
import Navbar from "./Navbar"
import Toast from "./Toast"
import { styles } from "../styles";

const Layout = () => {

    const { setTheme, setLang, setColor } = useSettings();
    const { toastList } = useToast();

    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
            setTheme("dark")
        } else {
            document.documentElement.classList.remove('dark')
            setTheme("light")
        }

        if (localStorage.lang === 'en') {
            setLang("en")
            document.documentElement.setAttribute("lang", "en")
        } else {
            setLang("de")
            document.documentElement.setAttribute("lang", "de")
        }

        if (localStorage.color) {
            setColor(localStorage.color);
            document.documentElement.setAttribute("data-color", localStorage.color);
        } else {
            setColor("Orange");
            document.documentElement.setAttribute("data-color", "Orange");
        }
    }, [])

    return (
        <div
            id="app"
            className={`relative w-full h-full ${styles.primaryBackground}`}
        >
            <Navbar />
            <Outlet />
            <Toast toastList={toastList} />
        </div>
    )
}

export default Layout