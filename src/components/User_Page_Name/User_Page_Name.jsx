import './User_Page_Name.css';

function UserPageName({ pageName, totalCourses }) {
  return (
    <div className='user-page-name-container'>
      <h2>{pageName}</h2>
      <p>({totalCourses})</p>
    </div>
  );
}

export default UserPageName;