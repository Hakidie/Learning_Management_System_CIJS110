import './UserProfile.css';

import React, { useState, useEffect } from 'react';

import placeholderProfilePicture from '../../assets/Pictures/placeholderProfile.svg';

import getResource from '../../hooks/getResources';

function UserProfile() {
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    headline: '',
    description: '',
    language: 'English',
    website: '',
    x: '',
    linkedln: '',
    Youtube: '',
    Facebook: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setProfile((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Saving profile data:", profile);
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
              <input type='text' id='firstName' placeholder='First name' onChange={handleChange} />
            </div>

            <div className='last-name'>
              <span>Last Name</span>
              <input type='text' id='lastName' placeholder='Last name' onChange={handleChange} />
            </div>
          </div>

          {/* Headline */}
          <div className='headline-box'>
            <div className='headline'>
              <span>Headline</span>
              <input type='text' id='headline-input' placeholder='Headline' onChange={handleChange} />
            </div>
          </div>

          {/* Description */}
          <div className='description-box'>
            <div className='description'>
              <span>Description</span>
              <textarea id='description-input' placeholder='Description' onChange={handleChange} />
            </div>
          </div>

          {/* Language */}
          <div className='language-box'>
            <div className='language'>
              <span>Language</span>
              <div className='language-input'>
                <input type='text' placeholder='Language' />
                <select>
                  <option value='Vietnamese'>Vietnamese</option>
                  <option value='English'>English</option>
                </select>
              </div>
            </div>
          </div>
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
            <input type='text' id='website-input' placeholder='Website URL' onChange={handleChange} />
          </div>

          {/* X (twitter) */}
          <div className='link-box'>
            <span>X</span>
            <input type='text' id='x-input' placeholder='X URL' onChange={handleChange} />
          </div>

          {/* LinkedIn */}
          <div className='link-box'>
            <span>LinkedIn</span>
            <input type='text' id='linkedin-input' placeholder='LinkedIn URL' onChange={handleChange}/>
          </div>

          {/* Youtube */}
          <div className='link-box'>
            <span>Youtube</span>
            <input type='text' id='youtube-input' placeholder='Youtube URL' onChange={handleChange} />
          </div>

          {/* Facebook */}
          <div className='link-box'>
            <span>Facebook</span>
            <input type='text' id='facebook-input' placeholder='Facebook URL' onChange={handleChange} />
          </div>
        </div>
      </form>
    </div>
  );
}

export default UserProfile;