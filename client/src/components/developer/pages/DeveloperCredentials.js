import { useState, useEffect } from 'react';

const DeveloperCredentials = ({ setCurrentPage, credentialsRef }) => {
    const [education, setEducation] = useState([]);
    const [certifications, setCertifications] = useState([]);

    // Fetch education
    const getEducation = async () => {
        const url = 'http://localhost:8080/education';
        const response = await fetch(url);
        const responseJson = await response.json();
        setEducation(responseJson);
    }

    // Fetch certifications
    const getCertifications = async () => {
        const url = `http://localhost:8080/certifications`;
        const response = await fetch(url);
        const responseJson = await response.json();
        setCertifications(responseJson);
    }

    useEffect(() => {
        let unmounted = false;

        // Fetch education and certifications and set state for current when component mounts
        if(!unmounted) {
            getEducation();
            getCertifications();
            setCurrentPage('credentials');
        }

        // Unsubscribe to any background calls when componenet unmounts
        return () => {
            unmounted = true;
        }
    }, [setCurrentPage])

    return (
        <div>
            <h1 ref={ credentialsRef }>Education</h1>
            {
                education.map((item, index) => (<p key={index}>{item.institution}</p>))
            }
            <br />
            <h1>Certifications</h1>
            {
                certifications.map((certification, index) => (<p key={index}>{certification.name}</p>))
            }
        </div>
    )
}

export default DeveloperCredentials
