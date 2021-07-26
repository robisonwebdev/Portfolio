import React from 'react';
import FooterCard from './FooterCard';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className='developedBy'>
                <p>David Robison <span>&#169;2021</span></p>
            </div>
        </footer>
    );
}

export default Footer;