import { useRef, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./layout/Header";
import Navbar from "./layout/Navbar";
import DeveloperHome from "./pages/DeveloperHome";
import DeveloperExperience from "./pages/DeveloperExperience";
import DeveloperWork from "./pages/DeveloperWork";
import DeveloperCredentials from "./pages/DeveloperCredentials";
import DeveloperAbout from "./pages/DeveloperAbout";
import ScrollToTopButton from "./buttons/ScrollToTopButton";
import DeveloperContact from "./pages/DeveloperContact";

const DeveloperApp = () => {
    const homeRef = useRef(null);
    const workRef = useRef(null);
    const experienceRef = useRef(null);
    const credentialsRef = useRef(null);
    const contactRef = useRef(null);
    const aboutRef = useRef(null);

    const [currentPage, setCurrentPage] = useState("home");
    const [nightMode, setNightMode] = useState(false);
    const [menu, setMenu] = useState(false);

    const scrollToTop = () => {
        if(currentPage === "home") {
            homeRef.current.scrollIntoView({ behavior: "smooth" });
        }

        if(currentPage === "work") {
            workRef.current.scrollIntoView({ behavior: "smooth" });
        }

        if(currentPage === "experience") {
            experienceRef.current.scrollIntoView({ behavior: "smooth" });
        }

        if(currentPage === "credentials") {
            credentialsRef.current.scrollIntoView({ behavior: "smooth" });
        }

        if(currentPage === "contact") {
            contactRef.current.scrollIntoView({ behavior: "smooth" });
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
                        <Route path="/" element={<DeveloperHome setCurrentPage={ setCurrentPage } homeRef={ homeRef } setMenu={ setMenu } />} />
                        <Route path="/experience" element={<DeveloperExperience setCurrentPage={ setCurrentPage } experienceRef={ experienceRef } setMenu={ setMenu } />} />
                        <Route path="/work" element={<DeveloperWork setCurrentPage={ setCurrentPage } workRef={ workRef } setMenu={ setMenu } />} />
                        <Route path="/credentials" element={<DeveloperCredentials setCurrentPage={ setCurrentPage } credentialsRef={ credentialsRef } setMenu={ setMenu } />} />
                        <Route path="/contact" element={<DeveloperContact setCurrentPage={ setCurrentPage } contactRef={ contactRef } setMenu={ setMenu } />} />
                        <Route path="/about" element={<DeveloperAbout setCurrentPage={ setCurrentPage } aboutRef={ aboutRef } setMenu={ setMenu } />} />
                    </Routes>
                </main>
            </div>
        </>
    )
}

export default DeveloperApp
