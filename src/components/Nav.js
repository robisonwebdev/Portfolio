import React from 'react';
import '../styles/Nav.css';

const Nav = () => {
    return (
        <nav id='nav'>
            <ul id='navLinks'>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}

export default Nav;