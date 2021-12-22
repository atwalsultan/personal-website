const CertificationCard = ({ certification }) => {
    const from = new Date(certification.from);
    const to = new Date(certification.to);

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    console.log(certification.from);

    return (
        <div className="certification-card">
            <div className="name-location">
                <h2>{ certification.name }</h2>
                <h4>{ certification.location }</h4>
            </div>

            <div className="institution-dates">
                <h3>{ certification.institution }</h3>
                { (from.getMonth() === to.getMonth() && from.getFullYear() === to.getFullYear()) ? <h4>{ months[from.getMonth()]} { from.getFullYear() }</h4> : <h4>{ months[from.getMonth()]} { from.getFullYear() } - { months[to.getMonth()] } { to.getFullYear() }</h4> }
            </div>

            <div className="description">
                <p>{ certification.description }</p>
            </div>
        </div>
    )
}

export default CertificationCard
