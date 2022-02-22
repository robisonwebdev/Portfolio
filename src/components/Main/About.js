import React from 'react';
import SkillCard from './SkillCard';
import avatar from '../../pictures/beard.png';
import '../../styles/Main/About.css';

const About = () => {
    return (
        <section className='about' id='about'>
            <h1>About</h1>
            <section className='about_information'>
                <article className='about_me'>
                    <img src={avatar} alt='Beaded avater' />
                    <p>Ut odio velit, feugiat vitae rhoncus in, tincidunt eu arcu. Nulla ac elementum nunc. Integer laoreet in turpis ac mattis. Integer sodales sapien eu dictum ullamcorper. Nam varius non est non posuere. Mauris non porta mauris. Praesent finibus sagittis suscipit. Proin eget lobortis tellus. Ut eleifend odio eget venenatis suscipit. Suspendisse consequat ullamcorper metus nec lobortis. Morbi a leo efficitur orci lobortis luctus nec ac neque. Cras vel elementum nisl. Vivamus lacinia sit amet libero a cursus. Curabitur aliquet nisi nunc, vel tristique nulla ultricies eget. Cras varius enim lacus, sed tempor libero ornare ac.</p>
                </article>
                <section className='skills'>
                    <SkillCard icon='lab la-react' name='ReactJS' />
                    <SkillCard icon='lab la-js-square' name='JavaScript' />                    
                    <SkillCard icon='lab la-git' name='Git' />
                    <SkillCard icon='las la-terminal' name='Terminal' />                    
                    <SkillCard icon='lab la-html5' name='HTML5' />
                    <SkillCard icon='lab la-css3-alt' name='CSS3' />                    
                </section>
            </section>
        </section>
    );
};

export default About;
