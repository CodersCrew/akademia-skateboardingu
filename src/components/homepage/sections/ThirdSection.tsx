import { Button } from '../Button';
import { Offer } from '../Offer';

export function ThirdSection() {
  return (
    <div className="flex flex-col gap-4 p-5" id="thirdSection">
      <Offer
        containerClassName="border-[#2DD3BE] bg-[#5EE9D3]"
        img="/images/offer1.png"
        primaryColor="#134E4A"
        text="To, co zaczęło się jako prosta zajawka, stało się nieodłączną częścią mojego życia..."
        title="Zajęcia indywidualne"
      />
      <Offer
        containerClassName="border-[#FABE24] bg-[#FBD24D]"
        img="/images/offer2.png"
        primaryColor="#78350F"
        text="To, co zaczęło się jako prosta zajawka, stało się nieodłączną częścią mojego życia..."
        title="Zajęcia grupowe"
      />
      <Offer
        containerClassName="border-[#38BCF7] bg-[#7DD2FB]"
        img="/images/offer3.png"
        primaryColor="#0C4A6E"
        text="To, co zaczęło się jako prosta zajawka, stało się nieodłączną częścią mojego życia..."
        title="Warsztaty"
      />
      <Offer
        containerClassName="border-[#BF83FB] bg-[#D7B3FD]"
        img="/images/offer4.png"
        primaryColor="#581C86"
        text="To, co zaczęło się jako prosta zajawka, stało się nieodłączną częścią mojego życia..."
        title="Eventy"
      />
      <div className="flex flex-col items-center gap-2.5 py-1 md:gap-5">
        <div className="text-center font-roboto text-xs text-white md:text-base">
          <p>
            Chcesz nawiązać <span className="font-bold">współpracę</span>{' '}
            w&nbsp;inny sposób?
          </p>
          <p>
            Mogę zorganizować zajęcia/pokazy/warsztaty skateboardingowe
            na&nbsp;Twoim wydarzeniu.
          </p>
        </div>
        <Button color="green">Dowiedz się więcej &gt;&gt;</Button>
      </div>
    </div>
  );
}
