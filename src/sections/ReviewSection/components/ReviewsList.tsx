import { patientReviews } from "@/mocks/patientReviews";

import Review from "./Review";

interface ReviewsListProps {
  listRef: React.RefObject<HTMLUListElement | null>;
}

export default function ReviewsList({ listRef }: ReviewsListProps) {
  return (
    <ul
      aria-label="Lista de avaliações reais retiradas do Google"
      ref={listRef}
      className="flex overflow-hidden gap-8 py-4 px-[12%] md:px-7 mask-x-from-96%"
    >
      {patientReviews.map(
        ({ avatar, review, name, quantityOfStars }, index) => (
          <Review
            key={index}
            avatar={avatar}
            review={review}
            name={name}
            quantityOfStars={quantityOfStars}
          />
        )
      )}
    </ul>
  );
}
