import { useEffect } from 'react';
import ExperienceList from '../lists/ExperienceList';

const DeveloperExperience = ({ setCurrentPage, experienceRef }) => {

    useEffect(() => {
        let unmounted = false;

        // Fetch experience and set state for current page when component mounts
        if(!unmounted) {
            setCurrentPage('experience');
        }

        // Unsubscribe to any background calls when componenet unmounts
        return () => {
            unmounted = true;
        }
    }, [setCurrentPage])

    return (
        <div className="site-content">
            <h1 ref={ experienceRef }>Experience</h1>
            
            <div className="job-list">
                <ExperienceList />
            </div>
        </div>
    )
}

export default DeveloperExperience
