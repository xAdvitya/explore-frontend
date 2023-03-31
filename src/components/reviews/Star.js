import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Star = ({ rating }) => {
  const MAX_STARS = 5;

  function getStars(rating) {
    const roundedRating = Math.round(rating * 2) / 2;
    const fullStars = Math.floor(roundedRating);
    const hasHalfStar = roundedRating - fullStars >= 0.5;
    const emptyStars = MAX_STARS - fullStars - (hasHalfStar ? 1 : 0);

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FontAwesomeIcon icon={faStar} color="#FFD700" />);
    }

    if (hasHalfStar) {
      stars.push(<FontAwesomeIcon icon={faStarHalfAlt} color="#FFD700" />);
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FontAwesomeIcon icon={faStar} color="#A9A9A9" />);
    }

    return stars;
  }

  return <p>{getStars(rating)}</p>;
};

export default Star;
