import React from 'react';
import ProjectCard from './ProjectCard';
import projectInformation from '../../projectInformation';
import '../../styles/Main/Projects.css';

const Projects = () => {
    const mapProjects = projectInformation.map(project => {
        return <ProjectCard key={project.id} project={project} />
    })

    return (
        <section className='projects' id='projects'>
            <h1>Projects</h1>
            <section className='projects_list'>
                {mapProjects}
            </section>
        </section>
    );
};

export default Projects;
