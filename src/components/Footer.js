import React from 'react';
import FooterCard from './FooterCard';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className='footerCards'>
                <FooterCard iconAddess='https://github.com/robisonwebdev' iconClass='lab la-github' />
                <FooterCard iconAddess='https://www.linkedin.com/in/davidrulonrobison/' iconClass='lab la-linkedin' />
            </div>
            <div className='developedBy'>
                <p>David Robison &#169;2021</p>
            </div>
        </footer>
    );
}

export default Footer;