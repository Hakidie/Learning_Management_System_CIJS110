import './User_Courses.css';

import UserPageName from '../../components/User_Page_Name/User_Page_Name';
import Toolbar from '../../components/Toolbar/Toolbar';

function UserCourses() {
  return (
    <div className='user-courses-container'>
      <UserPageName pageName={"Courses"} totalCourses={10}/>
      <Toolbar />
    </div>
  );
}

export default UserCourses;