import './CourseInfoTab.css';

import { useState } from 'react';
import DescriptionTab from './CourseInfoDescription/CourseInforDescription';
import InstructorTab from './CourseInfoIntructor/CourseInfoInstructor';
import SyllabusTab from './CourseInfoSyllabus/CourseInfoSyllabus';

const CourseInfoTab = ({ courseData, teacherData }) => {
  const [activeTab, setActiveTab] = useState('description');

  const renderContent = () => {
    switch (activeTab) {
      case 'description': return <DescriptionTab courseData={courseData}/>;
      case 'instructor': return <InstructorTab teacherData={teacherData}/>;
      case 'syllabus': return <SyllabusTab courseData={courseData}/>;
      case 'reviews': return <p>User reviews here...</p>;
      default: return null;
    }
  };

  return (
    <div className='course-info-tab-container'>
      <div className='course-info-buttons-container'>
        <button onClick={() => setActiveTab('description')}>Description</button>
        <button onClick={() => setActiveTab('instructor')}>Instructor</button>
        <button onClick={() => setActiveTab('syllabus')}>Syllabus</button>
        {/* <button onClick={() => setActiveTab('reviews')}>Reviews</button> */}
      </div>

      <div className="course-info-tab-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default CourseInfoTab;