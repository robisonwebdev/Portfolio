import React from 'react';
import ProjectCard from './ProjectCard';
import Footer from './Footer';
import { projectInformation } from '../projectInformation';
import '../styles/Projects.css';

const Projects = () => {
    const projectMap = projectInformation.map(project => {
        return (
            <ProjectCard
            image={project.image}
            imageAlt={project.imageAlt}
            address={project.address}
            title={project.title}
            details={project.details}
        />
        );
    })
    return (
        <div className='projects'>
            {projectMap}
            {projectMap}
            {projectMap}
            {projectMap}
            <Footer text='Developed by ' name='David Robison' address='https://github.com/robisonwebdev' />         
        </div>
    );
}

export default Projects;