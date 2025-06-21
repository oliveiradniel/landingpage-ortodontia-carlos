interface TooltipProps {
  message: string;
}

export default function Tooltip({ message }: TooltipProps) {
  return (
    <div className="absolute border border-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-s-full rounded-tr-full top-[-100%] shadow-[4px_6px_12px_0px_rgba(0,0,0,0.1)] bg-white text-black px-4 py-1 translate-x-[-85%]">
      <p className="whitespace-nowrap">{message}</p>
    </div>
  );
}
