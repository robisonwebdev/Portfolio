import React from 'react';

const ProjectCard = ({ project }) => {
    const { image, imageAlt } = project;

    return (
        <section className='project_card'>
            <section className='project_card_image'>
                <img src={image} alt={imageAlt} />
            </section>
            <section className='project_card_information'>
                <div className='project_card_title'></div>
                <div className='project_card_description'></div>
                <div className='project_card_links'></div>
            </section>
        </section>
    );
};

export default ProjectCard;