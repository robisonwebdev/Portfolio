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
                    <div className='skill_cards'>
                        <SkillCard icon='lab la-react' name='ReactJS' />
                        <SkillCard icon='lab la-js-square' name='JavaScript' />
                    </div>
                    <div className='skill_cards'>
                        <SkillCard icon='lab la-git' name='Git' />
                        <SkillCard icon='lab la-github' name='Github' />
                        <SkillCard icon='las la-terminal' name='Terminal' />
                    </div>
                    <div className='skill_cards'>
                        <SkillCard icon='lab la-html5' name='HTML5' />
                        <SkillCard icon='lab la-css3-alt' name='CSS3' />
                    </div>
                </section>
            </section>
        </section>
    );
};

export default About;
