import './Teacher_Card_User.css';

import { Link } from 'react-router-dom';
import mailIcon from '../../assets/Icons/mail.svg';

function TeacherCard({ teacher }) {
  return (
    <div className='teacher-card-container'>
      <Link to={`/teacher/message/${teacher.id}`} className='course-card-link' style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className='teacher-card'>
          <div className="teacher-picture">
            <img src={teacher.img} alt={teacher.name} />
            <h3>{teacher.name}</h3>
            <p>{teacher.role}</p>
          </div>

          <button className="teacher-send-message">
            Send Message
            <img src={mailIcon} />
          </button>
        </div>
      </Link>
    </div>
  );
}

export default TeacherCard;