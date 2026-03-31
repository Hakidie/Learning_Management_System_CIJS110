import './User_Messages.css';

import UserPageName from '../../components/User_Page_Name/User_Page_Name';
import Toolbar from '../../components/Toolbar/Toolbar';

function UserMessages() {
  return (
    <div className='user-messages-container'>
      <UserPageName pageName={"Messages"} total={10}/>
      <Toolbar />
    </div>
  );
}

export default UserMessages;