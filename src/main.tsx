import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { SettingsProvider } from "./context/SettingsProvider.tsx"
import { ToastProvider } from "./context/ToastProvider.tsx"
import { NavHoverStateProvider } from "./context/NavHoverStateProvider.tsx"
import App from "./App.tsx"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <SettingsProvider>
                <ToastProvider>
                    <NavHoverStateProvider>
                        <Routes>
                            <Route path="/*" element={<App />} />
                        </Routes>
                    </NavHoverStateProvider>
                </ToastProvider>
            </SettingsProvider>
        </BrowserRouter>
    </React.StrictMode>,
)
