import './Sidebar.css';
import { NavLink } from 'react-router-dom';

import profilePicture from '../../assets/Pictures/profile_picture.png';
import shareIcon from '../../assets/Icons/share.svg';
import { useAuth } from '../../hooks/useAuth';

function Sidebar({ userData }) {
  const { user } = useAuth();

  return (
    <div className='sidebar-container'>
      <div className='sidebar-frame'>
        {/* Top */}
        <div className='sidebar-top-container'>
          <div className='profile-picture-frame'>
            <img src={profilePicture} alt='Profile Picture' />
          </div>

          <h2>{userData?.firstName} {userData?.lastName}</h2>

          <button>
            <p>Share Profile</p>
            <img src={shareIcon} alt="Share Icon" />
          </button>
        </div>

        {/* Bottom */}
        <div className='sidebar-bottom-container'>
          <ul>
            <li><NavLink className='profile-link' to={`/user/${user?.id}/profile`}>Profile</NavLink></li>
            <li><NavLink className='my-courses-link' to={`/user/${user?.id}/my_courses`}>My Courses</NavLink></li>
            <li><NavLink className='teachers-link' to={`/user/${user?.id}/my_teachers`}>Teachers</NavLink></li>
            <li><NavLink className='messages-link' to={`/user/${user?.id}/my_messages`}>Message</NavLink></li>
            <li><NavLink className='my-reviews-link' to={`/user/${user?.id}/my_reviews`}>My Reviews</NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;