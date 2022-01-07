import { useEffect } from 'react';

import IntroCard from '../cards/IntroCard';

const DeveloperHome = ({ setCurrentPage, homeRef, setMenu }) => {
    useEffect(() => {
        // Set state for current page
        setCurrentPage('home');

        // Dismiss navbar
        setMenu(false);
    }, [setCurrentPage, setMenu])

    return (
        <div className="site-content">
            <h2 ref={homeRef}>Home</h2>
            <IntroCard />
        </div>
    )
}

export default DeveloperHome
