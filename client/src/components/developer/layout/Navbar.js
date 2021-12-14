import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="site-navbar">
            <ul>
                <li><Link to='/dev'>Home</Link></li>
                <li><Link to='/dev/experience'>Experience</Link></li>
                <li><Link to='/dev/work'>My Work</Link></li>
                <li><Link to='/dev/about'>About</Link></li>
            </ul>

            <footer><p>Day/Night Mode</p></footer>
        </nav>
    )
}

export default Navbar
