import clsx from "clsx";

import { doubleUnderline } from "@/assets/styles/underlines";

import type { SpecialtyCardProps } from "@/@types/Specialties";

export default function SpecialtyCard({
  icon,
  title,
  description,
}: SpecialtyCardProps) {
  return (
    <li
      className={clsx(
        "relative flex flex-col items-center justify-center gap-2 py-4 md:max-w-[320px]",
        doubleUnderline
      )}
    >
      <img
        aria-hidden="true"
        src={icon}
        alt=""
        className="text-sky-blue h-[26px] w-[26px]"
      />

      <h3 className="text-lg text-center text-ocean-blue">{title}</h3>
      <p className="text-center">{description}</p>
    </li>
  );
}
