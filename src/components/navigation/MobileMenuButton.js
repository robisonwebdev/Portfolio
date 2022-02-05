import React from 'react';

const MobileMenuButton = ({ onClick }) => {
    return (
        <button className='mobile_menu' onClick={onClick}>
            <i className='las la-bars' />
        </button>
    );
};

export default MobileMenuButton;
