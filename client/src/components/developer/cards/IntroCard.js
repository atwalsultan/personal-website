import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Resume from '../../../static/Sultan-Resume-2022.pdf';

const IntroCard = ({ contactRef }) => {
    const [hidden, setHidden] = useState(true);

    const scrollContactForm = () => {
        contactRef.current.scrollIntoView({ behavior: "smooth" });
    }

    useEffect(() => {
        setTimeout(() => {
            setHidden(false);
        }, 100)
    }, [])

    return (
        <div className={`intro-card${hidden ? " hidden" : ""}`}>
            <div>
                <p>
                    Welcome to my software development portfolio! I am a meticulous and curious software developer with more than 6 years of programming experience in building real-world, academic and personal projects. I continually push my skills further through self-education and practical activities.
                </p>
            </div>

            <div>
                <p>I designed and developed this website myself and I hope you like it. Please feel free to go over my <Link to="/dev/work">projects</Link>, <Link to="/dev/experience">experience</Link> and <Link to="/dev/credentials">credentials</Link>. You can reach out to me using my social links or the <Link onClick={scrollContactForm} to="">contact form</Link> and you can <a href={Resume} target="_blank" rel="noreferrer">download my resume here</a>. I look forward to hearing from you soon.</p>
            </div>

            <div>
                <p>Cheers!</p>
            </div>
        </div>
    )
}

export default IntroCard
