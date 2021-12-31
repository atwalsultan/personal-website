import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";

import TechList from "../lists/TechList";
import PersonalWebsiteIcon from '../../../static/live-site.svg';

const ProjectCard = ({ project }) => {
    const from = new Date(project.from);
    const to = new Date(project.to);

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const [hidden, setHidden] = useState(true);
    const [links, setLinks] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            setHidden(false);
        }, 10)

        setLinks(project.links);
    }, [project.links])

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

            <ul className="tech-used">
                <TechList list={ project.tech } />
            </ul>

            <ul className="links">
                { links !== null && links.github !== "" && <li><a href={ links.github } target="_blank" rel="noreferrer" title="View source code"><FaGithub /></a></li> }
                { links !== null && links.live !== "" && <li><a href={ links.live } target="_blank" rel="noreferrer" title="View live deployment"><img src={ PersonalWebsiteIcon } alt={ `Live deployment for ${project.name}` } /></a></li> }
            </ul>
        </div>
    )
}

export default ProjectCard
