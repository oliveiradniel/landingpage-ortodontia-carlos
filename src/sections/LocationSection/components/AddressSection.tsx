import { FaLocationDot } from "react-icons/fa6";

export default function AddressSection() {
  return (
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
  );
}
