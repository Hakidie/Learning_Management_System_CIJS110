import './Header.css';
import { Link } from 'react-router-dom';

import logoIcon from '../../assets/Icons/logo.svg';
import searchIcon from '../../assets/Icons/search.svg';
import heartIcon from '../../assets/Icons/heart.svg';
import cartIcon from '../../assets/Icons/cart.svg';
import notifIcon from '../../assets/Icons/bell-01.svg';

import { useAuth } from '../../hooks/useAuth';


const GuestProfile = () => (
  <div className='profile-container'>
    <div className='cart'>
      <Link to="/cart" className='cart-link'>
        <img src={cartIcon} alt='cart' />
      </Link>
    </div>

    {/* Log In button */}
    <div className='log-in'>
      <Link to="/login" className='login-button'>
        Log In
      </Link>
    </div>

    {/* Sign Up button */}
    <div className='sign-up'>
      <Link to="/signup" className='signup-button'>
        Sign Up
      </Link>
    </div>
  </div>
);

const UserProfile = ({ userId,userName }) => (
  <div className='profile-container'>
    {/* Favorite */}
    <div className='favorite'>
      <Link to="/favorites" className='favorite-link'>
        <img src={heartIcon} alt='favorite' />
      </Link>
    </div>

    {/* Cart */}
    <div className='cart'>
      <Link to="/cart" className='cart-link'>
        <img src={cartIcon} alt='cart' />
      </Link>
    </div>

    {/* Notification */}
    <div className='notification'>
      <Link to="/notification" className='notification-link'>
        <img src={notifIcon} alt='notification' />
      </Link>
    </div>

    {/* Profile */}
    <div className='avatar'>
      <Link to={`/user/${userId}/profile`} className='profile-button'>
        {userName}
      </Link>
    </div>
  </div>
);

function Header({ viewType, userData }) {
  const { isAuthenticated, user } = useAuth();
  const userId = user?.id;
  const userName = user?.firstName?.[0]?.toUpperCase() || 'U';

  return (
    <div className='header-container'>
      {/* Logo */}
      <Link to="/" className='logo-container'>
        <img src={logoIcon} alt='Byway logo' />
        <h1>Byway</h1>
      </Link>

      {/* Categories */}
      <div className='categories-container'>
        <Link to="/categories" className='categories-link'>
          Categories
        </Link>
      </div>

      {/* Searchbar */}
      <div className='searchbar-container'>
        <div className='search-icon'>
          <img src={searchIcon} alt='Search Icon' />
        </div>
        <input type="text" placeholder='Search courses' />
      </div>

      {/* Teaching */}
      <div className='teach-container'>
        <Link to="/teaching" className='teach-link'>
          Teach on Byway
        </Link>
      </div>

      {/* Profile Section */}
      {!isAuthenticated ? (
        <GuestProfile />
      ) : (
        <UserProfile userId={userId} userName={userName} />
      )}
    </div>
  );
}

export default Header;