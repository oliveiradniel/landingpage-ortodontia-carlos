import clsx from "clsx";

import { meansOfContact } from "@/mocks/meansOfContact";

interface ContactButtonsGroupProps {
  device: "small" | "large";
}

export default function ContactButtonsGroup({
  device,
}: ContactButtonsGroupProps) {
  return (
    <div
      role="group"
      aria-label="Canais de contato"
      className={clsx(
        "w-full items-center gap-2",
        device === "small"
          ? "flex flex-col sm:flex-row md:hidden"
          : "flex-col hidden md:flex lg:flex-row"
      )}
    >
      {meansOfContact.map(({ Icon, means }) => (
        <button
          aria-label="Falar com a clínica pelo WhatsApp"
          type="button"
          className="flex items-center justify-center bg-steel-blue text-white gap-2 px-4 rounded-lg py-4 w-full md:max-w-[400px] cursor-pointer transition-all duration-300 ease-in-out hover:bg-steel-blue/94 hover:scale-101"
        >
          <Icon aria-hidden="true" size={22} />
          {means}
        </button>
      ))}
    </div>
  );
}
