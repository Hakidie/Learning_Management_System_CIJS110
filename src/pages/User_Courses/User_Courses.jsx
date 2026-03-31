import './User_Courses.css';

import UserPageName from '../../components/User_Page_Name/User_Page_Name';
import Toolbar from '../../components/Toolbar/Toolbar';
import CourseCard from '../../components/Course_Card_User/Course_Card_User';

import coursesData from '../../sample_data/coursesData';

function UserCourses() {
  return (
    <div className='user-courses-container'>
      <UserPageName pageName={"Courses"} total={coursesData.length} />
      <Toolbar />
      <div className='courses-container'>
        {coursesData.map((item) => (
          <CourseCard key={item.id} course={item} />
        ))}
      </div>
    </div>
  );
}

export default UserCourses;