import { PersonPill } from '../PersonPill';
import { Quote } from '../Quote';
import { Title } from '../Title';

export function FourthSection() {
  return (
    <div className="flex flex-row items-center justify-center gap-5 p-5 md:gap-10 lg:gap-20">
      <div className="hidden w-full md:block md:max-w-[337px]">
        <PersonPill withExclamationMarkLeftTop={true} />
      </div>
      <div className="flex flex-col items-center gap-5 overflow-hidden">
        <Title
          className="md:hidden"
          titleClassName="text-[#FBD24D] -left-[10px]"
          subtitleClassName="-top-1 left-[70px]"
          title="Kilka słów"
          subtitle="o mnie"
        />
        <Title
          className="hidden md:block"
          titleClassName="text-[#FFF] md:text-[2.55rem] lg:text-[4rem] xl:text-[5rem]"
          title="Kilka słów o mnie"
        />
        <div className="flex items-center gap-5 md:max-w-[332px] lg:max-w-[521px] xl:max-w-[652px]">
          <div className="my-3 font-roboto text-xs text-white md:text-base lg:text-xl ">
            <p className="mb-4">
              Cześć! Mam na imię Adam i{' '}
              <span className="text-[#FFC600]">
                jeżdżę na deskorolce od 13 lat
              </span>
              . To, co zaczęło się jako prosta zajawka, stało się nieodłączną
              częścią mojego życia. Deskorolka nie tylko daje mi ogromną radość
              z&nbsp;jazdy, ale również zmieniła mój sposób postrzegania świata.
              Dzięki niej poznałem wspaniałych ludzi z&nbsp;różnych zakątków
              Polski i&nbsp;świata oraz odwiedziłem wiele nowych miejsc.
            </p>
            <p>
              <span className="text-[#FFC600]">
                Od 2021 roku uczę jazdy na deskorolce
              </span>
              , aby dzielić się swoją pasją z&nbsp;innymi i&nbsp;pokazać,
              co&nbsp;najbardziej urzekło mnie w&nbsp;skateboardingu. Obecnie{' '}
              <span className="text-[#FFC600]">
                jestem licencjonowanym instruktorem Polish Skate Federation{' '}
              </span>
              i prowadzę:
            </p>
            <ul className="relative left-3 mb-4 list-inside list-disc">
              <li>regularne zajęcia we Wrocławiu,</li>
              <li>warsztaty dla szkół i fundacji,</li>
              <li>zajęcia wyjazdowe w różnych miastach.</li>
            </ul>
            <p>
              Jako instruktor współpracuję również z&nbsp;największymi obozami
              deskorolkowymi w&nbsp;Europie,{' '}
              <span className="text-[#FFC600]">Woodcamp</span>.
            </p>
          </div>
          <PersonPill
            personPillClassName="md:hidden"
            withExclamationMarkRightTop={true}
          />
        </div>
        <Quote quoteClassName="md:display-none md:max-w-[332px] lg:max-w-[521px] xl:max-w-[652px]" />
      </div>
    </div>
  );
}
