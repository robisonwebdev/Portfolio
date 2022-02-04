import React from 'react';
import '../../styles/Navigation/MobileMenu.css';

const MobileMenu = ({ onClick }) => {
    return (
        <button className='mobile_menu' onClick={onClick}>
            <i className='las la-bars' />
        </button>
    );
};

export default MobileMenu;
