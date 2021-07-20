import React from 'react';
import Footer from './Footer';
import Introduction from './Introduction';
import '../styles/Main.css';

const Main = () => {
    return (
        <div className='main'>
            <h1>Main</h1>
            <div>
                <Introduction />
            </div>
            <Footer text='Developed by ' name='David Robison' address='https://github.com/robisonwebdev' /> 
        </div>
    );
}

export default Main;