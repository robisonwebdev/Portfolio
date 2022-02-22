import React from 'react';
import '../../styles/Navigation/MobileMenuButton.css';

const MobileMenuButton = ({ icon, onClick }) => {
    return (
        <button className='mobile_menu_button' onClick={onClick}>
            <i className={icon ? 'las la-times' : 'las la-bars'} />
        </button>
    );
};

export default MobileMenuButton;
