import React from 'react';
import '../styles/Footer.css';

const Footer = ({ name, date }) => {
    return (
        <footer>
                <p>{name} <span>&#169;{date}</span></p>
        </footer>
    );
}

export default Footer;