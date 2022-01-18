import { useState, useEffect } from "react";

const SkillsCard = () => {
    const [hidden, setHidden] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setHidden(false);
        }, 100)
    }, [])

    return (
        <div className={`skills-card${hidden ? " hidden" : ""}`}>
            <p>My skill set includes the following technologies:</p>

            <ul>
                <li>HTML & CSS</li>
                <li>JavaScript</li>
                <li>Python</li>
                <li>Java</li>
                <li>React Native</li>
                <li>MERN Stack</li>
                <li>Bash Scripting</li>
                <li>Git</li>
            </ul>
        </div>
    )
}

export default SkillsCard
