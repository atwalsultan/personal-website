import { useEffect } from 'react';

const DeveloperContact = ({ setCurrentPage, contactRef, setMenu }) => {
    useEffect(() => {
         // Set state for current page
         setCurrentPage('contact');

         // Dismiss navbar
        setMenu(false);
    }, [setCurrentPage, setMenu])

    return (
        <div className="site-content">
            <h2 ref={ contactRef }>Contact</h2>
            <p>Developer Contact</p>
        </div>
    )
}

export default DeveloperContact
