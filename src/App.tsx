import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Portfolio from "./components/Portfolio";

const App = () => {
    // const windowSize = useWindowSize();

    // const isXlScreen = windowSize.width && windowSize.width >= 1280;

    return (
        // <BrowserRouter>
        //     <div className={`app relative w-full h-full ${styles.primaryBackground}`}>
        //         <Navbar />
        //         <Hero />
        //         {isXlScreen ? <Projects /> : <ProjectsMobile />}
        //         <About />
        //         <Contact />
        //         <Toast toastList={toastList} />
        //     </div>
        // </BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />} >
                <Route index element={<Portfolio />} />
            </Route>

            {/* if route doesnt exist redirect back to frontpage */}
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}

export default App
