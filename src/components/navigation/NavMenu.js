import React from 'react';
import Navlink from './Navlink';
import '../../styles/Navigation/DesktopMenu.css';

const DesktopMenu = () => {
    return (
        <ul className='desktop_menu'>
            <Navlink address='#projects' text='Projects' />
            <Navlink address='#skills' text='Skills' />
            <Navlink address='#contact' text='Contact' />
        </ul>
    );
};

export default DesktopMenu;
