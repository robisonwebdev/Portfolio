import React from 'react';
import SkillCard from './SkillCard';
import avatar from '../../pictures/beard2.png';
import '../../styles/Main/About.css';

const About = () => {
    return (
        <section className='about' id='about'>
            <h1>About</h1>
            <section className='about_information'>
                <section className='about_me'>
                    <img src={avatar} alt='Beaded avater' />
                    <article>
                        <p>Hello and thank you for visiting my website. I’m David Robison and I’m a self-taught web developer. I currently reside in southern Utah.</p>
                        <p>I started my journey into learning web development in January 2021 with the intent of starting a new career. I’ve learned HTML, CSS, JavaScript, Git, GitHub, and ReactJS along the way. To keep myself accountable to being fully committed, I found coding and learning everyday worked for me. As of writing this I’ve not missed a single day in over 460 days.</p>
                        <p>Where to go from here? I’ll continue coding everyday and work my way towards learning a style sheet language and backend web development. Thank you for taking the time to view my portfolio!</p>
                    </article>
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
