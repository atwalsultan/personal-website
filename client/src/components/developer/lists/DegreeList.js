import { useState, useEffect } from "react";

import DegreeCard from "../cards/DegreeCard";

const DegreeList = () => {
    const [degrees, setDegrees] = useState([]);

    // Fetch degrees
    const getDegrees = async () => {
        const url = "/education";
        const response = await fetch(url);
        const responseJson = await response.json();
        setDegrees(responseJson);
    }

    useEffect(() => {
        let unmounted = false;

        // Fetch degrees when component mounts
        if (!unmounted) {
            getDegrees();
        }

        // Unsubscribe to any background calls when component unmounts
        return () => {
            unmounted = true;
        }
    }, [])

    return (
        degrees.sort((a, b) => new Date(b.to) - new Date(a.to)).map((item, index) => <DegreeCard key={ index } degree={ item } />)
    )
}

export default DegreeList
