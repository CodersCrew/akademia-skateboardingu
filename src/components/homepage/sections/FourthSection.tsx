import Link from 'next/link';

import { PersonPill } from '../PersonPill';
import { Quote } from '../Quote';
import { Title } from '../Title';

export function FourthSection() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 p-5 md:my-14">
      <Title
        className="md:hidden"
        titleClassName="text-[#FBD24D] -left-[10px]"
        subtitleClassName="-top-1 left-[70px]"
        title="Kilka słów"
        subtitle="o mnie"
      />
      <div className="flex items-center gap-4 lg:gap-10">
        <div className="max-w-[385px] text-pretty font-roboto text-xs text-white md:max-w-[515px] md:text-base lg:max-w-[630px] lg:text-xl xl:max-w-[730px]">
          <Title
            className="hidden md:block"
            titleClassName="text-[#FFF] md:text-[3.8rem] lg:text-[4.5rem] xl:text-[5rem] mb-11"
            title="Kilka słów o mnie"
          />
          <p className="mb-4">
            Cześć!{' '}
            <span className="text-[#FFC600]">
              Na deskorolce jeżdzę już od 13 lat.{' '}
            </span>
            To, co zaczęło się jako prosta zajawka, stało się nieodłączną
            częścią mojego życia. Deskorolka daje mi ogromną radość, a dzięki
            niej zmieniłem postrzeganie świata, poznałem dużo wspaniałych ludzi
            i odwiedziłem wiele ciekawych miejsc.{' '}
            <span className="text-[#FFC600]">
              A teraz chce się tym dzielić z innymi!
            </span>
          </p>
          <p className="mb-4">
            Zajęcia prowadzę od ponad 3 lat. Posiadam{' '}
            <Link href="TODO" className="text-[#FFC600]">
              certyfikat licencjonowanego instruktora Polish Skate Federation.{' '}
            </Link>
            Współpracuję z największymi obozami deskorolkowymi w Europie -{' '}
            <span className="text-[#FFC600]">Woodcamp.</span>
          </p>
          <p>W mojej ofercie znajdziesz:</p>
          <ul className="relative left-3 mb-4 list-inside list-disc">
            <li>regularne zajęcia we Wrocławiu,</li>
            <li>warsztaty dla szkół i fundacji,</li>
            <li>zajęcia wyjazdowe w różnych miastach.</li>
          </ul>
          <Quote className="mt-11 hidden md:block" />
        </div>
        <PersonPill withExclamationMarkRightTop={true} />
      </div>
      <Quote className="max-w-[450px] md:hidden md:max-w-full" />
    </div>
  );
}
