import { useState } from 'react';

function useUpdateProfile() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const updateProfile = async (userId, profileData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const apiBaseUrl = `https://mindx-mockup-server.vercel.app/api/resources/users?apiKey=69a9288da99f2cbf33b34607`;
      
      // Fetch current users data to get the _id
      const getResponse = await fetch(apiBaseUrl);
      if (!getResponse.ok) {
        throw new Error(`Failed to fetch users: ${getResponse.status}`);
      }

      const getData = await getResponse.json();
      // Access the correct nested structure
      const resourceData = getData.data.data[0]; // This contains { users: [...], _id: "..." }
      const usersArray = resourceData.users;
      const resourceId = resourceData._id; // Get the _id needed for PUT

      // Find and update the user
      const updatedUsers = usersArray.map(user => {
        if (user.id === parseInt(userId)) {
          // Keep all existing user data and only update specific fields
          return {
            ...user,
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
            courses: user.courses,
            teachers: user.teachers,
          };
        }
        return user;
      });

      // Log for debugging
      console.log('Resource ID:', resourceId);
      console.log('Sending updated users:', updatedUsers);

      // Send updated data back using the correct URL with _id
      const putUrl = `https://mindx-mockup-server.vercel.app/api/resources/users/${resourceId}?apiKey=69a9288da99f2cbf33b34607`;
      
      const putResponse = await fetch(putUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ users: updatedUsers }),
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
