import { Outlet } from "react-router-dom";
import Navbar from "./Navbar"
import Footer from "./Footer";
import { styles } from "../styles";

const Layout = () => {

    return (
        <div
            id="app"
            className={`relative w-full h-full ${styles.primaryBackground}`}
        >
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout