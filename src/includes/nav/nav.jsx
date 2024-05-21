import '../../assets/css/main.css';
import { NavLink } from 'react-router-dom';
import Buttons from '../buttons/button';

function Nav(){
    return (
        <nav className="nav">
            <article className="container">
                <article className="navMain">
                    <a href="/" className="navLogo">
                        <h1>Natural Wellness</h1>
                    </a>
                    <article className="navLink">
                        <ul>
                            <li>
                                <NavLink exact="true" to="/" end className={({ isActive }) => (isActive ? 'navLinkActive' : '')}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/About" className={({ isActive }) => (isActive ? 'navLinkActive' : '')}>About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/Service" className={({ isActive }) => (isActive ? 'navLinkActive' : '')}>Service</NavLink>
                            </li>
                            <li>
                                <NavLink to="/Blogs" className={({ isActive }) => (isActive ? 'navLinkActive' : '')}>Blogs</NavLink>
                            </li>
                            <li>
                                <NavLink to="/Contact" className={({ isActive }) => (isActive ? 'navLinkActive' : '')}>Contact</NavLink>
                            </li>
                        </ul>
                    </article>
                    <article className="navContact">
                            <Buttons cls="navContactBtn" title="Book a Consultation"></Buttons>
                    </article>
                </article>
            </article>
        </nav>
    );
}

export default Nav;