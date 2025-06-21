import clsx from "clsx";

import { h2BottomUnderline } from "@/assets/styles/underlines";

export default function Title() {
  return (
    <h2
      id="specialties"
      className={clsx(
        "relative text-center text-2xl md:text-3xl font-bold text-ocean-blue",
        h2BottomUnderline
      )}
    >
      Especialidades para o seu sorriso
    </h2>
  );
}
