import React from 'react';
import '../../styles/Navigation/MobileMenuButton.css';

const MobileMenuButton = ({ onClick }) => {
    return (
        <button className='mobile_menu_button' onClick={onClick}>
            <i className='las la-bars' />
        </button>
    );
};

export default MobileMenuButton;
