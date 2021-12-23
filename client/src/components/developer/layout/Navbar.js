import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="site-navbar">
            <ul>
                <li><h2><Link to='/dev'>Home</Link></h2></li>
                <li><h2><Link to='/dev/work'>My Work</Link></h2></li>
                <li><h2><Link to='/dev/experience'>Experience</Link></h2></li>
                <li><h2><Link to='/dev/credentials'>Credentials</Link></h2></li>
                <li><h2><Link to='/dev/about'>About</Link></h2></li>
            </ul>

            <footer><p>Day/Night Mode</p></footer>
        </nav>
    )
}

export default Navbar
