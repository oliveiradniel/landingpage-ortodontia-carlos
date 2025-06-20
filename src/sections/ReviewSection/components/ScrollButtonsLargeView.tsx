import LeftButton from "./LeftButton";
import RightButton from "./RightButton";

interface ScrollButtonsLargeViewProps {
  scrollLeft: () => void;
  scrollRight: () => void;
}

export default function ScrollButtonsLargeView({
  scrollLeft,
  scrollRight,
}: ScrollButtonsLargeViewProps) {
  return (
    <div className="hidden md:inline-flex w-full text-steel-blue justify-between">
      <LeftButton onScroll={scrollLeft} />
      <RightButton onScroll={scrollRight} />
    </div>
  );
}
