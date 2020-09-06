// import React from 'react';

export default function paginate(items) {
  const itemsPerPage = 4;
  const numberOfPages = Math.ceil(items.length / itemsPerPage);

  const newProjects = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    return items.slice(start, start + itemsPerPage);
  });

  return newProjects;
}

//array from takes to two paramin and one f thrn is map much
// const newProject = Array.from({ length: numberOfPages }, () => {
//     return items.splice(0, itemsPerPage) });
