import React from 'react';

const ContactLink = ({ address, iconClass }) => {
    return (
        <a href={address} target='_blank' rel='noreferrer'><i className={iconClass} /></a>
    );
}

export default ContactLink;