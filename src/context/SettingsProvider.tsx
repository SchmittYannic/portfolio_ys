import { useState, createContext, ReactElement } from "react"

export type UseSettingsContextType = {
    theme: string,
    setTheme: React.Dispatch<React.SetStateAction<string>>,
    lang: string,
    setLang: React.Dispatch<React.SetStateAction<string>>,
    color: string,
    setColor: React.Dispatch<React.SetStateAction<string>>,
}

const initContextState: UseSettingsContextType = {
    theme: "",
    setTheme: () => { },
    lang: "",
    setLang: () => { },
    color: "",
    setColor: () => { },
}

export const SettingsContext = createContext<UseSettingsContextType>(initContextState)

type ChildrenType = { children?: ReactElement | ReactElement[] }

export const SettingsProvider = ({ children }: ChildrenType): ReactElement => {
    const [theme, setTheme] = useState("dark");
    const [lang, setLang] = useState("de");
    const [color, setColor] = useState("blue");

    return (
        <SettingsContext.Provider value={{ theme, setTheme, lang, setLang, color, setColor }}>
            {children}
        </SettingsContext.Provider>
    )
}