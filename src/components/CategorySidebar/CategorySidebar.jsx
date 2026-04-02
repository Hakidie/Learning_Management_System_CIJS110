import './CategorySidebar.css';

import { useState } from 'react';

import StarRating from '../StarRating/StarRating';
import downArrowIcon from '../../assets/Icons/down-arrow.svg';

function CategorySidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleCategory = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='categorySidebar-container'>
      <div className='categorySidebar-frame'>
        {/* Categories */}
        <div className='category-container'>
          <div className='category-name'>
            <h3>Rating</h3>
            <button onClick={toggleCategory}>
              <img
                src={downArrowIcon}
                alt='down arrow icon'
                style={{
                  transform: isOpen ? 'rotate(0deg)' : 'rotate(-180deg)',
                  transition: 'transform 0.2s ease'
                }}
              />
            </button>
          </div>

          {isOpen && (
            <div className='category-options'>
              <button><StarRating rating={5} /></button>
              <button><StarRating rating={4} /></button>
              <button><StarRating rating={3} /></button>
              <button><StarRating rating={2} /></button>
              <button><StarRating rating={1} /></button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CategorySidebar;