import { BrowserRouter } from "react-router-dom"
import { Hero, Navbar, About } from "./components"
import { useContext, useEffect } from "react"
import { SettingsContext } from "./context/SettingsProvider"

const App = () => {
    const { setTheme, setLang } = useContext(SettingsContext)

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
    }, [])

    return (
        <BrowserRouter>
            <div className="App w-full h-full dark:bg-darkBase bg-base">
                <Navbar />
                <Hero />
                <About />
            </div>
        </BrowserRouter>
    )
}

export default App
