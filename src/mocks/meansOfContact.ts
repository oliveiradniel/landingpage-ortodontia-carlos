import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

import type { MeansOfContactItem } from "@/@types/MeansOfContact";

export const meansOfContact: MeansOfContactItem[] = [
  { Icon: FaWhatsapp, means: "WhatsApp" },
  { Icon: FaInstagram, means: "Instagram" },
  { Icon: MdOutlineMail, means: "E-mail" },
];
