import './User.css';

import { Outlet } from 'react-router-dom';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Sidebar from '../../components/Sidebar/Sidebar';

import { useAuth } from '../../hooks/useAuth';

function User() {
  const { user: userData } = useAuth();

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