import './Sidebar.css';
import { Link } from 'react-router-dom';

import profilePicture from '../../assets/Pictures/profile_picture.png';
import shareIcon from '../../assets/Icons/share.svg';

function Sidebar() {
  return (
    <div className='sidebar-container'>
      <div className='sidebar-frame'>
        {/* Top */}
        <div className='sidebar-top-container'>
          <div className='profile-picture-frame'>
            <img src={profilePicture} alt='Profile Picture' />
          </div>

          <h2>John Doe</h2>

          <button>
            <p>Share Profile</p>
            <img src={shareIcon} alt="Share Icon" />
          </button>
        </div>

        {/* Bottom */}
        <div className='sidebar-bottom-container'>
          <ul>
            <li><Link className='profile-link' to="/profile">Profile</Link></li>
            <li><Link className='my-courses-link' to="/my_courses">My Courses</Link></li>
            <li><Link className='teachers-link' to="/teachers">Teachers</Link></li>
            <li><Link className='messages-link' to="/messages">Message</Link></li>
            <li><Link className='my-reviews-link' to="/my_reviews">My Reviews</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;