import ClientRating from "@/app/[locale]/components/client-rating";
import { Button } from "@/components/ui/button";
import { ThumbsUp } from "lucide-react";
import { reviewsOptions } from "../product-gallery/constants";

const ReviewLists = () => {
  return (
    <>
      <div
        data-lenis-prevent
        className="max-h-150 h-full overflow-y-auto scroll-smooth secondary-scroll pr-2"
      >
        {reviewsOptions.map((review) => (
          <div
            key={review.id}
            className="flex gap-20 border-b first:border-t p-4"
          >
            <div className="flex flex-col gap-0.5 max-w-27 w-full">
              <ClientRating rating={review.rating} size={14} />
              <p className="body-7 font-semibold mt-0.5">{review.name}</p>
              <p className="body-8 text-accent-foreground">{review.date}</p>
            </div>
            <div className="flex flex-col gap-1.5 max-w-125 flex-1">
              <p className="body-6 uppercase font-extrabold">{review.title}</p>
              <p className="body-8">
                Size Ordered: <span className="font-medium">{review.size}</span>
              </p>
              <p className="body-8">{review.review}</p>
            </div>
            <Button
              variant="secondary"
              startIcon={<ThumbsUp />}
              className="rounded-full shadow-1 border-none h-fit"
            >
              Helpful <span>({review.helpful})</span>
            </Button>
          </div>
        ))}
      </div>
      <Button variant="secondary" className="w-full mt-8 h-12 rounded-full">
        Load More
      </Button>
    </>
  );
};

export default ReviewLists;
