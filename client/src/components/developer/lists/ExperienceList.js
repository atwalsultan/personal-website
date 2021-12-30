import { useState, useEffect } from "react";

import ExperienceCard from "../cards/ExperienceCard";

const ExperienceList = () => {
    const [experience, setExperience] = useState([]);

    // Fetch experience
    const getExperience = async () => {
        const url = "/experience";
        const response = await fetch(url);
        const responseJson = await response.json();
        setExperience(responseJson);
    }

    useEffect(() => {
        let unmounted = false;

        // Fetch experience when component mounts
        if (!unmounted) {
            getExperience();
        }

        // Unsubscribe to any background calls when component unmounts
        return () => {
            unmounted = true;
        }
    }, [])

    return (
        experience.sort((a, b) => new Date(b.to) - new Date(a.to)).map((item, index) => <ExperienceCard key={ index } job={ item } />)
    )
}

export default ExperienceList
