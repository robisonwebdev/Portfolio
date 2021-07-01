import React from 'react';

const Footer = (props) => {
    return (
        <footer>
            <small>{props.text}<a href={props.address} target='_blank' rel='noreferrer'>{props.name}</a></small>
        </footer>
    );
}

export default Footer;