import './CourseSidebar.css';

import SocialMediaIcon from '../../assets/Pictures/social_media_2.svg';
import fallbackImage from '../../assets/Pictures/courses/default.svg';


const CourseSidebar = ({ courseData, viewType }) => {
  return (
    <div className='course-sidebar-container'>
      <div className='course-sidebar-frame'>
        {viewType === 'default' && (
          <div className='course-sidebar-shopping'>
            <div className='course-sidebar-buy-container'>
              <div style={{display:'flex', flexDirection:'column', gap:'32px', padding:'24px 22px 0px 22px'}}>
                <img src={courseData?.img || fallbackImage} alt='Course picture' onError={(e) => { e.target.src = fallbackImage; }} />
                <p>${courseData?.price}</p>
              </div>
              
              <div style={{display:'flex', flexDirection:'column', gap:'16px', padding:'0px 22px 28px 22px'}}>
                <button className='add-to-cart-button'>Add To Cart</button>
                <button className='buy-now-button'>Buy Now</button>
              </div>
            </div>

            <div className='course-sidebar-share-container'>
              <p>Share</p>
              <img src={SocialMediaIcon} alt='Soical media' />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseSidebar;