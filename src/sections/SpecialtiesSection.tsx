import clsx from "clsx";

import { specialties } from "../mocks/specialties";

export default function SpecialtiesSection() {
  const h2BottomUnderline =
    "after:absolute after:w-[40%] after:h-[1.4px] after:bg-ocean-blue after:left-1/2 after:-translate-x-1/2 after:right-0 after:bottom-[-8px] after:mask-[linear-gradient(to_right,transparent,black_40%,black_60%,transparent)]";

  const specialtieCardTopUnderline =
    "before:absolute before:w-full before:h-[1.4px] before:bg-ocean-blue before:left-1/2 before:-translate-x-1/2 before:right-0 before:top-0 before:mask-[linear-gradient(to_right,transparent,black_40%,black_60%,transparent)]";

  const specialtieCardBottomUnderline =
    "after:absolute after:w-full after:h-[2px] after:bg-ocean-blue after:left-1/2 after:-translate-x-1/2 after:right-0 after:bottom-0 after:mask-[linear-gradient(to_right,transparent,black_40%,black_60%,transparent)]";

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
              specialtieCardTopUnderline,
              specialtieCardBottomUnderline
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
