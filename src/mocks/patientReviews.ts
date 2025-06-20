import patient1 from "@/assets/images/patient-1.jpg";
import patient2 from "@/assets/images/patient-2.jpg";
import patient3 from "@/assets/images/patient-3.jpg";
import patient4 from "@/assets/images/patient-4.jpg";
import patient5 from "@/assets/images/patient-5.jpg";

import type { PatientReviewItem } from "@/@types/PatientReview";

export const patientReviews: PatientReviewItem[] = [
  {
    avatar: patient5,
    name: "Juliana Ribeiro",
    review:
      "Depois de anos com vergonha de sorrir, finalmente encontrei no Dr. Carlos Alberto o profissional que precisava. Ele foi atencioso desde a primeira consulta, explicou cada etapa do tratamento e o resultado superou minhas expectativas. Recomendo de olhos fechados!",
    quantityOfStars: 5,
  },
  {
    avatar: patient2,
    name: "Marcos Silva",
    review:
      "O Dr. Carlos e toda a equipe foram incríveis comigo. Eu sempre tive muito medo de ir ao dentista, mas aqui me senti acolhido e seguro. O atendimento é humanizado e eles realmente se preocupam com o bem-estar do paciente.",
    quantityOfStars: 5,
  },
  {
    avatar: patient3,
    name: "Ana Paula Torres",
    review:
      "Coloquei aparelho com o Dr. Carlos e fui muito bem acompanhado durante todo o processo. Em menos de dois anos meu sorriso mudou completamente. Atendimento excelente e estrutura da clínica impecável.",
    quantityOfStars: 5,
  },
  {
    avatar: patient4,
    name: "Camila Souza",
    review:
      "Além da competência do Dr. Carlos, a clínica é moderna, bem equipada e com um ambiente super confortável. Dá pra perceber que cada detalhe foi pensado pra deixar o paciente à vontade. Sem dúvida, o melhor dentista que já passei.",
    quantityOfStars: 5,
  },
  {
    avatar: patient1,
    name: "Ricardo Menezes",
    review:
      "Fiz um tratamento estético com facetas e não poderia estar mais feliz! Meu sorriso ficou natural, bonito e super harmonioso. Além da técnica impecável, o Dr. Carlos tem muito bom gosto na hora de orientar sobre os procedimentos.",
    quantityOfStars: 5,
  },
];
