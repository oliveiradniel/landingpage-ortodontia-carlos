import { socialMedia } from "@/mocks/socialMedia";

import TitleSection from "./TitleSection";

export default function SocialMediaSection() {
  return (
    <section
      aria-labelledby="social-media"
      className="flex flex-col items-center md:items-start gap-4 lg:min-w-[300px]"
    >
      <TitleSection id="social-media" label="Siga-nos nas redes sociais" />

      <div
        role="group"
        aria-label="Acompanhe-nos nas redes sociais"
        className="flex gap-2 items-center justify-evenly"
      >
        {socialMedia.map(({ Icon, href }) => (
          <a
            aria-label="Visite nosso Instagram"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            lang="pt-BR"
            className="text-steel-blue hover:text-steel-blue/90 transition-all duration-300 ease-in-out cursor-pointer hover:scale-102"
          >
            <Icon size={32} />
          </a>
        ))}
      </div>
    </section>
  );
}
