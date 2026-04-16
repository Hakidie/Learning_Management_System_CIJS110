import './Bottom.css';

import bottom1Picture from '../../../assets/Pictures/bottom1.svg';
import bottom2Picture from '../../../assets/Pictures/bottom2.svg';
import arrowRight from '../../../assets/Icons/arrow-narrow-right.svg';

function Bottom() {
  return (
    <div className='bottom-container'>
      <div className='bottom-top'>
        <div className='top-images'>
          <img src={bottom1Picture} alt='become an instructor image' />
        </div>

        <div className='bottom-top-content'>
          <h2>Become an Instructor</h2>
          <p>Instructors from around the world teach millions of students on Byway. We provide the tools and skills to teach what you love.</p>
          <button className='bottom-top-button'>
            <label>Checkout Courses</label>
            <img src={arrowRight} alt='arrow' />
          </button>
        </div>
      </div>

      <div className='bottom-bottom'>
        <div className='bottom-bottom-content'>
          <h2>Transform your life through education</h2>
          <p>Learners around the world are launching new careers, advancing in their fields, and enriching their lives.</p>
          <button className='bottom-bottom-button'>
            <label>Checkout Courses</label>
            <img src={arrowRight} alt='arrow' />
          </button>
        </div>

        <div className='bottom-images'>
          <img src={bottom2Picture} alt='checkout courses image' />
        </div>
      </div>
    </div>
  );
}

export default Bottom;