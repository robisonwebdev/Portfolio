import React from 'react';
import NavLink from './NavLink';
import '../styles/Nav.css';

const Nav = () => {
    return (
        <nav id='nav'>
            <ul id='navLinks'>
                <NavLink address='#nav' text='Home' />
                <NavLink address='#about' text='About' />
                <NavLink address='#projects' text='Projects' />
                <NavLink address='#contact' text='Contact' />
            </ul>
        </nav>
    );
}

export default Nav;