import { createBrowserRouter, Navigate } from 'react-router-dom';

import HomePage from '../pages/Homepage/Homepage';
import LoginPage from '../pages/Login/Login';
import RegisterPage from '../pages/Register/Register';
import UserPage from '../pages/User/User';
import UserProfilePage from '../pages/User_Profile/UserProfile';
import UserCoursesPage from '../pages/User_Courses/User_Courses';
import UserTeachersPage from '../pages/User_Teacher/User_Teacher';
import UserMessagesPage from '../pages/User_Messages/User_Messages';
import UserReviewsPage from '../pages/User_Reviews/User_Reviews';
import CategoriesPage from '../pages/Categories/Categories';
import CourseInfoPage from '../pages/CourseInfo/CourseInfo';
import { ProtectedRoute } from '../components/ProtectedRoute';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
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
    element: (
      <ProtectedRoute>
        <UserPage />
      </ProtectedRoute>
    ),
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
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  }
]);