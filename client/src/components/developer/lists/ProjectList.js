import { useState, useEffect } from "react";

import ProjectCard from "../cards/ProjectCard";

const ProjectList = () => {
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
        if (!unmounted) {
            getWork();
        }

        // Unsubscribe to any background calls when component unmounts
        return () => {
            unmounted = true;
        }
    }, [])

    return (
        work.sort((a, b) => new Date(b.to) - new Date(a.to)).map((item, index) => <ProjectCard project={ item } key={ index } />)
    )
}

export default ProjectList
