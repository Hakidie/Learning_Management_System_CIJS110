import './StarRating.css';

import { Star, StarHalf } from 'lucide-react';

/**
 * @param {number} rating - The numerical rating (e.g., 4.5)
 * @param {number} maxStars - Optional: total stars to show (default 5)
 * @param {number} size - Optional: pixel size of icons (default 16)
 */
const StarRating = ({ rating, maxStars = 5, size = 16 }) => {
  // If no rating is provided, we can return null or 5 empty stars
  if (rating === undefined || rating === null) return null;

  const renderStars = () => {
    const stars = [];
    
    for (let i = 1; i <= maxStars; i++) {
      if (i <= Math.floor(rating)) {
        // Full Star
        stars.push(
          <Star key={i} size={size} fill="#ffc107" color="#ffc107" />
        );
      } else if (i === Math.ceil(rating) && rating % 1 >= 0.5) {
        // Half Star
        stars.push(
          <StarHalf key={i} size={size} fill="#ffc107" color="#ffc107" />
        );
      } else {
        // Empty Star
        stars.push(
          <Star key={i} size={size} color="#e4e5e9" />
        );
      }
    }
    
    return stars;
  };

  return (
    <div className="star-rating-container">
      {renderStars()}
    </div>
  );
};

export default StarRating;