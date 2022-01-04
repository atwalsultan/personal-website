import { useEffect } from "react";

import ProjectList from "../lists/ProjectList";

const DeveloperWork = ({ setCurrentPage, workRef, setMenu }) => {
    useEffect(() => {
        let unmounted = false;

        // Dismiss navbar
        setMenu(false);

        // Fetch work when component mounts
        if(!unmounted) {
            setCurrentPage("work");
        }

        // Unsubscribe to any background calls when component unmounts
        return () => {
            unmounted = true;
        }
    }, [setCurrentPage, setMenu])

    return (
        <div className="site-content">
            <h2 ref={ workRef }>My Work</h2>

            <div className="projects-list">
                <ProjectList />
            </div>
        </div>
    )
}

export default DeveloperWork
