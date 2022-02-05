import React, { useState } from 'react';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import MobileMenuButton from './MobileMenuButton';
import Title from './Title';
import '../../styles/Navigation/Navigation.css';

const Navigation = () => {
    const [showLinks, setShowLinks] = useState(false);

    const handleMobileMenuButton = () => {
        setShowLinks(!showLinks);
    }

    return (
        <nav className='navigation'>
            <div className='navigation_bar'>
                <Title address='#home' title='David Robison' />
                <MobileMenuButton onClick={handleMobileMenuButton} />
                <DesktopMenu />
            </div>            
            <div className='navigation_mobile_links'>
                {showLinks ? <MobileMenu /> : null}
            </div>
        </nav>
    );
};

export default Navigation;
