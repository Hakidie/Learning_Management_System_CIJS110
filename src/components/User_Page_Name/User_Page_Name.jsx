import './User_Page_Name.css';

function UserPageName({ pageName, total }) {
  return (
    <div className='user-page-name-container'>
      <h2>{pageName}</h2>
      <p>({total})</p>
    </div>
  );
}

export default UserPageName;