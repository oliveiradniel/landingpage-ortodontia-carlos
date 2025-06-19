import type { HighlightCardProps } from "../../../@types/HighlightItem";

export default function HighlightCard({ Icon, text }: HighlightCardProps) {
  return (
    <div className="flex gap-4 text-[14px] items-center">
      <Icon aria-hidden="true" size={42} color="#87ceeb" />
      <p className="flex-1 md:max-w-[280px]">{text}</p>
    </div>
  );
}
