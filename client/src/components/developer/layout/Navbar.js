import { Link } from "react-router-dom";
import Switch from "react-switch"

import { Composer, StackIn } from '../../transitions';

const Navbar = ({ nightMode, setNightMode }) => {
    return (
        <nav className="site-navbar">
            <ul>
                <Composer
                    transition={StackIn}
                    transitionDuration={200}
                >
                    <li><h2><Link to='/dev'>Home</Link></h2></li>
                    <li><h2><Link to='/dev/work'>My Work</Link></h2></li>
                    <li><h2><Link to='/dev/experience'>Experience</Link></h2></li>
                    <li><h2><Link to='/dev/credentials'>Credentials</Link></h2></li>
                    <li><h2><Link to='/dev/about'>About</Link></h2></li>
                </Composer>
            </ul>

            <footer className="navbar-footer">
                <Switch
                    checked={nightMode}
                    onChange={() => setNightMode(!nightMode)}
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
                            <span>🌜</span>
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
                        <span>🌞</span>
                    </div>
                    }
                />
            </footer>
        </nav>
    )
}

export default Navbar
