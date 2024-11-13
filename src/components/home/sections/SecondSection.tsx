import Image from 'next/image';

import { NextSectionButton } from '../NextSectionButton';
import SectionContainer from '../SectionContainer';
import { Title } from '../Title';

function MainContent() {
  return (
    <>
      <div className="relative">
        <p className="text-center font-roboto text-xs text-white sm:text-base xl:text-xl">
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
      </div>
      <div className="grid grid-cols-3 place-items-center gap-2.5 p-3 text-center font-poetsen-one text-xs text-[#FBD24D] sm:text-base xl:text-xl">
        <p className="max-w-36">Różne grupy wiekowe</p>
        <p className="max-w-36">Zajęcia na każdym poziomie</p>
        <p className="max-w-36">Doświadczony instruktor</p>
      </div>
    </>
  );
}

function Skateboards() {
  return (
    <>
      <div className="absolute -left-[120px] top-0 h-[200px] w-[200px] scale-x-[-1] min-[375px]:-left-[70px] min-[375px]:-top-[30px] sm:-left-[130px] sm:-top-[60px] sm:h-[300px] sm:w-[300px] lg:-left-[150px] lg:-top-[80px] lg:h-[400px] lg:w-[400px] min-[2000px]:-top-[130px] min-[2000px]:left-0 min-[2000px]:rotate-12">
        <Image
          src="/images/homepage/board1.png"
          alt="Dekoracyjny obrazek deskorolki"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="absolute -right-[80px] bottom-[60px] h-[130px] w-[130px] -rotate-12 scale-x-[-1] min-[375px]:bottom-[40px] sm:-right-[100px] sm:bottom-[20px] sm:h-[200px] sm:w-[200px] lg:-bottom-[30px] lg:-right-[130px] lg:h-[300px] lg:w-[300px] min-[2000px]:right-0">
        <Image
          src="/images/homepage/board2.png"
          alt="Dekoracyjny obrazek deskorolki"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </>
  );
}

export function SecondSection() {
  return (
    <SectionContainer className="relative flex flex-col gap-2.5 md:gap-8">
      <Title
        titleClassName="text-[#7DD2FB] -left-3.5"
        subtitleClassName="-top-1 left-3.5 md:left-10"
        title="Akademia"
        subtitle="Skateboardingu"
        withExclamations
      />
      <MainContent />
      <NextSectionButton sectionId="thirdSection" />
      <Skateboards />
    </SectionContainer>
  );
}
