import { useEffect } from 'react';

const DeveloperHome = ({ setCurrentPage, homeRef, setMenu }) => {
    useEffect(() => {
        // Set state for current page
        setCurrentPage('home');

        // Dismiss navbar
        setMenu(false);
    }, [setCurrentPage, setMenu])

    return (
        <div className="site-content">
            <h2 ref={homeRef}>Home</h2>

            <div className="intro-card">
                <div>
                    <p>
                        Hey there!<br />
                        Welcome to my Software Development portfolio. I am a meticulous and curious software developer with more than 6 years of programming experience in building real-world, academic and personal projects. I continually push my skills further through self-education and practical activities. My skill set includes, but is not limited to, the following technologies:
                    </p>

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

                <div>
                    <p>I am currently looking for full time opportunities in the Greater Vancouver metropolitan area in any of the following roles:</p>

                    <ul>
                        <li>Software Developer</li>
                        <li>Software Engineer</li>
                        <li>Web Developer</li>
                        <li>Mobile App Developer</li>
                    </ul>
                </div>

                <div>
                    <p>I designed and developed this website myself and I hope you like it. Please feel free to go over my projects, experience and credentials as a Software Developer. You can reach out to me using my social links or the contact form and you can download my resume here. I look forward to hearing from you soon.</p>
                </div>

                <div>
                    <p>
                        Cheers!<br />
                        Sultan
                    </p>
                </div>
            </div>
        </div>
    )
}

export default DeveloperHome
