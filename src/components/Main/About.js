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
                        <p>As a self-taught web developer, I am constantly pushing myself to learn, grow, and create impactful solutions for the web. My name is David Robison and I am based in southern Utah.</p>
                        <p>I launched my journey into web development in 2021 with a goal to make a career switch. Armed with a strong work ethic and a passion for coding, I taught myself HTML, CSS, JavaScript, Git, GitHub, and ReactJS. My dedication to continuous improvement is unwavering, as evidenced by my commitment to coding every day, which I achieved 687 consecutive days.</p>
                        <p>My ultimate goal is to become a well-rounded web developer, with expertise in both front-end and back-end development. I am eager to learn a styling language and delve deeper into the intricacies of backend development.</p>
                        <p>Take a look at my portfolio and you will see a glimpse of my journey and my passion for web development. Thank you for visiting, and I hope you enjoy exploring my projects!</p>
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
