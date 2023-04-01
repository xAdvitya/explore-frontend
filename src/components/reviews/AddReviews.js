import Star from './Star';
import useStarRating from '@/hooks/useStarRating';
import axios from 'axios';
import { useEffect, useState } from 'react';

const AddReviews = () => {
  const { currentValue } = useStarRating();
  const [reviewText, setReviewText] = useState('');

  const handleReviewTextChange = (event) => {
    setReviewText(event.target.value);
  };
  console.log('starrrrrrrrrrrrr0');
  console.log(currentValue);

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post('http://localhost:8080/review/2/user', {
        rating: currentValue,
        reviewText: reviewText,
      })
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <p className="text-xl">Add Review</p>
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <Star />
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
