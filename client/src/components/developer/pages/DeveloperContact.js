import { useEffect } from 'react';
import ContactCard from '../cards/ContactCard';

const DeveloperContact = ({ setCurrentPage, contactRef, setMenu }) => {
    useEffect(() => {
         // Set state for current page
         setCurrentPage('contact');

         // Dismiss navbar
        setMenu(false);
    }, [setCurrentPage, setMenu])

    return (
        <div className="site-content">
            <h2 ref={ contactRef } className="large-screen-hidden">Contact</h2>
            <ContactCard />
        </div>
    )
}

export default DeveloperContact
