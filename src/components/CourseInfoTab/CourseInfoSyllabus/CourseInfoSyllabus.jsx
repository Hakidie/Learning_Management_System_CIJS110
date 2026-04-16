import './CourseInfoSyllabus.css';

import { useState } from 'react';

import downArrowIcon from '../../../assets/Icons/down-arrow.svg';

const Chapter = ({ chapter }) => {
  const [isExpand, setIsExpand] = useState(false);

  return (
    <div className='course-chapter-container'>
      <div className='course-chapter-name'>
        <button onClick={() => setIsExpand(!isExpand)}>
          <img
            src={downArrowIcon}
            alt='down arrow icon'
            style={{
              transform: isExpand ? 'rotate(0deg)' : 'rotate(-180deg)',
              transition: 'transform 0.2s ease'
            }}
          />
        </button>
        <h3>{chapter.chapterTitle}</h3>
      </div>

      {isExpand && (
        <div className='course-lesson'>
          {chapter.lessons.map((lesson, lessonIndex) => (
            <button key={lessonIndex}>
              {lesson.lessonTitle}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const CourseInfoSyllabus = ({ courseData }) => {
  // const [isExpand, setIsExpand] = useState(false);

  const toggleChapter = () => {
    setIsExpand(!isExpand);
  };

  return (
    <div className='course-info-syllabus-container'>
      <div className='course-syllabus-title'>
        <h3>Syllabus</h3>
      </div>

      <div className="course-syllabus">
        {courseData.chapters.map((chapter, index) => (
          <Chapter key={index} chapter={chapter} />
        ))}
      </div>
    </div>
  );
};

export default CourseInfoSyllabus;