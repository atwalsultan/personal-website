const DegreeCard = ({ degree }) => {
    const from = new Date(degree.from);
    const to = new Date(degree.to);

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    return (
        <div className="degree-card">
            <div className="institution-location">
                <h2>{ degree.institution }</h2>
                <h4>{ degree.location }</h4>
            </div>

            <div className="program-dates">
                <h3>{ degree.program }</h3>
                { (from.getMonth() === to.getMonth() && from.getFullYear() === to.getFullYear()) ? <h4>{ months[from.getMonth()]} { from.getFullYear() }</h4> : <h4>{ months[from.getMonth()]} { from.getFullYear() } - { months[to.getMonth()] } { to.getFullYear() }</h4> }
            </div>

            <div className="description">
                <p>{ degree.credential }</p>
                <p>{ degree.percentage ? `Percentage: ${degree.percentage}%` : `GPA: ${degree.gpa} / 4.33` }</p>
            </div>

            <div></div>
        </div>
    )
}

export default DegreeCard
