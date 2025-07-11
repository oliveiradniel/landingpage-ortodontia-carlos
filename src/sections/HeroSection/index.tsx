import Logo from "@/components/Logo";
import CTAButton from "@/components/CTAButton";
import ArrowToButton from "@/components/ArrowToButton";

import HighlightList from "./components/HighlightList";
import Title from "./components/Title";
import MobileDescription from "./components/MobileDescription";
import DesktopDescription from "./components/DesktopDescription";
import DoctorImage from "./components/DoctorImage";

export default function HeroSection() {
  return (
    <section
      role="region"
      aria-labelledby="hero-section"
      className="flex flex-col items-center gap-6 sm:gap-0"
    >
      <div className="flex flex-col gap-4 sm:flex-row items-center sm:items-end">
        <div className="flex flex-col gap-6 items-center sm:items-start w-full sm:max-w-[400px] md:max-w-[500px]">
          <Logo />

          <Title />

          <DesktopDescription />
          <div className="w-full mb-4">
            <CTAButton />
          </div>
        </div>

        <DoctorImage />
      </div>

      <MobileDescription />

      <HighlightList />

      <ArrowToButton />
    </section>
  );
}
