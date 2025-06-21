import type { IconType } from "react-icons";

export interface MeansOfContactItem {
  Icon: IconType;
  means: "WhatsApp" | "Instagram" | "E-mail";
}

export type MeansOfContactCard = MeansOfContactItem;
