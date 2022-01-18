import { useEffect } from 'react';

import IntroCard from '../cards/IntroCard';
import ContactCard from '../cards/ContactCard';
import SkillsCard from '../cards/SkillsCard';
import OpportunitiesCard from '../cards/OpportunitiesCard';

const DeveloperAbout = ({ setCurrentPage, aboutRef, setMenu, contactRef }) => {
    useEffect(() => {
         // Set state for current page
         setCurrentPage('about');

         // Dismiss navbar
        setMenu(false);
    }, [setCurrentPage, setMenu])

    return (
        <div className="site-content">
            <h2 ref={aboutRef}>About</h2>

            <div className="about-list" >
                <IntroCard contactRef={ contactRef } />
                <SkillsCard />
                <OpportunitiesCard />
            </div>

            <h2 ref={ contactRef }>Contact Me</h2>
            <ContactCard />
        </div>
    )
}

export default DeveloperAbout
