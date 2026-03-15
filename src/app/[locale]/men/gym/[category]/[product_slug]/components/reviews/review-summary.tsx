import ClientRating from "@/app/[locale]/components/client-rating";
import { Sparkles } from "lucide-react";

const ReviewSummary = () => {
  return (
    <>
      <div className="flex gap-2">
        <span className="caption-1 font-extrabold">REVIEWS</span>
        <span className="body-2 font-semibold pl-px">4.6</span>
        <ClientRating rating={4.5} size={16} />
        <span className="body-2 font-medium">(600)</span>
      </div>
      <div className="flex flex-col bg-muted p-4 rounded-lg gap-2 mt-4">
        <div className="flex gap-1">
          <Sparkles className="size-4" />
          <span className="body-5 font-extrabold">
            What Customers are Saying
          </span>
        </div>
        <p className="body-5">
          These pants offer a comfortable and true-to-size slim fit with a great
          look and feel. They are noted for their good quality and feature a
          beautiful, vibrant camouflage color. The pants also include awesome,
          multiple pockets and well-liked zippers.
        </p>
      </div>
    </>
  );
};

export default ReviewSummary;
