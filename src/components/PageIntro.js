import React from 'react';

const PageIntro = ({ description, title }) => {
    return (
        <div className='pageIntro'>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
}

export default PageIntro;