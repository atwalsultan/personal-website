import { useEffect } from 'react';
import ExperienceList from '../lists/ExperienceList';

const DeveloperExperience = ({ setCurrentPage, experienceRef, setMenu }) => {

    useEffect(() => {
        let unmounted = false;

        // Dismiss navbar
        setMenu(false);

        // Fetch experience and set state for current page when component mounts
        if(!unmounted) {
            setCurrentPage('experience');
        }

        // Unsubscribe to any background calls when componenet unmounts
        return () => {
            unmounted = true;
        }
    }, [setCurrentPage, setMenu])

    return (
        <div className="site-content">
            <h2 ref={ experienceRef }>Experience</h2>
            
            <div className="job-list">
                <ExperienceList />
            </div>
        </div>
    )
}

export default DeveloperExperience
