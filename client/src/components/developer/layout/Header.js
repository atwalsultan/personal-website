import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaStackOverflow } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

import SultanPic from "../../../static/sultan-pic.jpg"
import { ReactComponent as CodeWars } from "../../../static/codewars.svg"

const Header = ({ nightMode, menu, setMenu }) => {
    const [hidden, setHidden] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setHidden(false);
        }, 1250)
    }, [])

    return (
        <header className={ nightMode ? "site-header dark" : "site-header" }>
            <div className="header-column-1">
                <div className="header-logo-container">
                    <Link to="/dev">
                        <img className={`${hidden ? " hidden" : ""}`} src={ SultanPic } alt="Sultan" />
                    </Link>
                </div>
                <div>
                    <h1 className="header-name">Sultan Singh Atwal</h1>
                    <h2 className="header-role">Software Developer</h2>
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
                    <li>
                        <a href="https://www.codewars.com/users/atwalsultan" target="_blank" rel="noreferrer" title="Codewars"><CodeWars /></a>
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
