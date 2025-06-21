import { IoLogoFacebook, IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";

import Logo from "@/components/Logo";

export default function FooterSection() {
  return (
    <footer className="w-full bg-powder-blue/60 mt-8 p-2 pb-6 flex items-center gap-2 flex-col">
      <Logo />

      <div className="flex flex-col lg:flex-row items-center gap-8 lg:h-[98px]">
        <div className="flex flex-col md:flex-row items-center md:h-[98px] gap-8">
          <section
            aria-labelledby="technical-manager"
            className="flex flex-col md:min-w-[300px] items-center md:items-start gap-2"
          >
            <h2 id="technical-manager" className="text-lg font-medium">
              Responsável Técnico:
            </h2>
            <p>Dr. Carlos Alberto</p>
            <p>Cirurgião Dentista</p>
          </section>

          <section
            aria-labelledby="contacts"
            className="flex flex-col md:min-w-[300px] items-center md:items-start gap-2"
          >
            <h2 id="contacts" className="text-lg font-medium">
              Contatos
            </h2>
            <a href="tel:+5516991974578">+55 (16) 91234-5678</a>
            <a href="mailto:contato@clinicadrcarlosalberto.com.br">
              contato@clinicadrcarlosalberto.com.br
            </a>
          </section>
        </div>

        <section
          aria-labelledby="social-media"
          className="flex flex-col items-center md:items-start gap-4 lg:min-w-[300px]"
        >
          <h2 id="social-media" className="text-lg font-medium">
            Siga-nos nas redes sociais
          </h2>
          <div
            role="group"
            aria-label="Acompanhe-nos nas redes sociais"
            className="flex gap-2 items-center justify-evenly"
          >
            <a
              aria-label="Visite nosso Instagram"
              href="https://instagram.com/seuperfil"
              target="_blank"
              rel="noopener noreferrer"
              lang="pt-BR"
              className="text-steel-blue hover:text-steel-blue/90 transition-all duration-300 ease-in-out cursor-pointer hover:scale-102"
            >
              <RiInstagramFill size={32} />
            </a>
            <a
              aria-label="Fale conosco pelo WhatsApp"
              href="https://wa.me/5516912345678"
              target="_blank"
              rel="noopener noreferrer"
              lang="pt-BR"
              className="text-steel-blue hover:text-steel-blue/90 transition-all duration-300 ease-in-out cursor-pointer hover:scale-102"
            >
              <IoLogoWhatsapp size={32} />
            </a>
            <a
              aria-label="Visite nosso Facebook"
              href="https://facebook.com/seuperfil"
              target="_blank"
              rel="noopener noreferrer"
              lang="pt-BR"
              className="text-steel-blue hover:text-steel-blue/90 transition-all duration-300 ease-in-out cursor-pointer hover:scale-102"
            >
              <IoLogoFacebook size={32} />
            </a>
          </div>
        </section>
      </div>

      <p className="text-center mt-12">
        Copyright © 2025 | Todos os direitos reservados
      </p>
    </footer>
  );
}
