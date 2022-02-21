import React from 'react';
import '../../styles/Navigation/Navlink.css';

const Navlink = ({ address, handleNavClick, text }) => {
    return (
        <a className='navlink' onClick={handleNavClick} href={address}>
            <li>{text}</li>
        </a>
    );
};

export default Navlink;
