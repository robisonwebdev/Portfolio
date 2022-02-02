import React from 'react';

const Title = ({ title }) => {
    return (
        <strong className='navigation_title'>
            <a href='#home'>{title}</a>
        </strong>
    );
};

export default Title;
