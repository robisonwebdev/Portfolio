import React from 'react';
import ProjectCard from './ProjectCard';
import { projectInformation } from '../projectInformation';
import '../styles/Projects.css';

const Projects = () => {
    const projectMap = projectInformation.map(project => {
        return (
            <ProjectCard
            key={project.title}
            image={project.image}
            imageAlt={project.imageAlt}
            live={project.live}
            source={project.source}
            title={project.title}
            details={project.details}
        />
        );
    })
    return (
        <div id='projects'>
            <h1>Projects</h1>
            {projectMap}      
        </div>
    );
}

export default Projects;