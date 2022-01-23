import { useState, useEffect } from "react";

const DegreeCard = ({ degree }) => {
    const from = new Date(degree.from);
    const to = new Date(degree.to);

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const [hidden, setHidden] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setHidden(false);
        }, 10)
    }, [])

    return (
        <div className={`card degree-card${hidden ? " hidden" : ""}`}>
            <div className="institution-location">
                <h3>{ degree.institution }</h3>
                <h4>{ degree.location }</h4>
            </div>

            <div className="program-dates">
                <h4>{ degree.program }</h4>
                { (from.getMonth() === to.getMonth() && from.getFullYear() === to.getFullYear()) ? <h4>{ months[from.getMonth()]} { from.getFullYear() }</h4> : <h4>{ months[from.getMonth()]} { from.getFullYear() } - { months[to.getMonth()] } { to.getFullYear() }</h4> }
            </div>

            <div className="description">
                <ul>
                    <li>{ degree.credential }</li>
                    <li>{ degree.percentage ? `Percentage: ${degree.percentage}%` : `GPA: ${degree.gpa} / 4.33` }</li>
                </ul>
            </div>

            <div></div>
        </div>
    )
}

export default DegreeCard
