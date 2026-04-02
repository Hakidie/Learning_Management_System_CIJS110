import './Teacher_Card_User.css';

import { Link } from 'react-router-dom';
import mailIcon from '../../assets/Icons/mail.svg';
import starIcon from '../../assets/Icons/star.svg';

function TeacherCard({ teacher, viewType }) {
  return (
    <div className='teacher-card-container'>
      <Link to={`/teacher/message/${teacher.id}`} className='course-card-link' style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className='teacher-card'>
          <div className="teacher-picture">
            <img src={teacher.img} alt={teacher.name} />
            <h3>{teacher.name}</h3>
            <p>{teacher.role}</p>
          </div>

          {viewType === 'user' && (
            <button className="teacher-send-message">
              Send Message
              <img src={mailIcon} />
            </button>
          )}

          {viewType === 'default' && (
            <div className='teacher-rating'>
              <div className='stars-rating'>
                <img src={starIcon} alr='Star rating' />
                <p>{teacher.rating}</p>
              </div>

              <p>2400 Students</p>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}

export default TeacherCard;