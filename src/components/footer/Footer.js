import React from 'react';
import Icon from '../Icon';
import '../../styles/Footer/Footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer_links'>
                <Icon address='https://github.com/robisonwebdev' icon='lab la-github'/>
                <Icon address='https://www.linkedin.com/in/davidrulonrobison/' icon='lab la-linkedin' />
                <Icon address='mailto:david@robisonweb.dev' icon='las la-envelope' />
            </div>
            <div className='footer_copyright'>
                <p>David Robison <span>&#169;2022</span></p>
            </div>
        </footer>
    );
};

export default Footer;
