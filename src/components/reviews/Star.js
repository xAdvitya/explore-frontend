import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useStarRating from '@/hooks/useStarRating';

const Star = () => {
  const {
    currentValue,
    hoverValue,
    handleStarClick,
    handleStarHover,
    handleStarLeave,
  } = useStarRating();

  return (
    <div>
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;

        return (
          <FontAwesomeIcon
            key={starValue}
            icon={faStar}
            size="xl"
            color={
              (hoverValue || currentValue) >= starValue ? '#FFD700' : '#A9A9A9'
            }
            onClick={() => handleStarClick(starValue)}
            onMouseEnter={() => handleStarHover(starValue)}
            onMouseLeave={handleStarLeave}
            style={{ cursor: 'pointer', margin: '0.25rem' }}
          />
        );
      })}
    </div>
  );
};

export default Star;
