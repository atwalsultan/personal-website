import { Link } from "react-router-dom";
import Switch from "react-switch"
import { FaLinkedin, FaGithub, FaStackOverflow } from "react-icons/fa";

import { Composer, StackIn } from "../../transitions";
import { ReactComponent as CodeWars } from "../../../static/codewars.svg";

const Navbar = ({ nightMode, setNightMode, menu, currentPage }) => {
    const handleSwitchToggle = () => {
        setNightMode(!nightMode);
        localStorage.setItem("nightMode", JSON.stringify(!nightMode));
    }

    return (
        <>

            <nav className="site-navbar">
                <ul>
                    <Composer
                        transition={StackIn}
                        transitionDuration={200}
                    >
                        <li><h2 className={ currentPage === "home" ? `active` : `inactive` }><Link to='/dev'>Home</Link></h2></li>
                        <li><h2 className={ currentPage === "work" ? `active` : `inactive` }><Link to='/dev/work'>My Work</Link></h2></li>
                        <li><h2 className={ currentPage === "experience" ? `active` : `inactive` }><Link to='/dev/experience'>Experience</Link></h2></li>
                        <li><h2 className={ currentPage === "credentials" ? `active` : `inactive` }><Link to='/dev/credentials'>Credentials</Link></h2></li>
                        <li><h2 className={ currentPage === "contact" ? `active` : `inactive` }><Link to='/dev/contact'>Contact</Link></h2></li>
                        {/* <li><h2><Link to='/dev/about'>About</Link></h2></li> */}
                    </Composer>
                </ul>

                <footer className="navbar-footer">
                    <Switch
                        checked={nightMode}
                        onChange={handleSwitchToggle}
                        offColor="#909090"
                        onColor="#909090"
                        height={30}
                        width={58}
                        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                        uncheckedIcon={
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: "100%",
                                }}
                            >
                                <span>🌞</span>
                            </div>
                        }
                        checkedIcon={
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: "100%",
                                }}
                            >
                                <span>🌜</span>
                            </div>
                        }
                    />
                </footer>
            </nav>

            <nav className={`site-navbar-small-screen${menu ? '' : ' hidden'}`}>
                <ul className="nav-links">
                    <li><h2 className={ currentPage === "home" ? `active` : `inactive` }><Link to='/dev'>Home</Link></h2></li>
                    <li><h2 className={ currentPage === "work" ? `active` : `inactive` }><Link to='/dev/work'>My Work</Link></h2></li>
                    <li><h2 className={ currentPage === "experience" ? `active` : `inactive` }><Link to='/dev/experience'>Experience</Link></h2></li>
                    <li><h2 className={ currentPage === "credentials" ? `active` : `inactive` }><Link to='/dev/credentials'>Credentials</Link></h2></li>
                    <li><h2 className={ currentPage === "contact" ? `active` : `inactive` }><Link to='/dev/contact'>Contact</Link></h2></li>
                    {/* <li><h2><Link to='/dev/about'>About</Link></h2></li> */}
                </ul>

                <ul className="social-links">
                    <li>
                        <a href="https://www.linkedin.com/in/sultan-atwal-developer/" target="_blank" rel="noreferrer" title="LinkedIn"><FaLinkedin /></a>
                    </li>
                    <li>
                        <a href="https://github.com/atwalsultan" target="_blank" rel="noreferrer" title="GitHub"><FaGithub /></a>
                    </li>
                    <li>
                        <a href="https://stackoverflow.com/users/11409321/sultan-singh-atwal" target="_blank" rel="noreferrer" title="Stack Overflow"><FaStackOverflow /></a>
                    </li>
                    <li>
                        <a href="https://www.codewars.com/users/atwalsultan" target="_blank" rel="noreferrer" title="Codewars"><CodeWars /></a>
                    </li>
                </ul>

                <footer className="navbar-footer">
                    <Switch
                        checked={nightMode}
                        onChange={handleSwitchToggle}
                        offColor="#909090"
                        onColor="#909090"
                        height={30}
                        width={58}
                        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                        uncheckedIcon={
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: "100%",
                                }}
                            >
                                <span>🌞</span>
                            </div>
                        }
                        checkedIcon={
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: "100%",
                                }}
                            >
                                <span>🌜</span>
                            </div>
                        }
                    />
                </footer>
            </nav>
        </>
    )
}

export default Navbar
