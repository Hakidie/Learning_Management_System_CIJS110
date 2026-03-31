import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';

import UserPage from './pages/User/User';
import UserCoursesPage from './pages/User_Courses/User_Courses';
import UserTeachersPage from './pages/User_Teacher/User_Teacher';
import UserMessagesPage from './pages/User_Messages/User_Messages';
import UserReviewsPage from './pages/User_Reviews/User_Reviews';

function App() {
  return (
    <>
      <Routes>
        <Route path="/user" element={<UserPage />}>
          {/* These components will appear inside the <Outlet /> */}
          <Route index element={<div>Profile</div>} />
          <Route path="profile" element={<div>Profile</div>} />
          <Route path="my_courses" element={<UserCoursesPage />} />
          <Route path="my_teachers" element={<UserTeachersPage />} />
          <Route path="my_messages" element={<UserMessagesPage />} />
          <Route path="my_reviews" element={<UserReviewsPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
