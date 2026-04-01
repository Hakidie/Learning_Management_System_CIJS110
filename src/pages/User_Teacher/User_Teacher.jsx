import './User_Teacher.css';

import React, { useState, useEffect } from 'react';

import UserPageName from '../../components/User_Page_Name/User_Page_Name';
import Toolbar from '../../components/Toolbar/Toolbar';
import TeacherCard from '../../components/Teacher_Card_User/Teacher_Card_User';

import getResource from '../../hooks/getResources';
import { processDataUtils } from '../../utils/toolbar';

function UserTeacher() {
  const teachersData = getResource("teachers");
  const [currentSort, setCurrentSort] = useState("Newest");
  const [currentFilter, setCurrentFilter] = useState("Filter");
  const [searchQuery, setSearchQuery] = useState("");

  // Sort, filter and search processing 
  const displayedTeachers = processDataUtils(teachersData, currentFilter, currentSort, searchQuery);

  return (
    <div className='user-teacher-container'>
      <UserPageName pageName={"Teacher"} total={displayedTeachers.length} />
      <Toolbar
        currentSort={currentSort}
        currentFilter={currentFilter}
        onSortChange={setCurrentSort}
        onFilterChange={setCurrentFilter}
        onSearch={setSearchQuery}
      />

      <div className='teacher-container'>
        {displayedTeachers.map((item) => (
          <TeacherCard key={item.id} teacher={item} />
        ))}
      </div>
    </div>
  );
}

export default UserTeacher;