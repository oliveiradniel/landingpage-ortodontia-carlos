import drCarlosEmSuaClinica from "@/assets/images/dentista-carlos-em-sua-clínica.jpg";

export default function DrCarlosImage() {
  return (
    <img
      src={drCarlosEmSuaClinica}
      alt="Dr. Carlos Alberto em sua clínica de odontologia estética em Brodowski, SP"
      loading="lazy"
      className="rounded-lg max-w-[340px] h-auto object-cover"
    />
  );
}
