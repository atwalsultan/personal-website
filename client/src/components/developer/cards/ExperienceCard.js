const ExperienceCard = ({ job }) => {
    const from = new Date(job.from);
    const to = new Date(job.to);

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    return (
        <div className="job-card">
            <div className="company-location">
                <h3>{ job.company }</h3>
                <h4>{ job.location }</h4>
            </div>

            <div className="role-dates">
                <h4>{ job.role }</h4>
                { (from.getMonth() === to.getMonth() && from.getFullYear() === to.getFullYear()) ? <h4>{ months[from.getMonth()]} { from.getFullYear() }</h4> : <h4>{ months[from.getMonth()]} { from.getFullYear() } - { months[to.getMonth()] } { to.getFullYear() }</h4> }
            </div>

            <div className="description">
                <p>{ job.description }</p>
            </div>
        </div>
    )
}

export default ExperienceCard