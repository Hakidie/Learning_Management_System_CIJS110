import './Course_Card_User.css';

import { Link, useParams } from 'react-router-dom';
import StarRating from '../StarRating/StarRating';
import fallbackImage from '../../assets/Pictures/courses/default.svg';

function CourseCard({ course, viewType, source = 'categories' }) {
  const { userId } = useParams();
  
  const courseLink = `/categories/courses/${course.id}`;

  return (
    <div className='course-card-container'>
      <Link to={courseLink} className='course-card-link' style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className='course-card'>
          <div className='course-card-picture'>
            <img src={course.img || fallbackImage} alt={course.title} onError={(e) => { e.target.src = fallbackImage; }} />
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