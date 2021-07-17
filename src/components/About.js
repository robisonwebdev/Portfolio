import React from 'react';
import Footer from './Footer';
import '../styles/About.css';

const About = () => {
    return (
        <div className='about'>
            <h1>About Me</h1>
            <div>About me component here</div>
            <Footer text='Developed by ' name='David Robison' address='https://github.com/robisonwebdev' />
        </div>
    );
}

export default About;