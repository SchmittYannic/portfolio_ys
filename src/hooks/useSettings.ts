import { useContext } from "react"
import { SettingsContext, UseSettingsContextType } from "../context/SettingsProvider"

const useSettings = () => {
    return useContext<UseSettingsContextType>(SettingsContext);
}

export default useSettings