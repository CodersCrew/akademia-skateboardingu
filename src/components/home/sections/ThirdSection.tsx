import { ButtonLink } from '../ButtonLink';
import { Offer } from '../Offer';

export function ThirdSection() {
  return (
    <div className="flex flex-col gap-8 pb-3 pt-5 md:py-6" id="thirdSection">
      <div className="flex flex-col justify-center gap-4 px-5 md:flex-row md:flex-wrap md:gap-6">
        <div className="flex flex-col gap-4 md:flex-row md:gap-6 min-[1450px]:mb-32">
          <Offer
            containerClassName="border-[#2DD3BE] bg-[#5EE9D3]"
            // TODO - too small - need bigger images
            // img="/images/offer1.png"
            img="/images/pill_test_photo.jpg"
            primaryColor="#134E4A"
            text="Spersonalizowana nauka na lekcjach indywidualnych"
            title="Zajęcia indywidualne"
            href=""
          />
          <Offer
            containerClassName="border-[#FABE24] bg-[#FBD24D] md:translate-y-32"
            // TODO - too small - need bigger images
            // img="/images/offer2.png"
            img="/images/pill_test_photo.jpg"
            primaryColor="#78350F"
            text="Wspólny rozwój i zabawa w grupie"
            title="Zajęcia grupowe"
            href=""
          />
        </div>
        <div className="flex flex-col gap-4 md:mb-32 md:flex-row">
          <Offer
            containerClassName="border-[#38BCF7] bg-[#7DD2FB]"
            // TODO - too small - need bigger images
            // img="/images/offer3.png"
            img="/images/pill_test_photo.jpg"
            primaryColor="#0C4A6E"
            text="Jednodniowe wypady pełne wrażeń i ekspresowej nauki"
            title="Warsztaty"
            href=""
          />
          <Offer
            containerClassName="border-[#BF83FB] bg-[#D7B3FD] md:translate-y-32"
            // TODO - too small - need bigger images
            // img="/images/offer4.png"
            img="/images/pill_test_photo.jpg"
            primaryColor="#581C86"
            text="Przeprowadzenie warsztatów deskorolkowych dla grup"
            title="Eventy"
            href=""
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-2.5 px-5 font-roboto md:gap-5">
        <div className="max-w-[350px] text-center text-xs text-white md:max-w-[800px] md:text-xl">
          <p>
            Spraw, aby Twoje wydarzenie było wyjątkowe! Zorganizuję zajęcia,
            pokazy lub warsztaty skateaboardingu. Skontaktuj się ze mną i
            porozmawiajmy o współpracy B2B.
          </p>
        </div>
        <ButtonLink href="" color="green">
          Dowiedz się więcej &gt;&gt;
        </ButtonLink>
      </div>
    </div>
  );
}
