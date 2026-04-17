import { useState } from 'react';
import { getApiUrl } from '../config/api';

function useUpdateProfile() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const updateProfile = async (userId, profileData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const apiBaseUrl = getApiUrl('users');
      
      // Fetch current users data to find the target user and get their _id
      const getResponse = await fetch(apiBaseUrl);
      if (!getResponse.ok) {
        throw new Error(`Failed to fetch users: ${getResponse.status}`);
      }

      const getData = await getResponse.json();
      const usersArray = getData.data.data; // Array of users

      // Find the user to update
      const userToUpdate = usersArray.find(u => u.id === parseInt(userId));
      if (!userToUpdate) {
        throw new Error('User not found');
      }

      const userObjectId = userToUpdate._id; // Get the user's MongoDB _id

      // Update the user object with new profile data
      const updatedUser = {
        ...userToUpdate,
        firstName: profileData.firstName,
        lastName: profileData.lastName,
        headline: profileData.headline,
        description: profileData.description,
        language: profileData.language,
        links: {
          website: profileData.website,
          x: profileData.x,
          linkedln: profileData.linkedln,
          youtube: profileData.youtube,
          facebook: profileData.facebook,
        },
        // Keep existing courses and teachers arrays
        courses: userToUpdate.courses,
        teachers: userToUpdate.teachers,
      };

      console.log('User Object ID:', userObjectId);
      console.log('Sending updated user:', updatedUser);

      // Send updated user data using PUT with the user's _id
      const { API_BASE_URL, API_KEY } = await import('../config/api');
      const putUrl = `${API_BASE_URL}/api/resources/users/${userObjectId}?apiKey=${API_KEY}`;
      
      const putResponse = await fetch(putUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUser),
      });

      if (!putResponse.ok) {
        const errorData = await putResponse.text();
        console.error('Server error response:', errorData);
        throw new Error(`Failed to update profile: ${putResponse.status}`);
      }

      const result = await putResponse.json();
      setSuccess(true);
      setLoading(false);
      return result;
    } catch (err) {
      console.error('Update error:', err);
      setError(err.message);
      setLoading(false);
      throw err;
    }
  };

  return { updateProfile, loading, error, success };
}

export default useUpdateProfile;
