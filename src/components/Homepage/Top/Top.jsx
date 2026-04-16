import './Top.css';

import { Link } from 'react-router-dom';

import CourseCard from '../../Course_Card_User/Course_Card_User';
import TeacherCard from '../../Teacher_Card_User/Teacher_Card_User';

function Top({ typeName, typeData }) {
  return (
    <div className='top-container'>
      <div className="top-container-title">
        <h2>Top {typeName}</h2>
        <Link className='see-all-link' to={`/categories`}>See all</Link>
      </div>

      <div className='top-card-container'>
        {typeName === 'Courses' &&
          typeData.slice(0, 4).map(item => (
            <CourseCard key={item.id} course={item} viewType='default' />
          ))
        }

        {typeName === 'Instructors' &&
          typeData.slice(0, 5).map(item => (
            <TeacherCard key={item.id} teacher={item} viewType={'default'} />
          ))
        }
      </div>
    </div>
  );
}

export default Top;