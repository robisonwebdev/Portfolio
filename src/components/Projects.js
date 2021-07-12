import React from 'react';
import ProjectCard from './ProjectCard';
import '../styles/Projects.css';

const Projects = () => {
    return (
        <div className='projects'>
            <ProjectCard 
                image='https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' 
                imageAlt='Sample website'
                address='https://github.com/robisonwebdev/shopping-cart'
                title='Sample Website'
                details='My objective for creating a Shopping Cart with react was to learn how to use Router. Router allowed me move from creating single page applications, to multiple page applications. With Router I was able to setup a navigation using HashRouter, Switch, Route, and Link.'
            />
        </div>
    );
}

export default Projects;