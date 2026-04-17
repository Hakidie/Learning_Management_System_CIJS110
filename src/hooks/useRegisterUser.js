import { useState } from 'react';
import { getApiUrl, API_BASE_URL, API_KEY } from '../config/api';

function useRegisterUser() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const registerUser = async (registrationData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const apiBaseUrl = getApiUrl('users');
      
      // Fetch current users data to check for duplicate email and get next ID
      const getResponse = await fetch(apiBaseUrl);
      if (!getResponse.ok) {
        throw new Error(`Failed to fetch users: ${getResponse.status}`);
      }

      const getData = await getResponse.json();
      const usersArray = getData.data.data; // Array of users directly

      // Check if email already exists
      const emailExists = usersArray.some(u => u.email?.toLowerCase() === registrationData.email.toLowerCase());
      if (emailExists) {
        throw new Error('Email already registered');
      }

      // Create new user object
      const newUser = {
        id: Math.max(...usersArray.map(u => u.id), 0) + 1,
        firstName: registrationData.firstName,
        lastName: registrationData.lastName,
        email: registrationData.email,
        headline: '',
        description: '',
        language: 'English',
        teachers: [],
        links: {
          website: '',
          x: '',
          linkedln: '',
          youtube: '',
          facebook: '',
        },
        courses: [],
      };

      console.log('New user:', newUser);

      // Send new user via POST
      const postResponse = await fetch(apiBaseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      if (!postResponse.ok) {
        const errorData = await postResponse.text();
        console.error('Server error response:', errorData);
        throw new Error(`Failed to register user: ${postResponse.status}`);
      }

      const result = await postResponse.json();
      setSuccess(true);
      setLoading(false);
      return newUser; // Return the new user object
    } catch (err) {
      console.error('Registration error:', err);
      setError(err.message);
      setLoading(false);
      throw err;
    }
  };

  return { registerUser, loading, error, success };
}

export default useRegisterUser;
