import React from 'react';

const Footer = (props) => {
    return (
        <footer>
            <small>{props.text}<a>{props.name}</a></small>
        </footer>
    );
}

export default Footer;