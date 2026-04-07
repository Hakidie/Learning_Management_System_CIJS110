import { createBrowserRouter, Navigate } from 'react-router-dom';

import UserPage from '../pages/User/User';
import UserProfilePage from '../pages/User_Profile/UserProfile';
import UserCoursesPage from '../pages/User_Courses/User_Courses';
import UserTeachersPage from '../pages/User_Teacher/User_Teacher';
import UserMessagesPage from '../pages/User_Messages/User_Messages';
import UserReviewsPage from '../pages/User_Reviews/User_Reviews';
import CategoriesPage from '../pages/Categories/Categories';
import CourseInfoPage from '../pages/CourseInfo/CourseInfo';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/user/1/profile" replace />, // Redirect home to profile with default userId
  },
  {
    path: "/categories",
    children: [
      {
        index: true,
        element: <CategoriesPage />,
      },
      {
        path: "courses/:id",
        element: <CourseInfoPage />,
      },
    ]
  },
  {
    path: "/user/:userId",
    element: <UserPage />, // The "Parent"
    children: [
      {
        path: "profile",
        element: <UserProfilePage />,
      },
      {
        path: "my_courses",
        element: <UserCoursesPage />,
      },
      {
        path: "my_teachers",
        element: <UserTeachersPage />,
      },
      {
        path: "my_reviews",
        element: <UserReviewsPage />,
      },
      {
        path: "my_messages",
        element: <UserMessagesPage />,
      },
      // ... other nested routes
    ],
  },
  {
    path: "/user/profile/*",
    element: <Navigate to="/user/1/profile" replace />,
  },
  {
    path: "/user/*",
    element: <Navigate to="/user/1/profile" replace />,
  },
  {
    path: "*",
    element: <div>404 - Not Found</div>, // Catch-all route
  }
]);