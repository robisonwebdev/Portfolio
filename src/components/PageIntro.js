import React from 'react';
import '../styles/PageIntro.css';

const PageIntro = ({ description, title }) => {
    return (
        <div className='pageIntro'>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
}

export default PageIntro;