import { useState, useEffect } from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";

import TechList from "../lists/TechList";

const CertificationCard = ({ certification }) => {
  const to = new Date(certification.to);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setHidden(false);
    }, 10);
  }, []);

  return (
    <div className={`card certification-card${hidden ? " hidden" : ""}`}>
      <div className="first-row">
        <h3>{certification.name}</h3>
        <h4>{certification.location}</h4>
      </div>

      <div className="second-row">
        <h4>{certification.institution}</h4>
        <h4>
          {months[to.getMonth()]} {to.getFullYear()}
        </h4>
      </div>

      <div className="description">
        <p>{certification.description}</p>
      </div>

      {certification.tech.length > 0 && (
        <ul className="tech-used">
          <TechList list={certification.tech} />
        </ul>
      )}

      <ul className="links">
        <li>
          {certification.localName !== "" && (
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              title="View credential"
            >
              <BsBoxArrowUpRight />
            </a>
          )}
        </li>
      </ul>
    </div>
  );
};

export default CertificationCard;
