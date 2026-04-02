import './User_Courses.css';

import React, { useState, useEffect } from 'react';

import UserPageName from '../../components/User_Page_Name/User_Page_Name';
import Toolbar from '../../components/Toolbar/Toolbar';
import CourseCard from '../../components/Course_Card_User/Course_Card_User';

import getResource from '../../hooks/getResources';
import { processDataUtils } from '../../utils/toolbar';

function UserCourses() {
  const coursesData = getResource("courses");
  const [currentSort, setCurrentSort] = useState("Newest");
  const [currentFilter, setCurrentFilter] = useState("Filter");
  const [searchQuery, setSearchQuery] = useState("");

  // Sort, filter and search processing 
  const displayedCourses = processDataUtils(coursesData, currentFilter, currentSort, searchQuery);

  return (
    <div className='user-courses-container'>
      <UserPageName pageName={"Courses"} total={displayedCourses.length} />
      <Toolbar
        currentSort={currentSort}
        currentFilter={currentFilter}
        onSortChange={setCurrentSort}
        onFilterChange={setCurrentFilter}
        onSearch={setSearchQuery}
      />

      <div className='courses-container'>
        {displayedCourses.map((item) => (
          <CourseCard key={item.id} course={item} viewType='default'/>
        ))}
      </div>
    </div>
  );
}

export default UserCourses;