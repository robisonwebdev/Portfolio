import React from 'react';

const NavLink = ({ address, text }) => {
    return (
        <li><a href={address}>{text}</a></li>
    );
}

export default NavLink;