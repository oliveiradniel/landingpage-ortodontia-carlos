import { FaHeartbeat, FaUsers } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";

import type { HighlightItem } from "../@types/HighlightItem";

export const heroHighlights: HighlightItem[] = [
  {
    Icon: FaUsers,
    text: "Uma equipe especializada e preparada para cuidar do seu sorriso.",
  },
  {
    Icon: IoIosHome,
    text: "Cuidado especializado em um espaço elegante e acolhedor, feito para você.",
  },
  {
    Icon: FaHeartbeat,
    text: "Assistência personalizada para cada paciente.",
  },
];
