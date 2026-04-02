import './Toolbar.css';

import React, { useState } from 'react';

import searchIcon from '../../assets/Icons/search.svg';
import downArrowIcon from '../../assets/Icons/down-arrow.svg';
import filterIcon from '../../assets/Icons/filter.svg';

function Toolbar({ currentSort, currentFilter, onSortChange, onFilterChange, onSearch }) {
  // State to track if dropdowns are open
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  // Handlers to update state and close dropdown
  const handleSortClick = (value) => {
    setIsSortOpen(false);
    if (onSortChange) onSortChange(value);
  };

  const handleFilterClick = (value) => {
    setIsFilterOpen(false);
    if (onFilterChange) onFilterChange(value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch(inputValue);
    }
  };

  return (
    <div className='toolbar-container'>
      {/* Searchbar */}
      <div className='toolbar-searchbar'>
        <input
          type="text"
          id="search-input"
          placeholder="Search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} onKeyDown={handleKeyDown} />
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
