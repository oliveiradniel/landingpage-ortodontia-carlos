import Logo from "@/components/Logo";
import SocialMediaSection from "./components/SocialMediaSection";
import InformationSection from "./components/InformationSection";

export default function FooterSection() {
  return (
    <footer className="w-full bg-powder-blue/60 mt-8 p-2 pb-6 flex items-center gap-2 flex-col">
      <Logo />

      <div className="flex flex-col lg:flex-row w-full lg:justify-around items-center lg:h-[98px]">
        <div className="flex flex-col md:flex-row items-center md:h-[98px] gap-8">
          <InformationSection
            title="Responsável Técnico:"
            id="technical-manager"
          >
            <p>Dr. Carlos Alberto</p>
            <p>Cirurgião Dentista</p>
          </InformationSection>

          <InformationSection title="Contatos" id="contacts">
            <a href="tel:+5516991974578">+55 (16) 91234-5678</a>
            <a href="mailto:contato@clinicadrcarlosalberto.com.br">
              contato@clinicadrcarlosalberto.com.br
            </a>
          </InformationSection>
        </div>

        <SocialMediaSection />
      </div>

      <p className="text-center mt-12 font-light">
        Copyright © 2025 | Todos os direitos reservados
      </p>
    </footer>
  );
}
