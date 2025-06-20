import { useCallback } from "react";

interface UseScrollList {
  containerRef: React.RefObject<HTMLUListElement | null>;
  amount: number;
}

export default function useScrollList({ containerRef, amount }: UseScrollList) {
  const scrollLeft = useCallback(() => {
    if (containerRef?.current) {
      containerRef.current.scrollBy({ left: -amount, behavior: "smooth" });
    }
  }, [amount, containerRef]);

  const scrollRight = useCallback(() => {
    if (containerRef?.current) {
      containerRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  }, [amount, containerRef]);

  return { scrollLeft, scrollRight };
}
