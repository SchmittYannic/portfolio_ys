import { useContext } from "react"
import { ToastContext, UseToastContextType } from "../context/ToastProvider"

const useToast = () => {
    return useContext<UseToastContextType>(ToastContext);
}

export default useToast