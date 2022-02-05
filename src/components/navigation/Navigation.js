import React, { useState } from 'react';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import MobileMenuButton from './MobileMenuButton';
import Title from './Title';
import '../../styles/Navigation/Navigation.css';

const Navigation = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const handleMobileMenuButton = () => {
        setShowMobileMenu(!showMobileMenu);
    }

    return (
        <nav className='navigation'>
            <div className='navigation_bar'>
                <Title address='#home' title='David Robison' />
                <DesktopMenu />
                <MobileMenuButton onClick={handleMobileMenuButton} />
            </div>            
            {showMobileMenu ? <MobileMenu /> : null}
        </nav>
    );
};

export default Navigation;
