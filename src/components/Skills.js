import React from 'react';
import SkillCard from './SkillCard';
import '../styles/Skills.css';

const Skills = () => {
    return (
        <div id='skills'>
            <h1>Skills</h1>
            <div id='skillsList'>
                <SkillCard className='lab la-html5' text='HTML5' />
                <SkillCard className='lab la-css3-alt' text='CSS' />
                <SkillCard className='lab la-js-square' text='JavaScript' />
                <SkillCard className='lab la-react' text='React' />
                <SkillCard className='lab la-git' text='Git' />
                <SkillCard className='las la-terminal' text='Terminal' />
            </div>
        </div>
    );
}

export default Skills;