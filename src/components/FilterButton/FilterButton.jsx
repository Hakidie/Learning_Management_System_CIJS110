import './FilterButton.css';

import React, { useState } from 'react';

import filterIcon from '../../assets/Icons/filter.svg';

function FilterButton({ currentFilter, onFilterChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleFilterClick = (value) => {
    setIsOpen(false);
    if (onFilterChange) onFilterChange(value);
  };

  return (
    <div className='filter-button-container'>
      <div className='filter-dropdown'>
        <button className='filter' onClick={() => setIsOpen(!isOpen)}>
          <img src={filterIcon} alt="filter" />
          <span id='current-filter'>{currentFilter}</span>
        </button>

        {isOpen && (
          <div className='filter-dropdown-content' id='filter-options'>
            <button onClick={() => handleFilterClick("Show All")}>Show All</button>
            <button onClick={() => handleFilterClick("Ratings > 1000")}>Ratings &gt; 1000</button>
            <button onClick={() => handleFilterClick("Ratings < 1000")}>Ratings &lt; 1000</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default FilterButton;