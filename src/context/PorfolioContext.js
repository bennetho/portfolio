import React, { createContext, useState, useEffect } from 'react';
import items from './Data';
import paginate from '../help/helper';

export const PorfolioContext = createContext();

const PorfolioProvider = ({ children }) => {
  const [project, setProject] = useState([]);

  const [page, setPage] = useState(0);
  const [filters, setFilters] = useState('all');

  useEffect(() => {
    setProject(paginate(items));
  }, []);

  // useEffect(() => {
  //   setProject([]);
  //   const filtered = project.filter((item) => item.category === 'react');
  //   console.log(filtered);
  //   setProject(filtered);
  // }, [filters]);

  const changePage = (index) => {
    setPage(index);
  };

  const updateFilters = (e) => {
    const type = e.target.type;
    const value = e.target.value;

    let filterValue;
    if (type === value) {
      filterValue = e.target.value;
    }

    setFilters({ ...filters, [filters]: 'hello' });
  };

  return (
    <PorfolioContext.Provider
      value={{ project, page, filters, changePage, updateFilters }}
    >
      {children}
    </PorfolioContext.Provider>
  );
};
export default PorfolioProvider;
