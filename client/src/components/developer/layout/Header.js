import { FaLinkedin, FaGithub, FaStackOverflow } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

import SultanPic from "../../../static/sultan-pic.jpg"

const Header = ({ nightMode, menu, setMenu }) => {
    return (
        <header className={ nightMode ? "site-header dark" : "site-header" }>
            <div className="header-column-1">
                <div className="header-logo-container">
                    <a href="/dev">
                        <img src={ SultanPic } alt="Sultan" />
                    </a>
                </div>
                <div>
                    <h1 className="header-name">Sultan Singh Atwal</h1>
                    <h2 className="header-role">Full Stack Software Developer</h2>
                </div>
            </div>

            <div className="header-column-2">
                <ul className="header-social-links">
                    <li>
                        <a href="https://www.linkedin.com/in/sultan-atwal-developer/" target="_blank" rel="noreferrer" title="LinkedIn"><FaLinkedin /></a>
                    </li>
                    <li>
                        <a href="https://github.com/atwalsultan" target="_blank" rel="noreferrer" title="GitHub"><FaGithub /></a>
                    </li>
                    <li>
                        <a href="https://stackoverflow.com/users/11409321/sultan-singh-atwal" target="_blank" rel="noreferrer" title="Stack Overflow"><FaStackOverflow /></a>
                    </li>
                </ul>

                <div className="hamburger-icon" onClick={ () => setMenu(!menu) }>
                    { !menu && <GiHamburgerMenu /> }
                    { menu &&  <AiOutlineClose />}
                </div>
            </div>
        </header>
    )
}

export default Header
