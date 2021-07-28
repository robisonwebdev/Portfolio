import React from 'react';
import PageIntro from './PageIntro';
import '../styles/About.css';

const About = () => {
    return (
        <div className='about'>
            <PageIntro description='Future text about me' title='About Me' />
            <div>About me component here</div>
        </div>
    );
}

export default About;