import './Toolbar.css';

import React, { useState } from 'react';

import searchIcon from '../../assets/Icons/search.svg';
import downArrowIcon from '../../assets/Icons/down-arrow.svg';
import filterIcon from '../../assets/Icons/filter.svg';

function Toolbar() {
  // 1. State to track if dropdowns are open
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // 2. State to track the currently selected values
  const [currentSort, setCurrentSort] = useState("Newest");
  const [currentFilter, setCurrentFilter] = useState("Filter");

  // Handlers to update state and close dropdown
  const handleSortClick = (value) => {
    setCurrentSort(value);
    setIsSortOpen(false);
  };

  const handleFilterClick = (value) => {
    setCurrentFilter(value);
    setIsFilterOpen(false);
  };

  return (
    <div className='toolbar-container'>
      {/* Searchbar */}
      <div className='toolbar-searchbar'>
        <input type="text" id="search-input" placeholder="Search" />
        <img src={searchIcon} alt="search-icon" />
      </div>

      {/* Sort container */}
      <div className='toolbar-sort-container'>
        <p>Sort By</p>

        {/* Dropdown Sort */}
        <div className='dropdown-sort'>
          <button className='sort' onClick={() => setIsSortOpen(!isSortOpen)}>
            <span id="current-sort">{currentSort}</span>
            <img src={downArrowIcon} alt="arrow" />
          </button>

          {/* Logic to show/hide content */}
          {isSortOpen && (
            <div className='dropdown-content' id='sort-options'>
              <button onClick={() => handleSortClick("Newest")}>Newest</button>
              <button onClick={() => handleSortClick("Oldest")}>Oldest</button>
              <button onClick={() => handleSortClick("Popular")}>Popular</button>
            </div>
          )}
        </div>

        {/* Dropdown Filter */}
        <div className='dropdown-filter'>
          <button className='filter' onClick={() => setIsFilterOpen(!isFilterOpen)}>
            <img src={filterIcon} alt="filter" />
            <span id='current-filter'>{currentFilter}</span>
          </button>

          {isFilterOpen && (
            <div className='dropdown-content' id='filter-options'>
              <button onClick={() => handleFilterClick("Show All")}>Show All</button>
              <button onClick={() => handleFilterClick("Ratings > 1000")}>Ratings &gt; 1000</button>
              <button onClick={() => handleFilterClick("Ratings < 1000")}>Ratings &lt; 1000</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Toolbar;
