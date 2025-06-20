import DrCarlosImage from "./components/DrCarlosImage";
import HatTitle from "./components/HatTitle";
import Title from "./components/Title";
import DescriptionParagraph from "./components/DescriptionParagraphs";
import ServiceInformationLargeView from "./components/ServiceInformationLargeView";
import ServiceInformationSmallView from "./components/ServiceInformationSmallView";

export default function AboutMeSection() {
  return (
    <section role="region" aria-labelledby="about-me">
      <div className="w-full h-[0.3px] bg-gray-400/40" />

      <div className="flex flex-col items-center mt-8 md:items-start gap-6 md:flex-row md:justify-evenly">
        <DrCarlosImage />

        <div className="flex flex-col items-center gap-2 md:items-start md:max-w-[600px]">
          <HatTitle />
          <Title />

          <div className="mt-6 flex flex-col gap-3">
            <DescriptionParagraph />
          </div>

          <ServiceInformationLargeView />
        </div>
      </div>

      <ServiceInformationSmallView />
    </section>
  );
}
