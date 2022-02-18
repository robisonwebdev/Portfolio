import React from 'react';
import SkillCard from './SkillCard';
import avatar from '../../pictures/beard.png';
import '../../styles/Main/About.css';

const About = () => {
    return (
        <section className='about' id='about'>
            <h1>About</h1>
            <section className='about_information'>
                <section className='about_me'>
                    <img src={avatar} alt='Beaded avater' />
                </section>
                <section className='skills'>
                    <SkillCard icon='lab la-react' name='ReactJS' />
                    <SkillCard icon='lab la-js-square' name='JavaScript' />                    
                    <SkillCard icon='lab la-git' name='Git' />
                    <SkillCard icon='las la-terminal' name='Terminal' />                    
                    <SkillCard icon='lab la-html5' name='HTML5' />
                    <SkillCard icon='lab la-css3-alt' name='CSS3' />                    
                </section>
            </section>
        </section>
    );
};

export default About;
