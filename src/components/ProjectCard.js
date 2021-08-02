import React from 'react';
import SkillCard from './SkillCard';
import '../styles/ProjectCard.css';

const ProjectCard = ({ image, imageAlt, live, source, title, details }) => {
    return (
        <div className='projectCard'>
            <img src={image} alt={imageAlt} />
            <div className='projectInfo'>
                <h2>{title}</h2>
                <p>{details}</p>
                <div className='projectLinks'>
                    <p><a href={live}>Live Site</a></p>
                    <p>|</p>
                    <p><a href={source}>Github</a></p>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;