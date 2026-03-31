import './User_Teacher.css';

import UserPageName from '../../components/User_Page_Name/User_Page_Name';
import Toolbar from '../../components/Toolbar/Toolbar';

function UserTeacher() {
  return (
    <div className='user-teacher-container'>
      <UserPageName pageName={"Teacher"} total={10}/>
      <Toolbar />
    </div>
  );
}

export default UserTeacher;