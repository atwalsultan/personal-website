import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaStackOverflow } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

import { ReactComponent as CodeWars } from "../../../static/codewars.svg";

const Header = ({ nightMode, menu, setMenu }) => {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setHidden(false);
    }, 1250);
  }, []);

  return (
    <header className={nightMode ? "site-header dark" : "site-header"}>
      <div className="header-column-1">
        <div className="header-logo-container">
          <Link to="/">
            <div className={`${hidden ? " hidden test" : ""}`} />
          </Link>
        </div>
        <div>
          <h1 className="header-name">John Doe</h1>
          <h2 className="header-role">Software Developer</h2>
        </div>
      </div>

      <div className="header-column-2">
        <ul className="header-social-links">
          <li>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="https://stackoverflow.com/"
              target="_blank"
              rel="noreferrer"
              title="Stack Overflow"
            >
              <FaStackOverflow />
            </a>
          </li>
          <li>
            <a
              href="https://www.codewars.com/"
              target="_blank"
              rel="noreferrer"
              title="Codewars"
            >
              <CodeWars />
            </a>
          </li>
        </ul>

        <div className="hamburger-icon" onClick={() => setMenu(!menu)}>
          {!menu && <GiHamburgerMenu />}
          {menu && <AiOutlineClose />}
        </div>
      </div>
    </header>
  );
};

export default Header;
