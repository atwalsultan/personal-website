import { useEffect } from 'react';

const DeveloperAbout = ({ setCurrentPage, aboutRef }) => {
    useEffect(() => {
         // Set state for current page
         setCurrentPage('about');
    }, [setCurrentPage])

    return (
        <div>
            <h1 ref={ aboutRef }>About</h1>
            <p>Developer About</p>
        </div>
    )
}

export default DeveloperAbout
