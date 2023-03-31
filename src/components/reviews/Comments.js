import Star from './Star';

const Comments = ({ reviews }) => {
  return (
    <>
      <div className="mt-24 flex flex-col gap-5 overflow-auto max-h-96 scrollbar-thumb-blue-500 scrollbar-track-gray-100 scrollbar-thin">
        <h1 className="font-semibold text-3xl">Comments</h1>
        {reviews.map((review) => (
          <div key={review.id} className="bg-[#faf0e6] rounded-md">
            <p className="text-xl font-[500]">{review.userName}</p>
            <Star rating={review.rating} />
            <p className="italic text-gray-600 ">{review.reviewText}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Comments;
