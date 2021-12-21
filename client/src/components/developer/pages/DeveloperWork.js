import { useEffect } from "react";

import ProjectList from "../lists/ProjectList";

const DeveloperWork = ({ setCurrentPage, workRef }) => {
    useEffect(() => {
        let unmounted = false;

        // Fetch work when component mounts
        if(!unmounted) {
            setCurrentPage("work");
        }

        // Unsubscribe to any background calls when component unmounts
        return () => {
            unmounted = true;
        }
    }, [setCurrentPage])

    return (
        <div className="site-content">
            <h1 ref={ workRef }>My Work</h1>

            <div className="projects-list">
                <ProjectList />
            </div>
        </div>
    )
}

export default DeveloperWork
