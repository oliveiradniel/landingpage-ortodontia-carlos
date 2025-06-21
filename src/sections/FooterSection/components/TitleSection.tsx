interface TitleSectionProps {
  id: string;
  label: string;
}

export default function TitleSection({ id, label }: TitleSectionProps) {
  return (
    <h2 id={id} className="text-lg font-medium">
      {label}
    </h2>
  );
}
