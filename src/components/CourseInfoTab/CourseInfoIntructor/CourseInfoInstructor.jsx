import './CourseInfoInstructor.css';

import reviewIcon from '../../../assets/Icons/award.svg';
import studentIcon from '../../../assets/Icons/graduation-hat.svg';
import courseIcon from '../../../assets/Icons/play.svg';

const CourseInfoInstructor = ({ teacherData }) => {
  return (
    <div className='course-info-instructor-container'>
      <div className='course-instructor'>
        <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#0F172A' }}>
          Instructor
        </h3>

        <div className='course-instructor-name'>
          <h3>{teacherData?.name || "Ronal Richards"}</h3>
          <p>{teacherData?.role || "UI/UX Designer"}</p>
        </div>

        <div className='course-instructor-profile'>
          <img src={teacherData?.img} alt='teacher profile image' />

          <div style={{display:'flex', flexDirection:'column', justifyContent:'flex-start', gap:'8px'}}>
            <div className='instructor-profile-line'>
              <img src={reviewIcon} alt='total review icon' />
              <p>{teacherData?.totalReviews || 4000} Reviews</p>
            </div>

            <div className='instructor-profile-line'>
              <img src={studentIcon} alt='total review icon' />
              <p>{teacherData?.totalStudents || 500} Students</p>
            </div>
            
            <div className='instructor-profile-line'>
              <img src={courseIcon} alt='total review icon' />
              <p>{teacherData?.totalCourse || 20} Courses</p>
            </div>
          </div>
        </div>

        <div>
          <p style={{ fontSize: '16px', color: '#334155' }}>
            {teacherData?.introduction || "Introduction here..."}
          </p>
        </div>

      </div>
    </div>
  );
};

export default CourseInfoInstructor;