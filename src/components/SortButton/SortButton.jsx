import './SortButton.css';

import React, { useState } from 'react';

import downArrowIcon from '../../assets/Icons/down-arrow.svg';

function SortButton({ currentSort, onSortChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSortClick = (value) => {
    setIsOpen(false);
    if (onSortChange) onSortChange(value);
  };

  return (
    <div className='sort-button-container'>
      <p>Sort By</p>
      <div className='sort-dropdown'>
        <button className='sort' onClick={() => setIsOpen(!isOpen)}>
          <span id="current-sort">{currentSort}</span>
          <img src={downArrowIcon} alt="arrow" />
        </button>

        {isOpen && (
          <div className='sort-dropdown-content' id='sort-options'>
            {["Newest", "Oldest", "Popular"].map((option) => (
              <button key={option} onClick={() => handleSortClick(option)}>
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SortButton;