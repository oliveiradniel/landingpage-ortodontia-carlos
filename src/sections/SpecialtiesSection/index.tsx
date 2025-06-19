import Title from "./components/Title";
import SpecialtiesList from "./components/SpecialtiesList";
import CTA from "./components/CTA";

export default function SpecialtiesSection() {
  return (
    <section
      role="region"
      aria-labelledby="specialties"
      className="my-4 flex flex-col justify-center items-center"
    >
      <Title />

      <SpecialtiesList />

      <CTA />
    </section>
  );
}
