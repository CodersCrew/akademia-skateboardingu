import { Button } from '../Button';
import { Offer } from '../Offer';

export function ThirdSection() {
  const getOfferProps = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 768) {
      return {
        containerClassName: 'border-[#38BCF7] bg-[#7DD2FB]',
        img: '/images/offer2.png',
        primaryColor: '#0C4A6E',
        text: 'To, co zaczęło się jako prosta zajawka, stało się nieodłączną częścią mojego życia...',
        title: 'Warsztaty'
      };
    } else {
      return {
        containerClassName: 'border-[#BF83FB] bg-[#D7B3FD]',
        img: '/images/offer4.png',
        primaryColor: '#581C86',
        text: 'To, co zaczęło się jako prosta zajawka, stało się nieodłączną częścią mojego życia...',
        title: 'Eventy'
      };
    }
  };

  const { containerClassName, img, primaryColor, text, title } =
    getOfferProps();

  return (
    <div
      className="tablet:grid tablet:grid-cols-2 tablet:gap-x-4 flex flex-col p-5"
      id="thirdSection"
    >
      <div className="tablet:relative tablet:top-4">
        <Offer
          containerClassName="border-[#2DD3BE] bg-[#5EE9D3]"
          img="/images/offer1.png"
          primaryColor="#134E4A"
          text="To, co zaczęło się jako prosta zajawka, stało się nieodłączną częścią mojego życia..."
          title="Zajęcia indywidualne"
        />
      </div>
      <div className="tablet:relative tablet:bottom-4">
        <Offer
          containerClassName={containerClassName}
          img={img}
          primaryColor={primaryColor}
          text={text}
          title={title}
        />
      </div>
      <div className="tablet:relative tablet:bottom-4">
        <Offer
          containerClassName={containerClassName}
          img={img}
          primaryColor={primaryColor}
          text={text}
          title={title}
        />
      </div>
      <div className="tablet:relative tablet:top-4">
        <Offer
          containerClassName="border-[#BF83FB] bg-[#D7B3FD]"
          img="/images/offer4.png"
          primaryColor="#581C86"
          text="To, co zaczęło się jako prosta zajawka, stało się nieodłączną częścią mojego życia..."
          title="Eventy"
        />
      </div>
      <div className="col-span-2 flex flex-col items-center gap-2.5 py-1 md:gap-5">
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

export default ThirdSection;
