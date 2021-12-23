import { useEffect } from 'react';

const DeveloperHome = ({ setCurrentPage, homeRef }) => {
    useEffect(() => {
        // Set state for current page
        setCurrentPage('home');
    }, [setCurrentPage])

    return (
        <div className="site-content">
            <h2 ref={ homeRef }>Home</h2>
            <p>Developer Home</p>
        </div>
    )
}

export default DeveloperHome
