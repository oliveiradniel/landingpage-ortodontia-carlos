import LeftButton from "./LeftButton";
import RightButton from "./RightButton";

interface ScrollButtonsSmallViewProps {
  scrollLeft: () => void;
  scrollRight: () => void;
}

export default function ScrollButtonsSmallView({
  scrollLeft,
  scrollRight,
}: ScrollButtonsSmallViewProps) {
  return (
    <div className="absolute mt-[20%] md:hidden w-full flex justify-between text-steel-blue z-10">
      <LeftButton onScroll={scrollLeft} />
      <RightButton onScroll={scrollRight} />
    </div>
  );
}
