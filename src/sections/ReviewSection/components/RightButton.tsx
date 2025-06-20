import { FaArrowAltCircleRight } from "react-icons/fa";

interface RightButtonProps {
  onScroll: () => void;
}

export default function RightButton({ onScroll }: RightButtonProps) {
  return (
    <button
      aria-label="Ir até a avaliação posterior"
      className="cursor-pointer hover:opacity-90 duration-300 ease-in-out transition-opacity"
      onClick={onScroll}
    >
      <FaArrowAltCircleRight aria-hidden="true" size={32} />
    </button>
  );
}
