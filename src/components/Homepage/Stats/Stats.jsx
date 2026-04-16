import './Stats.css';

import verticalLine from '../../../assets/Icons/vertical_line.svg';

function Stats() {
  return (
    <div className='stats-container'>
      <div className="stat-box">
        <h2>250+</h2>
        <p>Courses by our best mentors</p>
      </div>

      <div className="line">
        <img src={verticalLine} alt="line" />
      </div>

      <div className="stat-box">
        <h2>1000+</h2>
        <p>Courses by our best mentors</p>
      </div>

      <div className="line">
        <img src={verticalLine} alt="line" />
      </div>

      <div className="stat-box">
        <h2>15+</h2>
        <p>Courses by our best mentors</p>
      </div>

      <div className="line">
        <img src={verticalLine} alt="line" />
      </div>

      <div className="stat-box">
        <h2>2400+</h2>
        <p>Courses by our best mentors</p>
      </div>
    </div>
  );
}

export default Stats;