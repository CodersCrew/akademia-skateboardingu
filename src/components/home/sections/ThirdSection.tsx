import { ButtonLink } from '../ButtonLink';
import { Offer } from '../Offer';
import SectionContainer from '../SectionContainer';

function Pills() {
  return (
    <div className="grid gap-y-4 md:grid-cols-2 md:place-items-center md:gap-y-10 lg:grid-cols-4 lg:gap-x-4">
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
      <Offer
        containerClassName="border-[#38BCF7] bg-[#7DD2FB]"
        // TODO - too small - need bigger images
        // img="/images/offer3.png"
        img="/images/pill_test_photo.jpg"
        primaryColor="#0C4A6E"
        text="Jednodniowe wypady pełne wrażeń i ekspresowej nauki"
        title="Wyjazdy"
        href=""
      />
      <Offer
        containerClassName="border-[#BF83FB] bg-[#D7B3FD] md:translate-y-32"
        // TODO - too small - need bigger images
        // img="/images/offer4.png"
        img="/images/pill_test_photo.jpg"
        primaryColor="#581C86"
        text="Przeprowadzenie warsztatów deskorolkowych dla grup"
        title="Warsztaty"
        href=""
      />
    </div>
  );
}

function BottomPart() {
  return (
    <>
      <p className="m-auto max-w-[800px] text-center font-roboto text-xs text-white sm:text-base md:mt-32 xl:text-xl">
        Spraw, aby Twoje wydarzenie było wyjątkowe! Zorganizuję zajęcia, pokazy
        lub warsztaty skateaboardingu. Skontaktuj się ze mną i porozmawiajmy o
        współpracy B2B.
      </p>
      <ButtonLink href="" color="green" className="m-auto">
        Dowiedz się więcej &gt;&gt;
      </ButtonLink>
    </>
  );
}

export function ThirdSection() {
  return (
    <SectionContainer
      className="flex flex-col gap-6 md:gap-12"
      id="thirdSection"
    >
      <Pills />
      <BottomPart />
    </SectionContainer>
  );
}
