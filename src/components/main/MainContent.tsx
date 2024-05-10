import photoMain_1 from '/public/images/photo_Main_1.png';
import photoMain_2 from '/public/images/photo_Main_2.png';
import photoMain_3 from '/public/images/photo_Main_3.png';

import ImagesCarousel from './ImagesCarousel';
import Sets from './Sets';

const MainContent = () => {
  const images = [photoMain_1, photoMain_2, photoMain_3];

  return (
    <div>
      <ImagesCarousel images={images} />
      <Sets />
    </div>
  );
};

export default MainContent;
