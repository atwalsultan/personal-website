import { useState, useEffect } from "react";

import CertificationCard from "../cards/CertificationCard";

const CertificationList = () => {
    const [certifications, setCertifications] = useState([]);

    // Fetch certifications
    const getCertifications = async () => {
        const url = "/certifications";
        const response = await fetch(url);
        const responseJson = await response.json();
        setCertifications(responseJson);
    }

    useEffect(() => {
        let unmounted = false;

        // Fetch degrees when component mounts
        if (!unmounted) {
            getCertifications();
        }

        // Unsubscribe to any background calls when component unmounts
        return () => {
            unmounted = true;
        }
    }, [])

    return (
        certifications.sort((a, b) => new Date(b.to) - new Date(a.to)).map((item, index) => <CertificationCard key={ index } certification={ item } />)
    )
}

export default CertificationList
