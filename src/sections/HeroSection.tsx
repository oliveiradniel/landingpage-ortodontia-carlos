import { FaHeartbeat, FaUsers } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

export default function HeroSection() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center gap-6 sm:gap-0">
        <div className="flex flex-col sm:flex-row items-center">
          <div className="flex flex-col gap-6 items-center sm:items-start w-full">
            <img
              src="/logo.png"
              alt=""
              aria-hidden="true"
              className="h-14 w-[140px] lg:h-18 lg:w-[180px]"
            />

            <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-medium sm:text-start sm:max-w-[400px] md:max-w-[500px]">
              Cada sorriso tem uma história e a nossa missão é ajudar você a
              contar a sua da melhor forma.
            </h1>

            <button className="bg-linear-to-r bg-steel-blue py-3 rounded-md text-[#fff] font-semibold cursor-pointer hover:bg-steel-blue/90 transition duration-300 mt-2 ease-in-out hover:scale-[1.005] w-full sm:max-w-[300px]">
              AGENDAR UMA CONSULTA
            </button>
          </div>

          <img
            src="/dr-carlos-sorrindo.png"
            alt="Dr. Carlos"
            className="h-100 w-auto sm:h-80 md:h-100 lg:h-120 mask-b-from-80% sm:mask-b-from-100%"
          />
        </div>

        <p className="flex-1 text-center sm:hidden">
          Conheça o Dr. Carlos Alberto, especialista em ortodontia estética que
          une tecnologia de ponta às melhores técnicas para transformar seu
          sorriso com precisão e beleza.
        </p>

        <div className="border border-x-0 py-4 flex border-sky-blue flex-col gap-6 md:gap-3 shadow-[0_4px_6px_-4px_rgba(0,0,0,0.3)] md:flex-row">
          <div className="flex gap-4 text-[14px] items-center">
            <FaUsers size={42} color="#87ceeb" />
            <p className="flex-1 md:max-w-[280px]">
              Uma equipe especializada e preparada para cuidar do seu sorriso.
            </p>
          </div>

          <div className="flex gap-4 text-[14px] items-center">
            <IoIosHome size={42} color="#87ceeb " />
            <p className="flex-1 md:max-w-[280px]">
              Cuidado especializado em um espaço elegante e acolhedor, feito
              para você.
            </p>
          </div>

          <div className="flex gap-4 text-[14px] items-center">
            <FaHeartbeat size={42} color="#87ceeb " />
            <p className="flex-1 md:max-w-[280px]">
              Assistência personalizada para cada paciente.
            </p>
          </div>
        </div>

        <MdKeyboardDoubleArrowDown
          size={42}
          className="text-sky-blue animate-bounce sm:mt-6"
        />
      </div>
    </div>
  );
}
