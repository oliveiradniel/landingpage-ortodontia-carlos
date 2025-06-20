import { FaStar } from "react-icons/fa";

import type { PatientReviewCard } from "@/@types/PatientReview";

export default function Review({
  review,
  avatar,
  name,
  quantityOfStars,
}: PatientReviewCard) {
  return (
    <li className="min-w-[290px] flex flex-col gap-4 justify-between rounded-md border border-powder-blue p-4 shadow-[4px_8px_16px_0_rgba(0,0,0,0.3)]">
      <blockquote>
        <em className="shrink-0 min-w-[200px]">{review}</em>
      </blockquote>
      <div className="flex gap-2">
        <img
          aria-hidden="true"
          src={avatar}
          alt={`Foto de perfil de ${name}`}
          className="w-14 h-14 rounded-full object-cover"
        />
        <div className="flex flex-col justify-evenly">
          <span
            role="img"
            aria-label={`${quantityOfStars} de 5 estrelas`}
            className="flex gap-1"
          >
            {[...Array(quantityOfStars)].map(() => (
              <FaStar aria-hidden="true" color="#b8a70e" />
            ))}
          </span>
          <cite>{name}</cite>
        </div>
      </div>
    </li>
  );
}
