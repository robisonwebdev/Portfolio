import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import '../styles/Content.css';

const Content = () => {
    return (
        <div className='content'>
            <Switch>
                <Route exact path='/'>
                    <Projects />
                </Route>
                <Route exact path='/about'>
                    <About />
                </Route>
                <Route exact path='/contact'>
                    <Contact />
                </Route>
            </Switch>
        </div>
    );
}

export default Content;