import './Course_Card_User.css';

import { Link } from 'react-router-dom';
import StarRating from '../StarRating/StarRating';

function CourseCard({ course, viewType }) {
  return (
    <div className='course-card-container'>
      <Link to={`courses/${course.id}`} className='course-card-link' style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className='course-card'>
          <div className='course-card-picture'>
            <img src={course.img} alt={course.title} />
          </div>

          <h3>{course.title}</h3>

          <p>By {course.instructor}</p>

          {/* <div className='course-progress-bar'>
          <div className='course-progress' style={{width: '40%'}}>
        </div></div> */}

          <div className='course-rating'>
            <StarRating rating={course.rating}/>

            <p>{course.totalRatings} Ratings</p>
          </div>

          {viewType === 'default' && (
            <h4>${course.price}</h4>
          )}
        </div>
      </Link>
    </div>
  );
}

export default CourseCard;