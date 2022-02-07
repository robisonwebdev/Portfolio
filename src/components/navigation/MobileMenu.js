import React from 'react';
import Navlink from './Navlink';
import '../../styles/Navigation/MobileMenu.css';

const MobileMenu = () => {
    return (
        <div className='navigation_mobile_links'>
            <ul>
                <Navlink address='#about' text='About' />
                <Navlink address='#projects' text='Projects' />
                <Navlink address='#contact' text='Contact' />
            </ul>
        </div>
    );
};

export default MobileMenu;
