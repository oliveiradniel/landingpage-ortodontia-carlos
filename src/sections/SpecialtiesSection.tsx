import clsx from "clsx";

import { specialties } from "../mocks/specialties";

import {
  doubleUnderline,
  h2BottomUnderline,
} from "../assets/styles/underlines";

export default function SpecialtiesSection() {
  return (
    <section
      role="region"
      aria-labelledby="specialties"
      className="my-4 flex flex-col justify-center items-center"
    >
      <h2
        id="specialties"
        className={clsx(
          "relative text-center text-xl md:text-2xl font-bold text-ocean-blue",
          h2BottomUnderline
        )}
      >
        Especialidades para o seu sorriso
      </h2>

      <ul
        aria-label="Lista de Especialidades"
        tabIndex={0}
        className="mt-14 flex flex-row gap-4 max-w-[1000px] h-[320px] md:h-full overflow-y-auto md:justify-center flex-wrap"
      >
        {specialties.map(({ icon, title, description }, index) => (
          <li
            key={index}
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
        ))}
      </ul>
    </section>
  );
}
