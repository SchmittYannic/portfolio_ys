import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import { SettingsProvider, ToastProvider } from "./context/"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <SettingsProvider>
            <ToastProvider>
                <App />
            </ToastProvider>
        </SettingsProvider>
    </React.StrictMode>,
)
