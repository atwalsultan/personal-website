const ProjectCard = ({ project }) => {
    const from = new Date(project.from);
    const to = new Date(project.to);

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    return (
        <div className="project-card">
            <div className="name-location">
                <h2>{ project.name }</h2>
                <h4>{ project.location }</h4>
            </div>

            <div className="role-dates">
                <h3>{ project.role }</h3>
                { (from.getMonth() === to.getMonth() && from.getFullYear() === to.getFullYear()) ? <h4>{ months[from.getMonth()]} { from.getFullYear() }</h4> : <h4>{ months[from.getMonth()]} { from.getFullYear() } - { months[to.getMonth()] } { to.getFullYear() }</h4> }
            </div>

            <div className="description">
                <p>{ project.description }</p>
            </div>
        </div>
    )
}

export default ProjectCard
