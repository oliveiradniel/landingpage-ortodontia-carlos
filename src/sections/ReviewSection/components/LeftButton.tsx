import { FaArrowAltCircleLeft } from "react-icons/fa";

interface LeftButtonProps {
  onScroll: () => void;
}

export default function LeftButton({ onScroll }: LeftButtonProps) {
  return (
    <button
      aria-label="Ir até a avaliação anterior"
      className="cursor-pointer hover:opacity-90 duration-300 ease-in-out transition-opacity"
      onClick={onScroll}
    >
      <FaArrowAltCircleLeft aria-hidden="true" size={32} />
    </button>
  );
}
