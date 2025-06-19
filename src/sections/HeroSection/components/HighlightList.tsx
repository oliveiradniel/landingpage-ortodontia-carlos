import { heroHighlights } from "../../../mocks/heroHighlights";

import HighlightCard from "./HighlightCard";

export default function HighlightList() {
  return (
    <div className="border border-x-0 py-4 flex border-sky-blue flex-col gap-6 md:gap-3 shadow-[0_4px_6px_-4px_rgba(0,0,0,0.3)] md:flex-row">
      {heroHighlights.map(({ Icon, text }, index) => (
        <HighlightCard key={index} Icon={Icon} text={text} />
      ))}
    </div>
  );
}
