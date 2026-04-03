import './CourseInfoDescription.css';


const CourseInfoDescription = ({ courseData }) => {
  return (
    <div className='course-info-description-container'>
      <div className='course-description'>
        <h3>Course Description</h3>
        <p>{courseData?.description || "Course description here..."}</p>
      </div>

      <div className="course-certification">
        <h3>Certification</h3>
        <p>{courseData?.certification || "Course certification here..."}</p>
      </div>
    </div>
  );
};

export default CourseInfoDescription;