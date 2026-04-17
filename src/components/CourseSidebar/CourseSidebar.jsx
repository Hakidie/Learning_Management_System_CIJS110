import './CourseSidebar.css';

import SocialMediaIcon from '../../assets/Pictures/social_media_2.svg';
import fallbackImage from '../../assets/Pictures/courses/default.svg';
import { useAuth } from '../../hooks/useAuth';
import useBuyCourse from '../../hooks/useBuyCourse';
import { getApiUrl } from '../../config/api';


const CourseSidebar = ({ courseData, viewType }) => {
  const { user, login } = useAuth();
  const { buyCourse, loading } = useBuyCourse();

  const handleBuyNow = async () => {
    if (!user) {
      alert('Please login to buy courses');
      return;
    }

    try {
      const updatedUser = await buyCourse(user.id, courseData.id);
      
      // Update AuthContext with the new user data that includes the bought course
      login(updatedUser);
      
      alert('Course purchased successfully!');
    } catch (err) {
      alert(err.message || 'Failed to purchase course');
    }
  };
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
                <button className='buy-now-button' onClick={handleBuyNow} disabled={loading}>
                  {loading ? 'Processing...' : 'Buy Now'}
                </button>
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