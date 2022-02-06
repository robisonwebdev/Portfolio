import React from 'react';
import '../../styles/Footer/Footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer_links'>
                <i className='lab la-github' />
                <i className='lab la-linkedin' />
                <i className='las la-envelope' />
            </div>
            <div className='footer_copyright'>
                <p>David Robison <span>&#169;2022</span></p>
            </div>
        </footer>
    );
};

export default Footer;
