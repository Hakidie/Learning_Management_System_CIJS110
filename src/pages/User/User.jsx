import './User.css';

import { Outlet } from 'react-router-dom';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Sidebar from '../../components/Sidebar/Sidebar';

function User() {
  return (
    <div className='user-page-container'>
      <Header />

      <div className='user-content-container'>
        <Sidebar />

        <main className='user-content'>
            <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default User;