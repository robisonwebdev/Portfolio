import React from 'react';

const ProjectCard = ({ project }) => {
    const { image, imageAlt } = project;

    return (
        <section className='project_card'>
            <section className='project_card_image'>
                <img src={image} alt={imageAlt} />
            </section>
            <section className='project_card_information'></section>
        </section>
    );
};

export default ProjectCard;