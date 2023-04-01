import AddComments from './AddReviews';
import Star from './ShowStars';

const Comments = ({ reviews }) => {
  return (
    <>
      <div className="mt-8 flex flex-col ">
        <AddComments />
        <div className="mt-10 flex flex-col gap-5 overflow-auto max-h-96 ">
          <h1 className="font-semibold text-3xl">Comments</h1>
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-[#faf0e6] rounded-md hover:drop-shadow-xl"
            >
              <p className="text-xl font-[500]">{review.userName}</p>
              <Star rating={review.rating} />
              <p className="italic text-gray-600 ">{review.reviewText}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Comments;
