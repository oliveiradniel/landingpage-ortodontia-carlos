import clsx from "clsx";

import { h2BottomUnderline } from "@/assets/styles/underlines";

export default function Title() {
  return (
    <h2
      id="location"
      className={clsx(
        "relative text-center text-2xl md:text-3xl font-bold text-ocean-blue",
        h2BottomUnderline
      )}
    >
      Conheça nossa clínica
    </h2>
  );
}
