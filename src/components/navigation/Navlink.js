import React from 'react';

const Navlink = ({ address, text }) => {
    return (
        <li className='navlink'>
            <a href={address}>{text}</a>
        </li>
    );
};

export default Navlink;
