import React from 'react';
import SkillCard from './SkillCard';
import '../styles/Skills.css';

const Skills = () => {
    return (
        <div id='skills'>
            <h1>Skills</h1>
            <div id='skillsList'>
                <SkillCard className='lab la-html5' text='HTML5' />
            </div>
        </div>
    );
}

export default Skills;