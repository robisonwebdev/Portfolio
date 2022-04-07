import React from 'react';
import '../../styles/Main/ProjectCard.css';

const ProjectCard = ({ project }) => {
    const { details, image, imageAlt, live, source, title } = project;

    return (
        <section className='project_card'>
            <section className='project_card_image'>
                <img src={image} alt={imageAlt} />
            </section>
            <section className='project_card_information'>
                <div className='project_card_title'>
                    <h3>{title}</h3>
                </div>
                <div className='project_card_description'>
                    <p>{details}</p>
                </div>
                <div className='project_card_links'>
                    <a href={live} target='_blank' ref='noreferrer'>Live View</a>
                    <a href={source} target='_blank' ref='noreferrer'>Source</a>
                </div>
            </section>
        </section>
    );
};

export default ProjectCard;