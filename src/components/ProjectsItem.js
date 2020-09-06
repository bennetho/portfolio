import React from 'react';
import RedoIcon from '@material-ui/icons/Redo';

function ProjectsItem({ img, title, id, language, extlink }) {
  return (
    <article className='project'>
      <img src={img} alt='image' className='project-img' />
      <div className='project-info'>
        <h3>{language}</h3>
        <h5>{title}</h5>
      </div>
      <a href={extlink} target='_blank' className='btn'>
        VISIT <RedoIcon />
      </a>
    </article>
  );
}

export default ProjectsItem;
