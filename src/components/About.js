import React from 'react';
import myPhoto from '../pictures/myPhoto.jpeg';
import ContactLink from './ContactLink'
import '../styles/About.css';

const About = () => {
    return (
        <div id='about'>
            <h1 className='sectionTitle'>About Me</h1>
            <div id='aboutMe'>
                <img src={myPhoto} alt='David Robison' />
                <div id='myInfo'>
                    <div id='myStory'>
                        <p>Welcome to my website!</p>
                        <p>My name is David Robison. I’m 35 years old and currently living in Southern Utah. I’m currently working towards becoming a Full Stack Web Developer.</p>
                        <p>Throughout my life, from High School and into College, I've dabbled with programming. That dabbling with programming was to satisfy my curiosity, but it never fully crossed my mind to turn that curiosity towards a career path.</p>
                        <p>That finally changed during the past year, when trying to pin down a career I could see myself enjoying. I decided to jump into learning web development from the beginning. I started with the basics (HTML / CSS), moving on to learning a programming language (JavaScript), and currently learning a framework (React).</p>
                        <p>During this learning process I’ve made it a personal goal to code everyday (be it a few hours or five minutes), to keep myself accountable. As of writing out this “About Me’ section, I’ve coded every day for the past 210 days! Here's to another 210 days to coding/learning/building!</p>
                        <p>Thank you for taking the time to view my portfolio!</p>
                    </div>
                    <div className='mySocialLinks'>
                        <ContactLink address='https://github.com/robisonwebdev' iconClass='lab la-github' />
                        <ContactLink address='https://www.linkedin.com/in/davidrulonrobison/' iconClass='lab la-linkedin' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;