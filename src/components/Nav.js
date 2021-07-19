import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.css';

const Nav = () => {
    return (
        <nav id='nav'>
            <Link className='siteNavTitle' to='/'><h3>David Robison</h3></Link>
            <ul id='navLinks'>
                <Link className='navLink' to='/projects'><li>Projects</li></Link>
                <Link className='navLink' to='/about'><li>About</li></Link>
                <Link className='navLink' to='/contact'><li>Contact</li></Link>
            </ul>
        </nav>
    );
}

export default Nav;