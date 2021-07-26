import React from 'react';

const ContactLink = ({ address, iconClass, text }) => {
    return (
        <p className='contactLink'><i className={iconClass} /><a href={address} target='_blank' rel='noreferrer'>{text}</a></p>
    );
}

export default ContactLink;