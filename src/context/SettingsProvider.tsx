import { useState, createContext, ReactElement } from "react"

export type UseSettingsContextType = {
    theme: string,
    setTheme: React.Dispatch<React.SetStateAction<string>>,
    lang: string,
    setLang: React.Dispatch<React.SetStateAction<string>>,
    color: string,
    setColor: React.Dispatch<React.SetStateAction<string>>,
    isBurgerMenuOpen: boolean,
    setIsBurgerMenuOpen: React.Dispatch<React.SetStateAction<boolean>>,
    isSettingsMenuOpen: boolean,
    setIsSettingsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

const initContextState: UseSettingsContextType = {
    theme: "",
    setTheme: () => { },
    lang: "",
    setLang: () => { },
    color: "",
    setColor: () => { },
    isBurgerMenuOpen: false,
    setIsBurgerMenuOpen: () => { },
    isSettingsMenuOpen: false,
    setIsSettingsMenuOpen: () => { },
}

export const SettingsContext = createContext<UseSettingsContextType>(initContextState)

type ChildrenType = { children?: ReactElement | ReactElement[] }

export const SettingsProvider = ({ children }: ChildrenType): ReactElement => {
    const [theme, setTheme] = useState("dark");
    const [lang, setLang] = useState("de");
    const [color, setColor] = useState("blue");

    const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
    const [isSettingsMenuOpen, setIsSettingsMenuOpen] = useState(false);

    return (
        <SettingsContext.Provider
            value={{
                theme,
                setTheme,
                lang,
                setLang,
                color,
                setColor,
                isBurgerMenuOpen,
                setIsBurgerMenuOpen,
                isSettingsMenuOpen,
                setIsSettingsMenuOpen,
            }}
        >
            {children}
        </SettingsContext.Provider>
    )
}