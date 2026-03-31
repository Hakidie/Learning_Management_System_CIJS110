import { createBrowserRouter, Navigate } from 'react-router-dom';

import UserPage from '../pages/User/User';
import UserCoursesPage from '../pages/User_Courses/User_Courses';
import UserTeachersPage from '../pages/User_Teacher/User_Teacher';
import UserMessagesPage from '../pages/User_Messages/User_Messages';
import UserReviewsPage from '../pages/User_Reviews/User_Reviews';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/user/profile" replace />, // Redirect home to profile
  },
  {
    path: "/user",
    element: <UserPage />, // The "Parent"
    children: [
      {
        index: true, 
        element: <Navigate to="profile" replace /> 
      },
      {
        path: "profile",
        element: <div>Profile Page Component</div>,
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
    path: "*",
    element: <div>404 - Not Found</div>, // Catch-all route
  }
]);