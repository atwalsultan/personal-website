import { useRef, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './layout/Header';
import Navbar from './layout/Navbar';
import DeveloperHome from './pages/DeveloperHome';
import DeveloperExperience from './pages/DeveloperExperience';
import DeveloperWork from './pages/DeveloperWork';
import DeveloperCredentials from './pages/DeveloperCredentials';
import DeveloperAbout from './pages/DeveloperAbout';

const DeveloperApp = () => {
    const homeRef = useRef(null);
    const workRef = useRef(null);
    const experienceRef = useRef(null);
    const credentialsRef = useRef(null);
    const aboutRef = useRef(null);

    const [currentPage, setCurrentPage] = useState('home');

    const scrollToTop = () => {
        if(currentPage === 'home') {
            homeRef.current.scrollIntoView({ behavior: 'smooth' });
        }

        if(currentPage === 'work') {
            workRef.current.scrollIntoView({ behavior: 'smooth' });
        }

        if(currentPage === 'experience') {
            experienceRef.current.scrollIntoView({ behavior: 'smooth' });
        }

        if(currentPage === 'credentials') {
            credentialsRef.current.scrollIntoView({ behavior: 'smooth' });
        }

        if(currentPage === 'about') {
            aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <Header />

            <div className='navbar-content'>
                <Navbar />

                <main className='site-content'>
                    <div className='scroll-to-top-button' onClick={ scrollToTop }></div>

                    <Routes>
                        <Route path='/' element={<DeveloperHome setCurrentPage={ setCurrentPage } homeRef={ homeRef } />} />
                        <Route path='/experience' element={<DeveloperExperience setCurrentPage={ setCurrentPage } experienceRef={ experienceRef } />} />
                        <Route path='/work' element={<DeveloperWork setCurrentPage={ setCurrentPage } workRef={ workRef } />} />
                        <Route path='/credentials' element={<DeveloperCredentials setCurrentPage={ setCurrentPage } credentialsRef={ credentialsRef } />} />
                        <Route path='/about' element={<DeveloperAbout setCurrentPage={ setCurrentPage } aboutRef={ aboutRef } />} />
                    </Routes>
                </main>
            </div>
        </>
    )
}

export default DeveloperApp
