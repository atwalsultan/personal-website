import { useState, useEffect } from "react";

const CertificationCard = ({ certification }) => {
    const from = new Date(certification.from);
    const to = new Date(certification.to);

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    const [hidden, setHidden] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setHidden(false);
        }, 10)
    }, [])

    return (
        <div className={`certification-card${hidden ? " hidden" : ""}`}>
            <div className="name-location">
                <h3>{ certification.name }</h3>
                <h4>{ certification.location }</h4>
            </div>

            <div className="institution-dates">
                <h4>{ certification.institution }</h4>
                { (from.getMonth() === to.getMonth() && from.getFullYear() === to.getFullYear()) ? <h4>{ months[from.getMonth()]} { from.getFullYear() }</h4> : <h4>{ months[from.getMonth()]} { from.getFullYear() } - { months[to.getMonth()] } { to.getFullYear() }</h4> }
            </div>

            <div className="description">
                <p>{ certification.description }</p>
            </div>
        </div>
    )
}

export default CertificationCard
