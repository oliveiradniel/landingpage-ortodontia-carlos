import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";

export default function Header() {
  return (
    <header
      role="banner"
      className="flex items-center justify-between px-8 h-12 bg-sky-blue"
    >
      <div className="text-[12px] text-iron-gray">
        <span className="block">Odontologista</span>
        <span>(Brodowski/SP)</span>
      </div>

      <div className="flex items-center gap-4">
        <a
          href="mailto:contato@clinicadrcarlosalberto.com.br"
          aria-label="Enviar e-mail para a Clínica Dr. Carlos Alberto"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-iron-gray hover:text-iron-gray/74 transition-colors ease-in-out duration-300 text-[14px]"
        >
          <MdEmail size={22} aria-hidden="true" />
          <span className="hidden md:inline-flex">
            contato@clinicadrcarlosalberto.com.br
          </span>
        </a>

        <div className="h-8 w-[0.3px] bg-iron-gray/36" />

        <a
          href="https://wa.me/5516912345678"
          aria-label="Iniciar conversa via WhatsApp com a Clínica Dr. Carlos Alberto"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-iron-gray hover:text-iron-gray/74 transition-colors ease-in-out duration-300 text-[14px]"
        >
          <IoLogoWhatsapp size={22} aria-hidden="true" />
          <span className="hidden sm:inline-flex">+55 (16) 91234-5678</span>
        </a>

        <div className="h-8 w-[0.3px] bg-iron-gray/36" />

        <a
          href="https://www.instagram.com/"
          aria-label="Visitar perfil da clínica no Instagram"
          target="_blank"
          rel="noopener noreferrer"
          className="text-iron-gray cursor-pointer hover:text-iron-gray/74 transition-colors ease-in-out duration-300"
        >
          <RiInstagramFill size={22} aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}
