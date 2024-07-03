import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Portfolio from "./components/Portfolio";
import Impressum from "./components/Impressum";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />} >
                <Route index element={<Portfolio />} />
            </Route>

            <Route path="/impressum" element={<Impressum />} />

            {/* if route doesnt exist redirect back to frontpage */}
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}

export default App
