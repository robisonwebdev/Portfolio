import React from 'react';
import Navlink from './Navlink';
import '../../styles/Navigation/MobileMenu.css';

const MobileMenu = () => {
    return (
        <div className='navigation_mobile_links'>
            <ul>
                <Navlink address='#projects' text='Projects' />
                <Navlink address='#skills' text='Skills' />
                <Navlink address='#contact' text='Contact' />
            </ul>
        </div>
    );
};

export default MobileMenu;
