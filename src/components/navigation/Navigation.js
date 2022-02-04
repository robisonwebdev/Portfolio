import React, { useState } from 'react';
import MobileMenu from './MobileMenu';
import Navlink from './Navlink';
import Title from './Title';
import '../../styles/Navigation/Navigation.css';

const Navigation = () => {
    const [showLinks, setShowLinks] = useState(false);

    const handleMobileMenu = () => {
        setShowLinks(!showLinks);
    }

    return (
        <nav className='navigation'>
            <div className='navigation_bar'>
                <Title address='#home' title='David Robison' />
                <MobileMenu onClick={handleMobileMenu} />
            </div>            
            <div className='navigation_links'>
                {showLinks 
                    ?   <ul>
                            <Navlink address='#projects' text='Projects' />
                            <Navlink address='#skills' text='Skills' />
                            <Navlink address='#contact' text='Contact' />
                        </ul>
                    : null
                }
            </div>
        </nav>
    );
};

export default Navigation;
