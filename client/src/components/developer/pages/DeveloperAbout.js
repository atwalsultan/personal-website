import { useEffect } from 'react';

const DeveloperAbout = ({ setCurrentPage, aboutRef }) => {
    useEffect(() => {
         // Set state for current page
         setCurrentPage('about');
    }, [setCurrentPage])

    return (
        <div className="site-content">
            <h2 ref={ aboutRef }>About</h2>
            <p>Developer About</p>
        </div>
    )
}

export default DeveloperAbout
