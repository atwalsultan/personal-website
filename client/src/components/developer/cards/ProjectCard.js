import { useState, useEffect } from "react";

const ProjectCard = ({ project }) => {
    const from = new Date(project.from);
    const to = new Date(project.to);

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const [hidden, setHidden] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setHidden(false);
        }, 10)
    }, [])

    return (
        <div className={`project-card${hidden ? " hidden" : ""}`}>
            <div className="name-location">
                <h3>{ project.name }</h3>
                <h4>{ project.location }</h4>
            </div>

            <div className="role-dates">
                <h4>{ project.role }</h4>
                { (from.getMonth() === to.getMonth() && from.getFullYear() === to.getFullYear()) ? <h4>{ months[from.getMonth()]} { from.getFullYear() }</h4> : <h4>{ months[from.getMonth()]} { from.getFullYear() } - { months[to.getMonth()] } { to.getFullYear() }</h4> }
            </div>

            <div className="description">
                <p>{ project.description }</p>
            </div>
        </div>
    )
}

export default ProjectCard
