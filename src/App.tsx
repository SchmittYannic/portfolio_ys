import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import useSettings from "./hooks/useSettings";
import Layout from "./components/Layout";
import Portfolio from "./components/Portfolio";
import Impressum from "./components/Impressum";

const App = () => {

    const { setTheme, setLang, setColor } = useSettings();

    useEffect(() => {
        // if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        //     document.documentElement.classList.add('dark')
        //     setTheme("dark")
        // } else {
        //     document.documentElement.classList.remove('dark')
        //     setTheme("light")
        // }

        if (localStorage.theme === 'light') {
            document.documentElement.classList.remove('dark')
            setTheme("light")
        } else {
            document.documentElement.classList.add('dark')
            setTheme("dark")
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
            setColor("Blue");
            document.documentElement.setAttribute("data-color", "Blue");
        }
    }, []);

    return (
        <Routes>
            <Route path="/" element={<Layout />} >
                <Route index element={<Portfolio />} />
            </Route>

            <Route path="/impressum" element={<Impressum />} />

            {/* if route doesnt exist redirect back to frontpage */}
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}

export default App
