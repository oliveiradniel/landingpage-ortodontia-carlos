import implant from "@/assets/icons/implant.svg";
import esthetic from "@/assets/icons/esthetic.svg";
import orthodontics from "@/assets/icons/orthodontics.svg";
import periodontics from "@/assets/icons/periodontics.svg";
import endodontics from "@/assets/icons/endodontics.svg";
import pediatric from "@/assets/icons/pediatric.svg";

import type { SpecialtieItem } from "@/@types/Specialties";

export const specialties: SpecialtieItem[] = [
  {
    icon: implant,
    title: "Implantes Dentários",
    description:
      "Recupere o funcionamento, a confiança e o sorriso com implantes modernos, seguros e duradouros.",
  },
  {
    icon: esthetic,
    title: "Odontologia Estética",
    description:
      "Realce a beleza do seu sorriso com clareamento dental, facetas e lentes de contato inclusivas.",
  },
  {
    icon: orthodontics,
    title: "Ortodontia e Alinhadores",
    description:
      "Alinhe seus dentes com soluções modernas e eficazes, como aparelhos invisíveis e tradicionais.",
  },
  {
    icon: periodontics,
    title: "Periodontia",
    description:
      "Cuide da base do seu sorriso com tratamentos que garantem gengivas saudáveis e livres de doenças.",
  },
  {
    icon: endodontics,
    title: "Endodontia (Tratamento de Canal)",
    description:
      "Preserve o seu dente natual com tratamentos de canal modernos, seguros e indolores, garantindo saúde e longevidade ao seu sorriso.",
  },
  {
    icon: pediatric,
    title: "Odontopediatria",
    description:
      "Sorrisos saudáveis começam cedo. Atendimento humanizado e carinhoso para pequenos.",
  },
];
