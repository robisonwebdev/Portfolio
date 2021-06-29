import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav id='nav'>
            <Link className='siteNavTitle' to='/'><h3>David Robison</h3></Link>
            <ul id='navLinks'>
                <li>Projects</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}

export default Nav;