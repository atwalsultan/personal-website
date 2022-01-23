import { useRef, useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./layout/Header";
import Navbar from "./layout/Navbar";
import DeveloperExperience from "./pages/DeveloperExperience";
import DeveloperWork from "./pages/DeveloperWork";
import DeveloperCredentials from "./pages/DeveloperCredentials";
import DeveloperAbout from "./pages/DeveloperAbout";
import ScrollToTopButton from "./buttons/ScrollToTopButton";

const DeveloperApp = () => {
    const workRef = useRef(null);
    const experienceRef = useRef(null);
    const credentialsRef = useRef(null);
    const contactRef = useRef(null);
    const aboutRef = useRef(null);

    const [currentPage, setCurrentPage] = useState("home");
    const [nightMode, setNightMode] = useState(true);
    const [menu, setMenu] = useState(false);

    useEffect(() => {
        const savedMode = localStorage.getItem("nightMode");
        const savedModeJSON = JSON.parse(savedMode);
        
        if(savedModeJSON !== null) {
            setNightMode(savedModeJSON);
        }
    }, []);

    const scrollToTop = () => {
        if(currentPage === "work") {
            workRef.current.scrollIntoView({ behavior: "smooth" });
        }

        if(currentPage === "experience") {
            experienceRef.current.scrollIntoView({ behavior: "smooth" });
        }

        if(currentPage === "credentials") {
            credentialsRef.current.scrollIntoView({ behavior: "smooth" });
        }

        if(currentPage === "about") {
            aboutRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <Header nightMode={ nightMode } menu={ menu } setMenu={ setMenu } />

            <div className={ nightMode ? "navbar-content dark" : "navbar-content" }>
                <Navbar nightMode={ nightMode } setNightMode={ setNightMode } menu={ menu } currentPage={ currentPage } />

                <main className="site-content-container">
                    <ScrollToTopButton scrollToTop={ scrollToTop } />

                    <Routes>
                        <Route path="/" element={<DeveloperWork setCurrentPage={ setCurrentPage } workRef={ workRef } setMenu={ setMenu } />} />
                        <Route path="/experience" element={<DeveloperExperience setCurrentPage={ setCurrentPage } experienceRef={ experienceRef } setMenu={ setMenu } />} />
                        <Route path="/credentials" element={<DeveloperCredentials setCurrentPage={ setCurrentPage } credentialsRef={ credentialsRef } setMenu={ setMenu } />} />
                        <Route path="/about" element={<DeveloperAbout setCurrentPage={ setCurrentPage } aboutRef={ aboutRef } contactRef={ contactRef } setMenu={ setMenu } />} />
                    </Routes>
                </main>
            </div>
        </>
    )
}

export default DeveloperApp
