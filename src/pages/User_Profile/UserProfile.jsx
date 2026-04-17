import './UserProfile.css';

import { useState, useEffect } from 'react';
import { useParams, useOutletContext, useNavigate } from 'react-router-dom';

import placeholderProfilePicture from '../../assets/Pictures/placeholderProfile.svg';

import useUpdateProfile from '../../hooks/useUpdateProfile';
import { useAuth } from '../../hooks/useAuth';
import useGetUser from '../../hooks/getUsers';

function UserProfile() {
  const { userId } = useParams();
  // const { userData } = useOutletContext();
  const { updateProfile, loading, error, success } = useUpdateProfile();
  const { logout } = useAuth();
  const navigate = useNavigate();
  const allUsers = useGetUser(); // Fetch fresh data from API
  
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    headline: '',
    description: '',
    language: 'English',
    website: '',
    x: '',
    linkedln: '',
    youtube: '',
    facebook: '',
  });

  // Load user data from mindx mock up server
  useEffect(() => {
    if (allUsers && allUsers.length > 0) {
      // Find the current user from fresh API data
      const freshUserData = allUsers.find(u => u.id === parseInt(userId));
      
      if (freshUserData) {
        setProfile({
          firstName: freshUserData.firstName || '',
          lastName: freshUserData.lastName || '',
          headline: freshUserData.headline || '',
          description: freshUserData.description || '',
          language: freshUserData.language || 'English',
          website: freshUserData.links?.website || '',
          x: freshUserData.links?.x || '',
          linkedln: freshUserData.links?.linkedln || '',
          youtube: freshUserData.links?.youtube || '',
          facebook: freshUserData.links?.facebook || '',
        });
      }
    }
  }, [allUsers, userId]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setProfile((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(userId, profile);
      alert('Profile updated successfully!');
    } catch (err) {
      alert('Failed to update profile: ' + err.message);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className='user-profile-container'>
      <form className='input-profile-container' onSubmit={handleSubmit}>
        {/* Profile information */}
        <div className='profile-info'>
          {/* Name */}
          <div className='name-box'>
            <div className='first-name'>
              <span>First Name</span>
              <input type='text' id='firstName' placeholder='First name' value={profile.firstName} onChange={handleChange} />
            </div>

            <div className='last-name'>
              <span>Last Name</span>
              <input type='text' id='lastName' placeholder='Last name' value={profile.lastName} onChange={handleChange} />
            </div>
          </div>

          {/* Headline */}
          <div className='headline-box'>
            <div className='headline'>
              <span>Headline</span>
              <input type='text' id='headline' placeholder='Headline' value={profile.headline} onChange={handleChange} />
            </div>
          </div>

          {/* Description */}
          <div className='description-box'>
            <div className='description'>
              <span>Description</span>
              <textarea id='description' placeholder='Description' value={profile.description} onChange={handleChange} />
            </div>
          </div>

          {/* Language */}
          {/* <div className='language-box'>
            <div className='language'>
              <span>Language</span>
              <div className='language-input'>
                <select id='language' value={profile.language} onChange={handleChange}>
                  <option value='Vietnamese'>Vietnamese</option>
                  <option value='English'>English</option>
                </select>
              </div>
            </div>
          </div> */}
        </div>

        {/* Profile image */}
        <div className='profile-image'>
          {/* Preview container */}
          <div className='image-preview-container'>
            <h3>Image Preview</h3>
            <div className='image-box'>
              <img src={placeholderProfilePicture} alt='user profile picture' />
            </div>
          </div>

          {/* Upload image */}
          <div className='image-upload-container'>
            <h3>Add/Change Image</h3>

            {/* Upload image path */}
            <div className='upload-box'>
              <input type='text' placeholder='Image path' />
              <button>Upload Image</button>
            </div>

            {/* Save image button */}
            <button className='upload-image'>Save Image</button>
          </div>
        </div>

        {/* Profile links */}
        <div className='profile-links'>
          <h3>Links</h3>
          {/* Website */}
          <div className='link-box'>
            <span>Website</span>
            <input type='text' id='website' placeholder='Website URL' value={profile.website} onChange={handleChange} />
          </div>

          {/* X (twitter) */}
          <div className='link-box'>
            <span>X</span>
            <input type='text' id='x' placeholder='X URL' value={profile.x} onChange={handleChange} />
          </div>

          {/* LinkedIn */}
          <div className='link-box'>
            <span>LinkedIn</span>
            <input type='text' id='linkedln' placeholder='LinkedIn URL' value={profile.linkedln} onChange={handleChange}/>
          </div>

          {/* Youtube */}
          <div className='link-box'>
            <span>Youtube</span>
            <input type='text' id='youtube' placeholder='Youtube URL' value={profile.youtube} onChange={handleChange} />
          </div>

          {/* Facebook */}
          <div className='link-box'>
            <span>Facebook</span>
            <input type='text' id='facebook' placeholder='Facebook URL' value={profile.facebook} onChange={handleChange} />
          </div>
        </div>
        
        {/* Submit button */}
        <button type='submit' className='user-profile-button save' >
          {loading ? 'Saving...' : 'Save Changes'}
        </button>
        
        {/* Logout button */}
        <button type='button' className='user-profile-button logout' onClick={handleLogout} >
          Logout
        </button>
        
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        {success && <p style={{ color: 'green' }}>Profile updated successfully!</p>}
      </form>
    </div>
  );
}

export default UserProfile;