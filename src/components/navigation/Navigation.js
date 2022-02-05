import React, { useEffect, useState } from 'react';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import MobileMenuButton from './MobileMenuButton';
import Title from './Title';
import '../../styles/Navigation/Navigation.css';

const Navigation = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 700;

    const handleMobileMenuButton = () => {
        setShowMobileMenu(!showMobileMenu);
    };

    useEffect(() => {
        const handleWindowResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return (
        <nav className='navigation'>
            <div className='navigation_bar'>
                <Title address='#home' title='David Robison' />
                {width < breakpoint ? null : <DesktopMenu />}
                {width < breakpoint ? <MobileMenuButton onClick={handleMobileMenuButton} /> : null}
            </div>            
            {showMobileMenu ? <MobileMenu /> : null}
        </nav>
    );
};

export default Navigation;
