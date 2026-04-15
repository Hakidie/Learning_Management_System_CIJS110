import './User.css';

import { useParams, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Sidebar from '../../components/Sidebar/Sidebar';

import useResource from '../../hooks/getResources';

function User() {
  const { userId } = useParams(); // Assumes your route is /user/:userId
  const [userData, setUserData] = useState(null);
  const allUsers = useResource("users");

  useEffect(() => {
    const foundData = allUsers.find(u => u.id === Number(userId));
    setUserData(foundData);
  }, [userId, allUsers]);

  return (
    <div className='user-page-container'>
      <Header userData={userData}/>

      <div className='user-content-container'>
        <Sidebar userData={userData}/>

        <main className='user-content'>
            <Outlet context={{ userData }}/>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default User;