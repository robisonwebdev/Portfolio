import React from 'react';
import Navlink from './Navlink';
import '../../styles/Navigation/MobileMenu.css';

const MobileMenu = ({ handleNavClick }) => {
    return (
        <div className='navigation_mobile_links'>
            <ul>
                <Navlink address='#about' handleNavClick={handleNavClick} text='About' />
                <Navlink address='#projects' handleNavClick={handleNavClick} text='Projects' />
                <Navlink address='#contact' handleNavClick={handleNavClick} text='Contact' />
            </ul>
        </div>
    );
};

export default MobileMenu;
