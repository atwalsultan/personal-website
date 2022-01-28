import { useState, useEffect } from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";

import TechList from "../lists/TechList";
import NSE1 from "../certifications/NSE_1_Certification.pdf";
import NSE2 from "../certifications/NSE_2_Certification.pdf";
import Coursera1 from "../certifications/Coursera-Mathematics-for-Machine-Learning.pdf";
import Coursera2 from "../certifications/Coursera-Applied-Data-Science-with-Python.pdf";
import Coursera3 from "../certifications/Coursera-IBM-Data-Science.pdf";
import Coursera4 from "../certifications/Coursera-Deep-Learning.pdf";

const CertificationCard = ({ certification }) => {
    const to = new Date(certification.to);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    const [hidden, setHidden] = useState(true);

    const certifications = {
        "NSE1": NSE1,
        "NSE2": NSE2,
        "Coursera1": Coursera1,
        "Coursera2": Coursera2,
        "Coursera3": Coursera3,
        "Coursera4": Coursera4,
    }

    useEffect(() => {
        setTimeout(() => {
            setHidden(false);
        }, 10)
    }, [])

    return (
        <div className={`card certification-card${hidden ? " hidden" : ""}`}>
            <div className="first-row">
                <h3>{ certification.name }</h3>
                <h4>{ certification.location }</h4>
            </div>

            <div className="second-row">
                <h4>{ certification.institution }</h4>
                <h4>{ months[to.getMonth()] } { to.getFullYear() }</h4>
            </div>

            <div className="description">
                <p>{ certification.description }</p>
            </div>

            { certification.tech.length > 0 && 
                <ul className="tech-used">
                    <TechList list={ certification.tech } />
                </ul> 
            }

            <ul className="links">
                <li>
                    { certification.localName !== "" && <a href={ certifications[`${certification.localName}`] } target="_blank" rel="noreferrer" title="View credential">
                        <BsBoxArrowUpRight />
                    </a> }
                </li>
            </ul>
        </div>
    )
}

export default CertificationCard
