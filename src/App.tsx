import { BrowserRouter } from "react-router-dom"
import { useContext, useEffect } from "react"
import { Hero, Navbar, About, Contact, Toast, Projects } from "./components"
import { UseSettingsContextType, SettingsContext } from "./context/SettingsProvider"
import { UseToastContextType, ToastContext } from "./context/ToastProvider"

const App = () => {
    const { setTheme, setLang, setColor } = useContext<UseSettingsContextType>(SettingsContext);
    const { toastList } = useContext<UseToastContextType>(ToastContext);

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
        <BrowserRouter>
            <div className="App w-full h-full dark:bg-darkBase bg-base">
                <Navbar />
                <Hero />
                <Projects />
                <About />
                <Contact />
                <Toast toastList={toastList} />
            </div>
        </BrowserRouter>
    )
}

export default App
