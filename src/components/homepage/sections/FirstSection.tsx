import Image from 'next/image';

import { Button } from '../Button';
import { ExclamationMark } from '../ExclamationMark';

export function FirstSection() {
  return (
    <div className="grid grid-cols-3 items-center py-3 pl-5 md:gap-10 md:py-6 md:pl-10">
      <div className="col-span-2 flex flex-col gap-2.5 py-3 pr-1">
        <div className="font-poetsen-one">
          <p className="text-4xl text-[#FBD24D] md:text-5xl">Sezon 2024</p>
          <p className="relative -top-6 left-[70px]">
            <span className="text-2xl text-white md:text-4xl">rozpoczęty</span>
            <ExclamationMark className="text-4xl md:text-5xl" />
          </p>
        </div>
        <p className="font-roboto text-xs text-white md:text-base">
          Czy Twoje dziecko marzy o&nbsp;przygodzie na&nbsp;deskorolce? Zapisz
          je&nbsp;na&nbsp;zajęcia skateboardingu w&nbsp;nowym sezonie i&nbsp;daj
          mu&nbsp;szansę na rozwijanie umiejętności, zdobywanie pewności siebie
          i&nbsp;poznawanie nowych przyjaciół! Niech Twój maluch odkryje radość
          z&nbsp;aktywności na świeżym powietrzu i&nbsp;zaprzyjaźni się
          z&nbsp;deską już dziś!
        </p>
        <Button color="orange" className="m-auto my-1 md:my-4">
          Zapisy &gt;&gt;
        </Button>
      </div>
      <div className="relative h-[255px] overflow-hidden md:h-[400px]">
        <Image
          src="/images/skate.webp"
          alt="Adam skaczący na deskorolce"
          className="rounded-s-full"
          layout="fill"
          objectFit="cover"
          objectPosition="left"
        />
      </div>
    </div>
  );
}
