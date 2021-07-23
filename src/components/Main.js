import React from 'react';
import Introduction from './Introduction';
import '../styles/Main.css';
import IntroContact from './IntroContact';

const Main = () => {
    return (
        <div className='main'>
            <Introduction />
            <IntroContact />
        </div>
    );
}

export default Main;