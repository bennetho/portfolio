import React from 'react';
// import Project from './Project';

import ProjectsItem from './ProjectsItem';
import Filter from '../components/Filter';

export default function ProductList({ project, page, changePage }) {
  return (
    // <section className='section projects'>
    <>
      <div className='section-title project-title'>
        <h2>Projects</h2>
        <div className='underline'></div>
        <p className='projects-text'></p>
      </div>
      <Filter />
      <div className='section-center projects-center'>
        {project.map((item) => {
          return <ProjectsItem key={item.id} {...item} />;
        })}
      </div>
    </>
    // </section>
  );
}
