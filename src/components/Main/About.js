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
                        <p>Hello, I’m David Robison and I’m a self-taught front-end web developer. I currently reside in the small town of Parowan located in southern Utah.</p>
                        <p>I started my self-learning of web development in January 2021, with the goals of coding everyday and learning HTML, CSS, JavaScript, and React. Coding everyday has been a great way to keep me on track and  as of writing this I have met all my goals and haven’t missed a day of coding in 460 days.</p>
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
