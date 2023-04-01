import { useState, useEffect } from "react";

const OpportunitiesCard = () => {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setHidden(false);
    }, 100);
  }, []);

  return (
    <div className={`opportunities-card${hidden ? " hidden" : ""}`}>
      <p>
        Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor
        sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
        ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit
        amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
        dolor sit amet lorem ipsum dolor sit amet
      </p>
    </div>
  );
};

export default OpportunitiesCard;
