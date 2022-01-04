import { useEffect } from 'react';

const DeveloperAbout = ({ setCurrentPage, aboutRef, setMenu }) => {
    useEffect(() => {
         // Set state for current page
         setCurrentPage('about');

         // Dismiss navbar
        setMenu(false);
    }, [setCurrentPage, setMenu])

    return (
        <div className="site-content">
            <h2 ref={ aboutRef }>About</h2>
            <p>Developer About</p>
        </div>
    )
}

export default DeveloperAbout
