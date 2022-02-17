import React from 'react';
import SkillCard from './SkillCard';
import '../../styles/Main/About.css';

const About = () => {
    return (
        <section className='about' id='about'>
            <h1>About</h1>
            <section className='about_information'>
                <section className='about_me'></section>
                <section className='skills'>
                    <div className='skills_icons'></div>
                    <div className='skills_icons'></div>
                    <div className='skills_icons'></div>
                </section>
            </section>
        </section>
    );
};

export default About;
