import { useRef } from "react";

import useScrollList from "@/app/hooks/useScrollList";

import Title from "./components/Title";
import IntroReviewText from "./components/IntroReviewText";
import ScrollButtonsLargeView from "./components/ScrollButtonsLargeView";
import ScrollButtonsSmallView from "./components/ScrollButtonsSmallView";
import ReviewsList from "./components/ReviewsList";

export default function ReviewSection() {
  const listRef = useRef<HTMLUListElement>(null);
  const SCROLL_AMOUNT = 320;

  const { scrollLeft, scrollRight } = useScrollList({
    containerRef: listRef,
    amount: SCROLL_AMOUNT,
  });

  return (
    <section
      role="region"
      aria-labelledby="review"
      className="flex flex-col mt-8 gap-4 md:flex-row md:justify-center overflow-hidden"
    >
      <div className="flex flex-col md:max-w-[570px] p-4 justify-between">
        <div className="flex flex-col gap-4">
          <Title />

          <IntroReviewText />
        </div>

        <ScrollButtonsLargeView
          scrollLeft={scrollLeft}
          scrollRight={scrollRight}
        />
      </div>

      <div className="relative flex flex-col gap-4 md:max-w-[570px]">
        <ScrollButtonsSmallView
          scrollLeft={scrollLeft}
          scrollRight={scrollRight}
        />

        <ReviewsList listRef={listRef} />
      </div>
    </section>
  );
}
