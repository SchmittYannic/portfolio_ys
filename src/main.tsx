import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import { SettingsProvider } from "./context/SettingsProvider.tsx"
import { ToastProvider } from "./context/ToastProvider.tsx"
import { NavHoverStateProvider } from "./context/NavHoverStateProvider.tsx"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <SettingsProvider>
            <ToastProvider>
                <NavHoverStateProvider>
                    <App />
                </NavHoverStateProvider>
            </ToastProvider>
        </SettingsProvider>
    </React.StrictMode>,
)
