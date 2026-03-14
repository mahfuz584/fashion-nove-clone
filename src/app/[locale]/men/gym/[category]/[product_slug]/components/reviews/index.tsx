import ReviewFilter from "./review-filter";
import ReviewLists from "./review-lists";
import ReviewSummary from "./review-summary";

const Reviews = () => {
  return (
    <div className="col-span-8">
      <ReviewSummary />
      <ReviewFilter />
      <ReviewLists />
    </div>
  );
};

export default Reviews;
