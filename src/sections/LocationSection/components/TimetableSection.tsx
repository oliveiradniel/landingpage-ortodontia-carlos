import { IoTimeSharp } from "react-icons/io5";

export default function TimetableSection() {
  return (
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
  );
}
