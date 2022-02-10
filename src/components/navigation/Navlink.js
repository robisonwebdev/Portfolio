import React from 'react';
import '../../styles/Navigation/Navlink.css';

const Navlink = ({ address, handleNavClick, text }) => {
    return (
        <li className='navlink' onClick={handleNavClick}>
            <a href={address}>{text}</a>
        </li>
    );
};

export default Navlink;
