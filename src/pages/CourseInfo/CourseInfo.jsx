import './CourseInfo.css';

import { useParams } from 'react-router-dom';
import { useState } from 'react';
import getResource from '../../hooks/getResources';
import GlobeIcon from '../../assets/Icons/globe-02.svg';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import CourseSidebar from '../../components/CourseSidebar/CourseSidebar';
import StarRating from '../../components/StarRating/StarRating';

const CourseInfo = ({ }) => {
  const coursesData = getResource("courses");

  const { id } = useParams();

  const course = coursesData.find(c => c.id.toString() === id.toString());

  const [activeTab, setActiveTab] = useState('description');
  const renderContent = () => {
    switch (activeTab) {
      case 'description': return <p>{course?.description}</p>;
      case 'instructor': return <p>Instructor: {course?.instructor}</p>;
      case 'syllabus': return <p>Syllabus details here...</p>;
      case 'reviews': return <p>User reviews here...</p>;
      default: return null;
    }
  };

  return (
    <div className='course-info-page-container'>
      <Header />

      <div className='course-info-container'>
        <div className='course-info'>

          <div className='course-info-frame'>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '17px' }}>
              <h2 className='course-info-title'>{course?.title}</h2>
              <p className='course-info-description'>{course?.description || "Description."}</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '4px' }}>
                <p style={{ fontSize: '16px', color: '#FEC84B' }}>{course?.rating}</p>
                <StarRating rating={course?.rating} />
                <p style={{ fontSize: '14px', color: '#334155' }}>({course?.totalRatings} rating)</p>

              </div>
              <div>
                <p style={{ fontSize: '14px', color: '#334155' }}>
                  Created by <span style={{ fontSize: '14px', color: '#2563EB' }}>{course?.instructor}</span>
                </p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '12px' }}>
                <img src={GlobeIcon} alt='Language icon' />
                <p style={{ fontSize: '14px', color: '#334155' }}>English</p>
              </div>
            </div>

            <div className='course-info-buttons-container'>
              <button onClick={() => setActiveTab('description')}>Description</button>
              <button onClick={() => setActiveTab('instructor')}>Instructor</button>
              <button onClick={() => setActiveTab('syllabus')}>Syllabus</button>
              <button onClick={() => setActiveTab('reviews')}>Reviews</button>
            </div>

            <div className="course-tab-content">
              {renderContent()}
            </div>
          </div>
        </div>

        <CourseSidebar courseData={course} viewType={'default'} />
      </div>

      <Footer />
    </div>
  );
};

export default CourseInfo;