import React from 'react';
import FooterCard from './FooterCard';

const Footer = (props) => {
    return (
        <footer>
            <div className='footerCards'>
                <FooterCard iconAddess='https://github.com/robisonwebdev' iconClass='lab la-github' />
                <FooterCard iconAddess='https://www.linkedin.com/in/davidrulonrobison/' iconClass='lab la-linkedin' />
            </div>
        </footer>
    );
}

export default Footer;