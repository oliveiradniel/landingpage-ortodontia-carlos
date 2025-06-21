// FABGroup - Floating Action Buttons Group

import { useEffect, useState } from "react";

import { FaArrowAltCircleUp } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

import Tooltip from "./Tooltip";

export default function FABGroup() {
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    function toggleButtonVisibility() {
      if (window.scrollY > 300) {
        setIsButtonVisible(true);
      } else {
        setIsButtonVisible(false);
      }
    }

    window.addEventListener("scroll", toggleButtonVisibility);

    return () => {
      window.removeEventListener("scroll", toggleButtonVisibility);
    };
  }, []);

  return (
    <div
      role="group"
      aria-label="Ações rápidas"
      className="flex gap-2 fixed bottom-8 right-12 z-10"
    >
      {isButtonVisible && (
        <button
          aria-label="Voltar ao início"
          type="button"
          className="text-steel-blue bg-white  shadow-[4px_6px_12px_0px_rgba(0,0,0,0.3)] rounded-full group relative cursor-pointer transition ease-in-out duration-300 animate-fade-in hover:translate-y-[-4px] box"
          onClick={scrollToTop}
        >
          <Tooltip message="Volte ao início" />

          <FaArrowAltCircleUp size={42} className="filter drop-shadow-2xl" />
        </button>
      )}
      <a
        aria-label="Fale conosco pelo WhatsApp"
        href="http://www.wa.me/55169912345678"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-500 bg-white  shadow-[4px_6px_12px_0px_rgba(0,0,0,0.3)] rounded-full relative group cursor-pointer transition ease-in-out duration-300 animate-fade-in hover:translate-y-[-4px]"
      >
        <Tooltip message="Posso ajudar?" />

        <IoLogoWhatsapp size={42} className="filter drop-shadow-2xl" />
      </a>
    </div>
  );
}
