import Star from './Star';
// import useStarRating from '@/hooks/useStarRating';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AddReviews = ({ newReview, setNewReviews, handleNewComment }) => {
  const [reviewText, setReviewText] = useState('');
  const [error, setError] = useState('');
  const stars = Array(5).fill(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState();

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handelMouseHover = (value) => {
    setHoverValue(value);
  };

  const handelMouseLeave = () => {
    setHoverValue(undefined);
  };

  const handleReviewTextChange = (event) => {
    setError(false);
    setReviewText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (reviewText === '') {
      setError(true);
    } else {
      handleNewComment([currentValue, reviewText]);
      axios
        .post('http://localhost:8080/review/2/user', {
          rating: currentValue,
          reviewText: reviewText,
        })
        .then((response) => console.log(response.data))
        .catch((error) => console.error(error));

      setReviewText('');
      setCurrentValue(0);
    }
  };
  return (
    <div>
      <p className="text-xl">Add Review</p>
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="cursor-pointer my-3">
            {stars.map((_, index) => {
              return (
                <FontAwesomeIcon
                  key={index}
                  icon={faStar}
                  size="xl"
                  color={
                    (hoverValue || currentValue) > index ? '#FFD700' : '#A9A9A9'
                  }
                  onClick={() => handleClick(index + 1)}
                  onMouseOver={() => handelMouseHover(index + 1)}
                  onMouseLeave={handelMouseLeave}
                />
              );
            })}
          </div>
          {error && <p className="text-red-400 font-bold">enter text</p>}
          <textarea
            className="border border-gray-400 rounded-lg p-2"
            value={reviewText}
            onChange={handleReviewTextChange}
          ></textarea>
          <button className="bg-blue-500 text-white font-bold py-2 px-2 rounded-lg mt-2 ">
            Post Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddReviews;
