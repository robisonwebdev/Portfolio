import React from 'react';

const ContactLink = ({ iconClass, text }) => {
    return (
        <p className='contactLink'><i className={iconClass} />{text}</p>
    );
}

export default ContactLink;