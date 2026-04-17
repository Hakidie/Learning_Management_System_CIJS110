import { useState } from 'react';
import { getApiUrl } from '../config/api';

function useBuyCourse() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const buyCourse = async (userId, courseId) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Fetch users
      const usersApiUrl = getApiUrl('users');
      const usersResponse = await fetch(usersApiUrl);
      if (!usersResponse.ok) {
        throw new Error(`Failed to fetch users: ${usersResponse.status}`);
      }
      const usersData = await usersResponse.json();
      const usersArray = usersData.data.data;

      // Fetch courses
      const coursesApiUrl = getApiUrl('courses');
      const coursesResponse = await fetch(coursesApiUrl);
      if (!coursesResponse.ok) {
        throw new Error(`Failed to fetch courses: ${coursesResponse.status}`);
      }
      const coursesData = await coursesResponse.json();
      const coursesArray = coursesData.data.data[0]?.courses || coursesData.data.data;

      // Find the user to update
      const userToUpdate = usersArray.find(u => u.id === parseInt(userId));
      if (!userToUpdate) {
        throw new Error('User not found');
      }

      const userObjectId = userToUpdate._id; // Get the user's MongoDB _id

      // Check if course already exists in user's courses
      const courseExists = userToUpdate.courses?.some(c => c.id === parseInt(courseId));
      if (courseExists) {
        throw new Error('You already own this course');
      }

      // Find the course to add
      const courseToAdd = coursesArray.find(c => c.id === parseInt(courseId));
      if (!courseToAdd) {
        throw new Error('Course not found');
      }

      // Create course object with chapters and lessons structure
      const courseObject = {
        id: parseInt(courseId),
        chapters: courseToAdd.chapters?.map(chapter => ({
          chapterTitle: chapter.chapterTitle,
          lessons: chapter.lessons?.map(lesson => ({
            lessonTitle: lesson.lessonTitle,
            duration: lesson.duration,
            finish: false,
          })) || [],
        })) || [],
      };

      // Add course to user's courses array
      const updatedUser = {
        ...userToUpdate,
        courses: [
          ...(userToUpdate.courses || []),
          courseObject,
        ],
      };

      console.log('Adding course to user:', updatedUser);

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
        throw new Error(`Failed to buy course: ${putResponse.status}`);
      }

      const result = await putResponse.json();
      setSuccess(true);
      setLoading(false);
      return updatedUser;
    } catch (err) {
      console.error('Buy course error:', err);
      setError(err.message);
      setLoading(false);
      throw err;
    }
  };

  return { buyCourse, loading, error, success };
}

export default useBuyCourse;
