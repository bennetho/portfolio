import React, { createContext, useState, useEffect } from 'react';
import items from './Data';

export const PorfolioContext = createContext();

const PorfolioProvider = ({ children }) => {
  const [project, setProject] = useState([items]);
  // console.log(project);
  // const [id, extlink, title, img, btnTitle] = items;

  // useEffect(() => {
  //   setProject(items);
  // }, []);

  return (
    <PorfolioContext.Provider value={{ project }}>
      {children}
    </PorfolioContext.Provider>
  );
};
export default PorfolioProvider;
