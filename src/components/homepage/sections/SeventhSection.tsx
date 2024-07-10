import { Button } from '../Button';
import { GalleryPill } from '../GalleryPill';

export function SeventhSection() {
  return (
    <div className="flex flex-col gap-2.5 px-5 pt-5 text-white">
      <p className="font-poetsen-one text-base">
        Zobacz, jak świetnie się bawimy
      </p>
      <p className="font-roboto text-xs">
        Cześć! Mam na imię Adam i&nbsp;
        <span className="text-[#FFC600]">
          jeżdżę na&nbsp;deskorolce od&nbsp;13 lat
        </span>
        . To, co&nbsp;zaczęło się&nbsp;jako prosta zajawka, stało
        się&nbsp;nieodłączną częścią mojego życia. Deskorolka nie&nbsp;tylko
        daje mi&nbsp;ogromną radość z&nbsp;jazdy, ale&nbsp;również zmieniła mój
        sposób postrzegania świata. Dzięki niej poznałem wspaniałych ludzi
        z&nbsp;różnych zakątków Polski i&nbsp;świata oraz odwiedziłem wiele
        nowych miejsc.
      </p>
      <Button color="blue" className="m-auto my-2">
        Zobacz galerię &gt;&gt;
      </Button>
      <div className="flex h-52 justify-between gap-5 overflow-hidden">
        <GalleryPill src="/images/sample1.png" />
        <GalleryPill className="top-10" src="/images/sample2.png" />
      </div>
    </div>
  );
}
