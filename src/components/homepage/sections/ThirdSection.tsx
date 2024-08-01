import { Button } from '../Button';
import { Offer } from '../Offer';

export function ThirdSection() {
  return (
    <div className="flex flex-col gap-8 p-5" id="thirdSection">
      <div className="flex flex-col justify-center gap-4 md:flex-row md:flex-wrap md:gap-6">
        <div className="flex flex-col gap-4 md:flex-row md:gap-6 min-[1469px]:mb-32">
          <Offer
            containerClassName="border-[#2DD3BE] bg-[#5EE9D3]"
            // img="/images/offer1.png"
            img="/images/pill_test_photo.jpg"
            primaryColor="#134E4A"
            text="To, co zaczęło się jako prosta zajawka, stało się nieodłączną częścią mojego życia..."
            title="Zajęcia indywidualne"
          />
          <Offer
            containerClassName="border-[#FABE24] bg-[#FBD24D] md:translate-y-32"
            // img="/images/offer2.png"
            img="/images/pill_test_photo.jpg"
            primaryColor="#78350F"
            text="To, co zaczęło się jako prosta zajawka, stało się nieodłączną częścią mojego życia..."
            title="Zajęcia grupowe"
          />
        </div>
        <div className="flex flex-col gap-4 md:mb-32 md:flex-row">
          <Offer
            containerClassName="border-[#38BCF7] bg-[#7DD2FB]"
            // img="/images/offer3.png"
            img="/images/pill_test_photo.jpg"
            primaryColor="#0C4A6E"
            text="To, co zaczęło się jako prosta zajawka, stało się nieodłączną częścią mojego życia..."
            title="Warsztaty"
          />
          <Offer
            containerClassName="border-[#BF83FB] bg-[#D7B3FD] md:translate-y-32"
            // img="/images/offer4.png"
            img="/images/pill_test_photo.jpg"
            primaryColor="#581C86"
            text="To, co zaczęło się jako prosta zajawka, stało się nieodłączną częścią mojego życia..."
            title="Eventy"
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-2.5 py-1 font-roboto md:gap-5">
        <div className="text-center text-xs text-white md:text-base">
          <p>
            Spraw, aby Twoje wydarzenie było wyjątkowe! Zorganizuję zajęcia,
            pokazy lub warsztaty skateaboardingu. Skontaktuj się ze mną i
            porozmawiajmy o współpracy B2B.
          </p>
        </div>
        <Button color="green">Dowiedz się więcej &gt;&gt;</Button>
      </div>
    </div>
  );
}
