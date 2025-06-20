import drCarlosEmSuaClinica from "@/assets/images/dentista-carlos-em-sua-clínica.jpg";
import { serviceInformation } from "@/mocks/serviceInformation";

import { TfiPlus } from "react-icons/tfi";

export default function AboutMeSection() {
  return (
    <section role="region" aria-labelledby="about-me">
      <div className="w-full h-[0.3px] bg-gray-400/40" />

      <div className="flex flex-col items-center mt-8 md:items-start gap-6 md:flex-row md:justify-evenly">
        <img
          src={drCarlosEmSuaClinica}
          alt="Dr. Carlos Alberto em sua clínica de odontologia estética em Brodowski, SP"
          loading="lazy"
          className="rounded-lg max-w-[340px] h-auto object-cover"
        />

        <div className="flex flex-col items-center gap-2 md:items-start md:max-w-[600px]">
          <span className="text-gray-500 text-[12px]">
            Quem será seu odontologista?
          </span>
          <h2
            id="about-me"
            className="relative text-3xl text-center md:text-start font-semibold text-steel-blue"
          >
            Dr. Carlos Alberto
          </h2>

          <div className="mt-6 flex flex-col gap-3">
            <p className="text-center md:text-[14px] md:text-start">
              Desde pequeno, o Dr. Carlos Alberto carregava uma lembrança
              marcante: o dia em que seu pai recuperou o sorriso após anos
              evitando fotos e conversas por vergonha dos dentes. A
              transformação foi tão impactante que, ainda criança, Carlos
              decidiu que queria proporcionar aquele mesmo sentimento para
              outras pessoas.
            </p>

            <p className="text-center md:text-[14px] md:text-start">
              O caminho até aqui não foi fácil. Durante a faculdade de
              Odontologia, ele conciliou os estudos com trabalhos de meio
              período para ajudar a custear a formação. Cada aula prática era
              encarada com dedicação e entusiasmo, sempre com a meta de um dia
              abrir seu próprio espaço.{" "}
            </p>

            <p className="text-center md:text-[14px] md:text-start">
              Após anos de estudo, especializações em Ortodontia Estética e
              muitas histórias de superação ao longo da carreira, nasceu a
              Clínica Dr. Carlos Alberto. Mais do que um consultório, ela é o
              reflexo de uma trajetória de esforço, aprendizado e, acima de
              tudo, paixão por transformar sorrisos e vidas.
            </p>
          </div>

          <dl className="lg:flex w-full justify-evenly flex-wrap mt-8 hidden">
            {serviceInformation.map(({ description, data }, index) => (
              <div key={index} className="flex gap-2">
                <TfiPlus aria-hidden="true" size={18} color="#87ceeb " />
                <div className="flex flex-col">
                  <dt className="sr-only">{description}</dt>
                  <dd className="text-md">{data}</dd>
                  <span className="text-gray-500 text-sm">{description}</span>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <dl className="flex flex-wrap gap-4 items-center justify-evenly mt-8 lg:hidden">
        {serviceInformation.map(({ description, data }, index) => (
          <div key={index} className="flex gap-2 w-[230px] items-center">
            <TfiPlus aria-hidden="true" size={24} color="#87ceeb " />
            <div className="flex flex-col">
              <dt className="sr-only">{description}</dt>
              <dd className="text-3xl">{data}</dd>
              <span className="text-gray-500 text-md">{description}</span>
            </div>
          </div>
        ))}
      </dl>
    </section>
  );
}
