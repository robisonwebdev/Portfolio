import React from 'react';
import '../styles/Nav.css';

const Nav = () => {
    return (
        <nav id='nav'>
            <ul id='navLinks'>
                <li><a href='#nav'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#projects'>Projects</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
        </nav>
    );
}

export default Nav;