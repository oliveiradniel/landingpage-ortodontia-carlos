import clsx from "clsx";

import { h2BottomUnderline } from "@/assets/styles/underlines";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { IoTimeSharp } from "react-icons/io5";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

import ArrowToButton from "@/components/ArrowToButton";

export default function LocationSection() {
  return (
    <section
      role="region"
      aria-labelledby="location"
      className="flex flex-col items-center mt-8 gap-8"
    >
      <ArrowToButton />

      <h2
        id="location"
        className={clsx(
          "relative text-center text-2xl md:text-3xl font-bold text-ocean-blue",
          h2BottomUnderline
        )}
      >
        Conheça nossa clínica
      </h2>

      <div className="w-full flex-col md:flex-row md:justify-center flex gap-4">
        <div className="flex flex-col md:min-w-[300px] md:justify-between lg:min-w-[500px] gap-4">
          <div className="flex flex-col sm:flex-row md:flex-col sm:justify-evenly gap-4">
            <div
              role="region"
              aria-labelledby="address"
              className="flex flex-col items-center md:items-start gap-2"
            >
              <h3
                id="address"
                className="text-black text-lg text-center flex items-center gap-2"
              >
                <FaLocationDot aria-hidden="true" size={22} color="#4682b4" />
                Conheça nosso espaço
              </h3>
              <address className="not-italic text-center md:text-start">
                Clínica Dr. Carlos Alberto
                <br />
                Rua dos Sorrisos, 123 – Bairro Sorridente
                <br />
                Brodowski – SP
              </address>
            </div>

            <div className="w-full h-[0.3px] sm:hidden md:inline-flex bg-gray-400/40" />

            <div
              role="region"
              aria-labelledby="schedule-title"
              className="flex flex-col items-center md:items-start gap-2"
            >
              <h3
                id="schedule-title"
                className="text-lg text-center flex items-center gap-2 text-black"
              >
                <IoTimeSharp aria-hidden="true" size={22} color="#4682b4" />
                Horário de funcionamento
              </h3>
              <span>Segunda a Sexta: 9h às 20h</span>
              <span>Sábado: 9h ás 12h</span>
              <span>Domingo fechado</span>
            </div>
          </div>

          <div
            role="group"
            aria-label="Canais de contato"
            className="flex-col w-full hidden md:flex lg:flex-row items-center gap-2"
          >
            <button
              aria-label="Falar com a clínica pelo WhatsApp"
              type="button"
              className="flex items-center justify-center bg-steel-blue text-white gap-2 px-4 rounded-lg py-4 w-full md:max-w-[400px] cursor-pointer transition-all duration-300 ease-in-out hover:bg-steel-blue/94 hover:scale-101"
            >
              <FaWhatsapp aria-hidden="true" size={22} />
              WhatsApp
            </button>

            <button
              aria-label="Visitar nosso Instagram"
              type="button"
              className="flex items-center justify-center bg-steel-blue text-white gap-2 px-4 rounded-lg py-4 w-full md:max-w-[400px] cursor-pointer transition-all duration-300 ease-in-out hover:bg-steel-blue/94 hover:scale-101"
            >
              <FaInstagram aria-hidden="true" size={22} />
              Instagram
            </button>

            <button
              aria-label="Enviar um e-mail para a clínica"
              type="button"
              className="flex items-center justify-center bg-steel-blue text-white gap-2 px-4 rounded-lg py-4 w-full md:max-w-[400px] cursor-pointer transition-all duration-300 ease-in-out hover:bg-steel-blue/94 hover:scale-101"
            >
              <MdOutlineMail aria-hidden="true" size={22} />
              E-mail
            </button>
          </div>
        </div>

        <div className="min-h-[400px] h-[500px] w-full lg:max-w-[570px] rounded-md overflow-hidden shadow-md">
          <iframe
            aria-label="Mapa da localização da clínica em Brodowski, SP"
            title="Mapa com a localização da Clínica Dr. Carlos Alberto em Brodowski, SP"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3693.3622293602495!2d-47.66094538450763!3d-20.99119488593669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b92c73d66c6875%3A0x9a1b4e4f62847c6c!2sCentro%2C%20Brodowski%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1718900000000!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <div
        role="group"
        aria-label="Canais de contato"
        className="flex flex-col sm:flex-row md:hidden w-full items-center gap-2"
      >
        <button
          aria-label="Falar com a clínica pelo WhatsApp"
          type="button"
          className="flex items-center justify-center bg-steel-blue text-white gap-2 px-4 rounded-lg py-4 w-full md:max-w-[400px] cursor-pointer transition-all duration-300 ease-in-out hover:bg-steel-blue/94 hover:scale-101"
        >
          <FaWhatsapp aria-hidden="true" size={22} />
          WhatsApp
        </button>

        <button
          aria-label="Visitar nosso Instagram"
          type="button"
          className="flex items-center justify-center bg-steel-blue text-white gap-2 px-4 rounded-lg py-4 w-full md:max-w-[400px] cursor-pointer transition-all duration-300 ease-in-out hover:bg-steel-blue/94 hover:scale-101"
        >
          <FaInstagram aria-hidden="true" size={22} />
          Instagram
        </button>

        <button
          aria-label="Enviar um e-mail para a clínica"
          type="button"
          className="flex items-center justify-center bg-steel-blue text-white gap-2 px-4 rounded-lg py-4 w-full md:max-w-[400px] cursor-pointer transition-all duration-300 ease-in-out hover:bg-steel-blue/94 hover:scale-101"
        >
          <MdOutlineMail aria-hidden="true" size={22} />
          E-mail
        </button>
      </div>
    </section>
  );
}
