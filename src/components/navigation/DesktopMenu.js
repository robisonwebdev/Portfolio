import React from 'react';
import Navlink from './Navlink';
import '../../styles/Navigation/DesktopMenu.css';

const DesktopMenu = () => {
    return (
        <ul className='desktop_menu'>
            <Navlink address='#about' text='About' />
            <Navlink address='#projects' text='Projects' />
            <Navlink address='#contact' text='Contact' />
        </ul>
    );
};

export default DesktopMenu;
