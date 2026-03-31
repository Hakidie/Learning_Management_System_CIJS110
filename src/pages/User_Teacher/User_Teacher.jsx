import './User_Teacher.css';

import UserPageName from '../../components/User_Page_Name/User_Page_Name';
import Toolbar from '../../components/Toolbar/Toolbar';
import TeacherCard from '../../components/Teacher_Card_User/Teacher_Card_User';

import teachersData from '../../sample_data/teachersData';

function UserTeacher() {
  return (
    <div className='user-teacher-container'>
      <UserPageName pageName={"Teacher"} total={10} />
      <Toolbar />

      <div className='teacher-container'>
        {teachersData.map((item) => (
          <TeacherCard key={item.id} teacher={item} />
        ))}
      </div>
    </div>
  );
}

export default UserTeacher;