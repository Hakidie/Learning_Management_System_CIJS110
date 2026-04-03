import './CourseInfoTab.css';

import { useState } from 'react';
import DescriptionTab from './CourseInfoDescription/CourseInforDescription'
import InstructorTab from './CourseInfoIntructor/CourseInfoInstructor'

const CourseInfoTab = ({ courseData, teacherData }) => {
  const [activeTab, setActiveTab] = useState('description');

  const renderContent = () => {
    switch (activeTab) {
      case 'description': return <DescriptionTab courseData={courseData}/>;
      case 'instructor': return <InstructorTab teacherData={teacherData}/>;
      case 'syllabus': return <p>Syllabus details here...</p>;
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
        <button onClick={() => setActiveTab('reviews')}>Reviews</button>
      </div>

      <div className="course-info-tab-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default CourseInfoTab;