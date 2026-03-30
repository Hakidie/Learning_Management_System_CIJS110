import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';

import UserPage from './pages/User/User';
import UserCoursesPage from './pages/User_Courses/User_Courses';

function App() {
  return (
    <>
      <Routes>
        <Route path="/user" element={<UserPage />}>
          {/* These components will appear inside the <Outlet /> */}
          <Route index element={<div>Profile</div>} />
          <Route path="profile" element={<div>Profile</div>} />
          <Route path="my_courses" element={<UserCoursesPage />} />
          <Route path="my_teachers" element={<div>My Teachers</div>} />
          <Route path="my_messages" element={<div>My Messages</div>} />
          <Route path="my_reviews" element={<div>My Reviews</div>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
