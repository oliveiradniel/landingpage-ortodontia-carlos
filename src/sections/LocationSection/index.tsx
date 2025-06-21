import ArrowToButton from "@/components/ArrowToButton";
import Title from "./components/Title";
import AddressSection from "./components/AddressSection";
import TimetableSection from "./components/TimetableSection";
import VerticalLine from "./components/VerticalLine";
import ContactButtonsGroup from "./components/ContactButtonsGroup";
import GoogleMap from "./components/GoogleMap";

export default function LocationSection() {
  return (
    <section
      role="region"
      aria-labelledby="location"
      className="flex flex-col items-center mt-8 gap-8"
    >
      <ArrowToButton />

      <Title />

      <div className="w-full flex-col md:flex-row md:justify-center flex gap-4">
        <div className="flex flex-col md:min-w-[300px] md:justify-between lg:min-w-[500px] gap-4">
          <div className="flex flex-col sm:flex-row md:flex-col sm:justify-evenly gap-4">
            <AddressSection />

            <VerticalLine />

            <TimetableSection />
          </div>

          <ContactButtonsGroup device="large" />
        </div>

        <GoogleMap />
      </div>

      <ContactButtonsGroup device="small" />
    </section>
  );
}
