import { heroHighlights } from "../../../mocks/heroHighlights";

import HighlightCard from "./HighlightCard";

export default function HighlightList() {
  return (
    <div className="border border-x-0 py-4 flex gap-4 border-sky-blue shadow-[0_4px_6px_-4px_rgba(0,0,0,0.3)] overflow-hidden max-w-[900px] mask-x-from-90%">
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className="flex md:flex-nowrap animate-infinite-horizontal-scroll gap-4"
        >
          {heroHighlights.map(({ Icon, text }, index) => (
            <HighlightCard key={index} Icon={Icon} text={text} />
          ))}
        </div>
      ))}
    </div>
  );
}
