import React from 'react';
import Navlink from './Navlink';

const NavMenu = () => {
    return (
        <ul className='navigation_links'>
            <Navlink address='#projects' text='Projects' />
            <Navlink address='#skills' text='Skills' />
            <Navlink address='#contact' text='Contact' />
        </ul>
    );
};

export default NavMenu;
