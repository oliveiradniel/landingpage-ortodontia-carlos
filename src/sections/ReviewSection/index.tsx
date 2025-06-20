import { useRef } from "react";

import useScrollList from "@/app/hooks/useScrollList";

import {
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaStar,
} from "react-icons/fa";

import { patientReviews } from "@/mocks/patientReviews";

export default function ReviewSection() {
  const listRef = useRef<HTMLUListElement>(null);
  const SCROLL_AMOUNT = 320;

  const { scrollLeft, scrollRight } = useScrollList({
    containerRef: listRef,
    amount: SCROLL_AMOUNT,
  });

  return (
    <section
      role="region"
      aria-labelledby="review"
      className="flex flex-col mt-8 gap-4 md:flex-row md:justify-center overflow-hidden"
    >
      <div className="flex flex-col md:max-w-[570px] p-4 justify-between">
        <div className="flex flex-col gap-4 leading-7">
          <h2
            id="review"
            className="text-2xl text-center md:text-start font-semibold text-steel-blue"
          >
            Depoimentos de pacientes da Clínica Dr. Carlos Alberto
          </h2>

          <p className="text-center md:text-start">
            Quer saber se vale a pena? Leia os depoimentos reais de pacientes
            que confiaram no Dr. Carlos Alberto e hoje vivem com{" "}
            <strong>mais autoestima e um sorriso transformado</strong>.
          </p>
        </div>

        <div className="hidden md:inline-flex w-full text-steel-blue justify-between">
          <button
            aria-label="Ir até a avaliação anterior"
            className="cursor-pointer hover:opacity-90 duration-300 ease-in-out transition-opacity"
            onClick={scrollLeft}
          >
            <FaArrowAltCircleLeft aria-hidden="true" size={32} />
          </button>
          <button
            aria-label="Ir até a avaliação posterior"
            className="cursor-pointer hover:opacity-90 duration-300 ease-in-out transition-opacity"
            onClick={scrollRight}
          >
            <FaArrowAltCircleRight aria-hidden="true" size={32} />
          </button>
        </div>
      </div>

      <div className="relative flex flex-col gap-4 md:max-w-[570px]">
        <div className="absolute mt-[20%] md:hidden w-full flex justify-between text-steel-blue z-10">
          <button
            aria-label="Ir até a avaliação anterior"
            className="absolute left-0 cursor-pointer hover:opacity-90 duration-300 ease-in-out transition-opacity"
            onClick={scrollLeft}
          >
            <FaArrowAltCircleLeft aria-hidden="true" size={32} />
          </button>
          <button
            aria-label="Ir até a avaliação posterior"
            className="absolute right-0 cursor-pointer hover:opacity-90 duration-300 ease-in-out transition-opacity"
            onClick={scrollRight}
          >
            <FaArrowAltCircleRight aria-hidden="true" size={32} />
          </button>
        </div>

        <ul
          aria-label="Lista de avaliações reais retiradas do Google"
          ref={listRef}
          className="flex overflow-hidden gap-8 py-4 px-[12%] md:px-7 mask-x-from-96%"
        >
          {patientReviews.map(
            ({ avatar, review, name, quantityOfStars }, index) => (
              <li
                key={index}
                className="min-w-[290px] flex flex-col gap-4 justify-between rounded-md border border-powder-blue p-4 shadow-[4px_8px_16px_0_rgba(0,0,0,0.3)]"
              >
                <blockquote>
                  <em className="shrink-0 min-w-[200px]">{review}</em>
                </blockquote>
                <div className="flex gap-2">
                  <img
                    aria-hidden="true"
                    src={avatar}
                    alt={`Foto de perfil de ${name}`}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div className="flex flex-col justify-evenly">
                    <span
                      role="img"
                      aria-label={`${quantityOfStars} de 5 estrelas`}
                      className="flex gap-1"
                    >
                      {[...Array(quantityOfStars)].map(() => (
                        <FaStar aria-hidden="true" color="#b8a70e" />
                      ))}
                    </span>
                    <cite>{name}</cite>
                  </div>
                </div>
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  );
}
