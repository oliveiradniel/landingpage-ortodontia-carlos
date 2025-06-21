import type { SocialMediaItem } from "@/@types/SocialMedia";
import { IoLogoFacebook, IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";

export const socialMedia: SocialMediaItem[] = [
  { Icon: RiInstagramFill, href: "https://instagram.com/seuperfil" },
  { Icon: IoLogoWhatsapp, href: "https://wa.me/5516912345678" },
  { Icon: IoLogoFacebook, href: "https://facebook.com/seuperfil" },
];
