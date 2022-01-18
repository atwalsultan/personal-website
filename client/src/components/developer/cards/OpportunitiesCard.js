import { useState, useEffect } from "react";

const OpportunitiesCard = () => {
    const [hidden, setHidden] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setHidden(false);
        }, 100)
    }, [])

    return (
        <div className={`opportunities-card${hidden ? " hidden" : ""}`}>
            <p>I am currently looking for full time opportunities in the Greater Vancouver metropolitan area in any of the following roles:</p>

            <ul>
                <li>Software Developer</li>
                <li>Software Engineer</li>
                <li>Web Developer</li>
                <li>Mobile App Developer</li>
            </ul>
        </div>
    )
}

export default OpportunitiesCard
