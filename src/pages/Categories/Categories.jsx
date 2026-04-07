import './Categories.css';

import { useState, useEffect } from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import CategorySidebar from '../../components/CategorySidebar/CategorySidebar';
import SortButton from '../../components/SortButton/SortButton';
import FilterButton from '../../components/FilterButton/FilterButton';
import { processDataUtils } from '../../utils/toolbar';
import useResource from '../../hooks/getResources';
import CourseCard from '../../components/Course_Card_User/Course_Card_User';
// import Sidebar from '../../components/Sidebar/Sidebar';

function Categories() {
  const coursesData = useResource("courses");
  const [currentSort, setCurrentSort] = useState("Newest");
  const [currentFilter, setCurrentFilter] = useState("Filter");

  // Sort, filter and search processing 
  const displayedCourses = processDataUtils(coursesData, currentFilter, currentSort);

  return (
    <div className='categories-page-container'>
      <Header />

      <div className='categories-title'>
        <h2 >All Courses</h2>
      </div>

      <div className='categories-toolbar'>
        <FilterButton
          currentFilter={currentFilter}
          onFilterChange={setCurrentFilter}
        />
        <SortButton
          currentSort={currentSort}
          onSortChange={setCurrentSort}
        />
      </div>

      <div className='categories-content-container'>
        <CategorySidebar />

        <main className='categories-content'>
          {displayedCourses.map((item) => (
            <CourseCard key={item.id} course={item} viewType='default' />
          ))}
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default Categories;