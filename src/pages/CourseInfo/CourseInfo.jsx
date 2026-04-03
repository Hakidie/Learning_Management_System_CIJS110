import './CourseInfo.css';

import { useParams } from 'react-router-dom';
import { useState } from 'react';
import getResource from '../../hooks/getResources';
import GlobeIcon from '../../assets/Icons/globe-02.svg';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import CourseSidebar from '../../components/CourseSidebar/CourseSidebar';
import StarRating from '../../components/StarRating/StarRating';
import CourseInfoTab from '../../components/CourseInfoTab/CourseInfoTab';

const CourseInfo = ({ }) => {
  const coursesData = getResource("courses");
  const teachersData = getResource("teachers");

  const { id } = useParams();

  const course = coursesData.find(c => c.id.toString() === id.toString());

  // const teacher = teachersData && course
  //   ? teachersData.find(t =>
  //     t.name?.trim().toLowerCase() === course.instructor?.trim().toLowerCase()
  //   )
  //   : null;

  const teacher = teachersData?.find(t => t.name === course?.instructor);
  console.log(teacher);

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

            <CourseInfoTab courseData={course} teacherData={teacher} />
          </div>
        </div>

        <CourseSidebar courseData={course} viewType={'default'} />
      </div>

      <Footer />
    </div>
  );
};

export default CourseInfo;