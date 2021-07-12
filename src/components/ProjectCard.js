import React from 'react';

const ProjectCard = ({ title, details }) => {
    return (
        <div className='projectCard'>
            <div className='projectCardImage'></div>
            <div className='projectCardInfo'>
                <h2>{title}</h2>
                <p>{details}</p>
            </div>
        </div>
    );
}

export default ProjectCard;