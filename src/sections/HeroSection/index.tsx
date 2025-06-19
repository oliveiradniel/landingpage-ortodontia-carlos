import { MdKeyboardDoubleArrowDown } from "react-icons/md";

import HighlightList from "./components/HighlightList";
import CTAButton from "./components/CTAButton";
import Title from "./components/Title";
import Logo from "./components/Logo";
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
      <div className="flex flex-col sm:flex-row items-center sm:items-end">
        <div className="flex flex-col gap-6 items-center sm:items-start w-full sm:max-w-[400px] md:max-w-[500px]">
          <Logo />

          <Title />

          <DesktopDescription />

          <CTAButton />
        </div>

        <DoctorImage />
      </div>

      <MobileDescription />

      <HighlightList />

      <MdKeyboardDoubleArrowDown
        aria-hidden="true"
        size={42}
        className="text-sky-blue animate-bounce sm:mt-6"
      />
    </section>
  );
}
