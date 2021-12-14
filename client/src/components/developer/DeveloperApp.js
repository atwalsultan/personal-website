import { Route, Routes } from 'react-router-dom';

import Header from './layout/Header';
import Navbar from './layout/Navbar';
import DeveloperHome from './pages/DeveloperHome';
import DeveloperExperience from './pages/DeveloperExperience';
import DeveloperWork from './pages/DeveloperWork';
import DeveloperCredentials from './pages/DeveloperCredentials';
import DeveloperAbout from './pages/DeveloperAbout';

const DeveloperApp = () => {
    return (
        <>
            <Header />

            <div className='navbar-content'>
                <Navbar />

                <main className='site-content'>
                    <div className='scroll-to-top-button'></div>

                    <Routes>
                        <Route path='/' element={<DeveloperHome />} />
                        <Route path='/experience' element={<DeveloperExperience />} />
                        <Route path='/work' element={<DeveloperWork />} />
                        <Route path='/credentials' element={<DeveloperCredentials />} />
                        <Route path='/about' element={<DeveloperAbout />} />
                    </Routes>
                </main>
            </div>
        </>
    )
}

export default DeveloperApp
