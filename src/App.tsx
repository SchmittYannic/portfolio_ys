import { BrowserRouter } from "react-router-dom"
import { Hero, Navbar } from "./components"

const App = () => {
    return (
        <BrowserRouter>
            <div className="App w-full h-full bg-base">
                <Navbar />
                <Hero />
            </div>
        </BrowserRouter>
    )
}

export default App
