import { useState, useEffect } from 'react';

const DeveloperExperience = ({ setCurrentPage, experienceRef }) => {
    const [experience, setExperience] = useState([]);

    // Fetch experience
    const getExperience = async () => {
        const url = 'http://localhost:8080/experience';
        const response = await fetch(url);
        const responseJson = await response.json();
        setExperience(responseJson);
    }

    useEffect(() => {
        let unmounted = false;

        // Fetch experience and set state for current page when component mounts
        if(!unmounted) {
            getExperience();
            setCurrentPage('experience');
        }

        // Unsubscribe to any background calls when componenet unmounts
        return () => {
            unmounted = true;
        }
    }, [setCurrentPage])

    return (
        <div>
            <h1 ref={ experienceRef }>Experience</h1>
            {
                experience.map((item, index) => (<p key={index}>{item.role}</p>))
            }
        </div>
    )
}

export default DeveloperExperience
