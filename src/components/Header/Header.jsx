import './Header.css';

import logoIcon from '../../assets/Icons/logo.svg';
import searchIcon from '../../assets/Icons/search.svg';
import heartIcon from '../../assets/Icons/heart.svg';
import cartIcon from '../../assets/Icons/cart.svg';
import notifIcon from '../../assets/Icons/bell-01.svg';


const GuestProfile = () => (
  <div className='profile-container'>
    <div className='cart'>
      <button className='cart-button' type='button' onClick={() => console.log("Cart!")}>
        <img src={cartIcon} alt='cart' />
      </button>
    </div>

    <div className='log-in'>
      <button className='login-button' type='button' onClick={() => console.log("Log In!")}>
        Log In
      </button>
    </div>

    <div className='sign-up'>
      <button className='signup-button' type='button' onClick={() => console.log("Sign Up!")}>
        Sign Up
      </button>
    </div>
  </div>
);

const UserProfile = () => (
  <div className='profile-container'>
    <div className='favorite'>
      <button className='favorite-button' type='button' onClick={() => console.log("Favorite!")}>
        <img src={heartIcon} alt='favorite' />
      </button>
    </div>

    <div className='cart'>
      <button className='cart-button' type='button' onClick={() => console.log("Cart!")}>
        <img src={cartIcon} alt='cart' />
      </button>
    </div>

    <div className='notification'>
      <button className='notification-button' type='button' onClick={() => console.log("Notification!")}>
        <img src={notifIcon} alt='notification' />
      </button>
    </div>

    <div className='avatar'>
      <button className='profile-button' type='button' onClick={() => console.log("Profile!")}>
        T
      </button>
    </div>
  </div>
);

function Header() {
  return (
    <div className='header-container'>
      {/* Logo */}
      <div className='logo-container'>
        <img src={logoIcon} alt='Byway logo' />
        <h1>Byway</h1>
      </div>

      {/* Categories */}
      <div className='categories-container'>
        {/* Fixed: Wrapped in arrow function */}
        <button className='categories-button' type='button' onClick={() => console.log("Categories!")}>
          Categories
        </button>
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
        <button className='teach-button' type='button' onClick={() => console.log("Teaching!")}>
          Teach on Byway
        </button>
      </div>

      {/* Profile Section */}
      {/* <GuestProfile /> */}
      <UserProfile />
    </div>
  );
}

export default Header;