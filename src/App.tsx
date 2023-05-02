import { BrowserRouter } from "react-router-dom"
import { Hero } from "./components"

const App = () => {
    return (
        <BrowserRouter>
            <div className="App w-full h-full bg-base">
                <Hero />
            </div>
        </BrowserRouter>
    )
}

export default App
