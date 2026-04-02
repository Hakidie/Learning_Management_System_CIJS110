import './Toolbar.css';

import React, { useState } from 'react';

import searchIcon from '../../assets/Icons/search.svg';

import SortButton from '../../components/SortButton/SortButton';
import FilterButton from '../../components/FilterButton/FilterButton';

function Toolbar({ currentSort, currentFilter, onSortChange, onFilterChange, onSearch }) {
  // Input value of searchbar
  const [inputValue, setInputValue] = useState("");

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

      {/* Sort and filer container */}
      <div className='toolbar-actions-container'>
        <SortButton
          currentSort={currentSort}
          onSortChange={onSortChange}
        />

        <FilterButton
          currentFilter={currentFilter}
          onFilterChange={onFilterChange}
        />
      </div>
    </div>
  );
}

export default Toolbar;
