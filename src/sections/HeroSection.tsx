import { FaHeartbeat, FaUsers } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

export default function HeroSection() {
  return (
    <div className="min-h-screen pt-6 flex justify-center">
      <div className="flex flex-col items-center gap-6">
        <img
          src="/logo.png"
          alt=""
          aria-hidden="true"
          className="h-14 w-[140px]"
        />

        <h1 className="text-center text-xl font-medium">
          Cada sorriso tem uma história e a nossa missão é ajudar você a contar
          a sua da melhor forma.
        </h1>

        <button className="bg-linear-to-r bg-steel-blue w-full py-3 rounded-md text-[#fff] font-semibold cursor-pointer hover:bg-steel-blue/90 transition duration-300 mt-2 ease-in-out hover:scale-[1.005]">
          AGENDAR UMA CONSULTA
        </button>

        <img
          src="/dr-carlos-sorrindo.png"
          alt="Dr. Carlos"
          className="h-100 mask-b-from-80%"
        />

        <div className="flex gap-2">
          <div className="h-22 w-22 rounded-full bg-powder-blue hidden">
            <img
              src="/retrato-dr-carlos.png"
              alt=""
              aria-hidden="true"
              className="h-full w-full rounded-full"
            />
          </div>
          <p className="flex-1 text-center">
            Conheça o Dr. Carlos Alberto, especialista em ortodontia estética
            que une tecnologia de ponta às melhores técnicas para transformar
            seu sorriso com precisão e beleza.
          </p>
        </div>

        <div className="border border-x-0 py-4 flex border-sky-blue flex-col gap-6 shadow-[0_4px_6px_-4px_rgba(0,0,0,0.3)]">
          <div className="flex gap-4 text-[14px] items-center">
            <FaUsers size={42} color="#87ceeb" />
            <p className="flex-1">
              Uma equipe especializada e preparada para cuidar do seu sorriso
              com tecnologia, estética e precisão.
            </p>
          </div>

          <div className="flex gap-4 text-[14px] items-center">
            <IoIosHome size={42} color="#87ceeb " />
            <p className="flex-1">
              Cuidado especializado em um espaço elegante e acolhedor, feito
              para você.
            </p>
          </div>

          <div className="flex gap-4 text-[14px] items-center">
            <FaHeartbeat size={42} color="#87ceeb " />
            <p className="flex-1">
              Assistência personalizada para cada paciente.
            </p>
          </div>
        </div>

        <MdKeyboardDoubleArrowDown
          size={42}
          className="text-sky-blue animate-bounce"
        />
      </div>
      <div>{/* Image */}</div>
    </div>
  );
}
