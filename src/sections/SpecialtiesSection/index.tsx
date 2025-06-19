import Title from "./components/Title";
import SpecialtiesList from "./components/SpecialtiesList";

export default function SpecialtiesSection() {
  return (
    <section
      role="region"
      aria-labelledby="specialties"
      className="my-4 flex flex-col justify-center items-center"
    >
      <Title />

      <SpecialtiesList />
    </section>
  );
}
