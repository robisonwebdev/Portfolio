import React from 'react';
import '../../styles/Navigation/Navlink.css';

const Navlink = ({ address, text }) => {
    return (
        <li className='navlink'>
            <a href={address}>{text}</a>
        </li>
    );
};

export default Navlink;
