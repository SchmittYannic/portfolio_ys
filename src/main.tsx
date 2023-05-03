import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import { SettingsProvider } from "./context/SettingsProvider.tsx"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <SettingsProvider>
            <App />
        </SettingsProvider>
    </React.StrictMode>,
)
