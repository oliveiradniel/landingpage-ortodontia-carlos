import TitleSection from "./TitleSection";

interface InformationSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export default function InformationSection({
  id,
  title,
  children,
}: InformationSectionProps) {
  return (
    <section
      aria-labelledby={id}
      className="flex flex-col md:min-w-[300px] items-center md:items-start gap-2"
    >
      <TitleSection id={id} label={title} />
      {children}
    </section>
  );
}
