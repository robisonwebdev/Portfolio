import React from 'react';
import Footer from './Footer';
import Introduction from './Introduction';
import '../styles/Main.css';
import IntroContact from './IntroContact';

const Main = () => {
    return (
        <div className='main'>
            <Introduction />
            <IntroContact />
            <Footer text='Developed by ' name='David Robison' address='https://github.com/robisonwebdev' /> 
        </div>
    );
}

export default Main;