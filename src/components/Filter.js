import React, { useContext } from 'react';
import { PorfolioContext } from '../context/PorfolioContext';

const Filter = () => {
  const {
    filters: { category },
    project,
    updateFilters,
  } = useContext(PorfolioContext);

  return (
    <section>
      {/* <button type='button' value='all' onClick={updateFilters}>
        All
      </button>
      <button type='button' value='javascript' onClick={updateFilters}>
        Javascript
      </button>
      <button type='button' value='react js' onClick={updateFilters}>
        React JS
      </button> */}
    </section>
  );
};

export default Filter;
