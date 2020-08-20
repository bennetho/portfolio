// import beauty from '../images/beauty-1.jpg';
// import gym from '../images/gym-2.jpg';
// import onlinecloth from '../images/onlinecloth-3.jpg';
// import porfolio from '../images/portfolio-4.jpg';
// import school from '../images/school-5.jpg';
// import beach from '../images/beach-6.jpg';

import React from 'react';
import { useContext } from 'react';
import { PorfolioContext } from '../context/PorfolioContext';
import RedoIcon from '@material-ui/icons/Redo';

function ProjectsItem() {
  const { project } = useContext(PorfolioContext);
  const { ...items } = project;

  return (
    <section className='section projects'>
      <div className='section-title project-title'>
        <h2>Projects</h2>
        <div className='underline'></div>
        <p className='projects-text'></p>
      </div>
      <div className='section-center projects-center'>
        {items[0].map((item) => {
          return (
            <article className='project' key={item.id}>
              <img src={item.img} alt='image' className='project-img' />
              <div className='project-info'>
                <h5>{item.language}</h5>
                <p>{item.title}</p>
              </div>
              <a href={item.extlink} className='btn'>
                VISIT <RedoIcon />
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default ProjectsItem;
