import React from 'react';

const Footer = (props) => {
    return (
        <footer>
            <small>{props.text}<a href='https://github.com/robisonwebdev' target='_blank' rel='noreferrer'>{props.name}</a></small>
        </footer>
    );
}

export default Footer;