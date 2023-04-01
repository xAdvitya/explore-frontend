import { useRouter } from 'next/router';
import Navigation from '@/components/Navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '@/components/Card';
import Comments from '@/components/reviews/Comments';

const Spot = () => {
  const router = useRouter();
  const spotId = router.query.spotId;

  async function fetchSpot(spotId) {
    try {
      const response = await axios.get(`http://localhost:8080/spot/${spotId}`);
      const data = response.data;
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  const [spot, setSpot] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function getSpot() {
      if (spotId) {
        const data = await fetchSpot(spotId);
        setSpot(data);
        setComments(data.review);
      }
    }
    getSpot();
  });

  function handleNewComment(comment) {
    setComments([...comments, comment]);
  }

  return (
    <>
      <Navigation />
      <div className="mx-14 grid grid-cols-2 gap-8">
        {/* spot card */}
        {spot && <Card spot={spot} />}
        <>
          {spot && (
            <Comments
              reviews={spot.review}
              handleNewComment={handleNewComment}
            />
          )}
        </>
      </div>
    </>
  );
};

export default Spot;
