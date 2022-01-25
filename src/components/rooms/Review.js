const Review = ({ review }) => {
  return (
    <>
      <div className="w-[85%]">
        <div className="flex">
          <div className="rounded-full">
            <img
              src={review.profile}
              className="w-12 h-12 mr-4 rounded-full"
              alt="img"
            />
          </div>
          <div className="mb-4">
            <div className="font-semibold">{review.name}</div>
            <div className="text-sm text-gray-400">{review.date}</div>
          </div>
        </div>
        <div className="리뷰 내용">{review.review}</div>
      </div>
    </>
  );
};

export default Review;
