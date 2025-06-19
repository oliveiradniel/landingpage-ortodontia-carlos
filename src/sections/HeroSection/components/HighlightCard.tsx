import type { HighlightCardProps } from "@/@types/HighlightItem";

export default function HighlightCard({ Icon, text }: HighlightCardProps) {
  return (
    <div className="flex gap-3 text-[14px] items-center min-w-max">
      <Icon aria-hidden="true" size={38} color="#87ceeb" />
      <p className="flex-1 max-w-[280px]">{text}</p>
    </div>
  );
}
