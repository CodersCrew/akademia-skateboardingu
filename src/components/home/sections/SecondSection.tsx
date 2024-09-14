import Image from 'next/image';

import { NextSectionButton } from '../NextSectionButton';
import { Title } from '../Title';

export function SecondSection() {
  return (
    <div className="flex flex-col gap-2.5 overflow-hidden p-5">
      <Title
        titleClassName="text-[#7DD2FB] -left-3.5"
        subtitleClassName="-top-1 left-3.5 md:left-10"
        title="Akademia"
        subtitle="Skateboardingu"
        withExclamations
      />
      <div className="relative">
        <div className="absolute -left-28 -top-28 h-[200px] w-[200px] scale-x-[-1] md:-left-32 md:-top-48 md:h-[300px] md:w-[300px]">
          <Image
            src="/images/homepage/board1.png"
            alt="Dekoracyjny obrazek deskorolki"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <p className="my-5 px-[15px] text-center font-roboto text-xs text-white md:text-base">
          Akademia skateboardingu jest idealnym miejscem zarówno dla tych,
          którzy chcą postawić pierwsze kroki na deskorolce, jak i&nbsp;dla
          tych, którzy pragną rozwijać swoje umiejętności pod okiem
          doświadczonych instruktorów. Podczas zajęć skupiamy się nie tylko
          na&nbsp;technikach jazdy, ale również na ważnych aspektach takich jak:
          uważność i&nbsp;bezpieczeństwo w otoczeniu, budowanie dobrych relacji
          z&nbsp;rówieśnikami, szacunek do innych, pokonywanie własnych barier
          oraz zwalczanie słabości. Dołącz do nas i&nbsp;odkryj radość
          z&nbsp;jazdy na&nbsp;deskorolce!
        </p>
        <div className="absolute -bottom-[90px] -right-20 h-[130px] w-[130px] -rotate-12 scale-x-[-1] md:-right-24 md:top-28 md:h-[200px] md:w-[200px]">
          <Image
            src="/images/homepage/board2.png"
            alt="Dekoracyjny obrazek deskorolki"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="grid grid-cols-3 place-items-center gap-2.5 p-3 text-center font-poetsen-one text-xs text-[#FBD24D] md:text-base">
        <p className="max-w-36">Różne grupy wiekowe</p>
        <p className="max-w-36">Zajęcia na każdym poziomie</p>
        <p className="max-w-36">Doświadczony instruktor</p>
      </div>
      <NextSectionButton sectionId="thirdSection" />
    </div>
  );
}
