import React from 'react';
import '../styles/Icon.css';

const Icon = ({ address, icon }) => {
    return (
        <a className='icon' href={address} target='_blank'>
            <i className={icon} />
        </a>
    );
};

export default Icon;
