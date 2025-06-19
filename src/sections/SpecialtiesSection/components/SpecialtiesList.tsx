import { specialties } from "@/mocks/specialties";

import SpecialtyCard from "./SpecialtyCard";

export default function SpecialtiesList() {
  return (
    <ul
      aria-label="Lista de Especialidades"
      tabIndex={0}
      className="mt-14 flex flex-row gap-4 max-w-[1000px] h-[320px] md:h-full overflow-y-auto md:justify-center flex-wrap"
    >
      {specialties.map(({ icon, title, description }, index) => (
        <SpecialtyCard
          key={index}
          icon={icon}
          title={title}
          description={description}
        />
      ))}
    </ul>
  );
}
