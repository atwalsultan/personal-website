import { useState, useEffect } from 'react';

const DeveloperWork = ({ setCurrentPage, workRef }) => {
    const [work, setWork] = useState([]);

    // Fetch projects
    const getWork = async () => {
        const url = "http://localhost:8080/work";
        const response = await fetch(url);
        const responseJson = await response.json();
        setWork(responseJson);
    }

    useEffect(() => {
        let unmounted = false;

        // Fetch work when component mounts
        if(!unmounted) {
            getWork();
            setCurrentPage('work');
        }

        // Unsubscribe to any background calls when componenet unmounts
        return () => {
            unmounted = true;
        }
    }, [setCurrentPage])

    return (
        <div>
            <h1 ref={ workRef }>Work</h1>
            {
                work.map((item, index) => (<p key={index}>{item.role}</p>))
            }
        </div>
    )
}

export default DeveloperWork
