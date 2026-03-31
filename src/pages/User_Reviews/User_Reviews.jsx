import './User_Reviews.css';

import UserPageName from '../../components/User_Page_Name/User_Page_Name';
import Toolbar from '../../components/Toolbar/Toolbar';

function UserReviews() {
  return (
    <div className='user-reviews-container'>
      <UserPageName pageName={"Reviews"} total={10}/>
      {/* <Toolbar /> */}
    </div>
  );
}

export default UserReviews;