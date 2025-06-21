import type { IconType } from "react-icons";

export interface SocialMediaItem {
  Icon: IconType;
  href: string;
}

export type SocialMediaProps = SocialMediaItem;
