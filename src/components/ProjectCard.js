import React from 'react';

const ProjectCard = ({ image, imageAlt, address, title, details }) => {
    return (
        <div className='projectCard'>
            <div className='projectCardImage'>
                <a href={address} target='_blank' rel='noreferrer'><img src={image} alt={imageAlt} /></a>
            </div>
            <div className='projectCardInfo'>
                <h2>{title}</h2>
                <p>{details}</p>
            </div>
        </div>
    );
}

export default ProjectCard;