import React, { useContext } from 'react';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';

import ProjectList from './ProjectList';
import { PorfolioContext } from '../context/PorfolioContext';

const PageProject = () => {
  const { project, page, changePage } = useContext(PorfolioContext);

  if (project[page]) {
    return (
      <>
        <ProjectList project={project[page]} />

        {project.length > 1 && (
          <article className='pagination-buttons'>
            {/* -------------prev ---------*/}
            {page > 0 && (
              <button
                className='prev-page-btn'
                onClick={() => changePage(page - 1)}
              >
                <FaAngleDoubleLeft />
              </button>
            )}

            {project.map((_, index) => {
              return (
                <button
                  onClick={() => changePage(index)}
                  key={index}
                  className={`page-btn ${page === index && `page-btn-current`}`}
                >
                  {index + 1}
                </button>
              );
            })}
            {/* -----------next -----------*/}
            {page < project.length - 1 && (
              <button
                className='next-page-btn'
                onClick={() => changePage(page + 1)}
              >
                <FaAngleDoubleRight />
              </button>
            )}
          </article>
        )}
      </>
    );
  } else {
    return null;
  }

  //   if (project[page]) {
  //     return <ProjectList project={project[page]} changePage={changePage} />;
  //   } else {
  //     return null;
  //   }
};

export default PageProject;

// project has an empty value and page has a 0 value so if we map and empty value with 0 index it going to through an error therefore conditionall statement is neede to fix it
