import Link from 'next/link';

import { PersonPill } from '../PersonPill';
import { Quote } from '../Quote';
import SectionContainer from '../SectionContainer';
import { Title } from '../Title';

export function FourthSection() {
  return (
    <SectionContainer className="flex flex-col items-center justify-center gap-5">
      <Title
        className="md:hidden"
        titleClassName="text-[#FBD24D] -left-[10px]"
        subtitleClassName="-top-1 left-[70px]"
        title="Kilka słów"
        subtitle="o mnie"
      />
      <div className="flex items-center gap-4 lg:gap-10">
        <div className="flex flex-col gap-4 font-roboto text-xs text-white sm:text-base xl:text-xl">
          <Title
            className="hidden md:block"
            titleClassName="md:text-[3.8rem] lg:text-[4.5rem] xl:text-[5rem] mb-11"
            title="Kilka słów o mnie"
          />
          <p>
            Cześć!{' '}
            <span className="text-[#FFC600]">
              Na deskorolce jeżdzę już od&nbsp;14&nbsp;lat.{' '}
            </span>
            To,&nbsp;co&nbsp;zaczęło się&nbsp;jako prosta zajawka, stało
            się&nbsp;nieodłączną częścią mojego życia. Deskorolka daje
            mi&nbsp;ogromną radość, a&nbsp;dzięki niej zmieniłem postrzeganie
            świata, poznałem dużo wspaniałych ludzi i&nbsp;odwiedziłem wiele
            ciekawych miejsc.{' '}
            <span className="text-[#FFC600]">
              A&nbsp;teraz chce się&nbsp;tym&nbsp;dzielić z&nbsp;innymi!
            </span>
          </p>
          <p>
            Zajęcia prowadzę od ponad 3 lat. Posiadam{' '}
            <Link href="TODO" className="text-[#FFC600]">
              certyfikat licencjonowanego instruktora Polish Skate Federation.{' '}
            </Link>
            Współpracuję z największymi obozami deskorolkowymi w Europie -{' '}
            <span className="text-[#FFC600]">Woodcamp.</span>
          </p>
          <div>
            <p>W mojej ofercie znajdziesz:</p>
            <ul className="relative left-3 mb-4 list-inside list-disc">
              <li>regularne zajęcia we&nbsp;Wrocławiu,</li>
              <li>warsztaty dla&nbsp;szkół i&nbsp;fundacji,</li>
              <li>zajęcia wyjazdowe w&nbsp;różnych miastach.</li>
            </ul>
          </div>
          <Quote className="mt-11 hidden md:block" />
        </div>
        <PersonPill withExclamationMarkRightTop />
      </div>
      <Quote className="max-w-[450px] md:hidden md:max-w-full" />
    </SectionContainer>
  );
}
