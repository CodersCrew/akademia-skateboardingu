import photoMain_1 from '/public/images/photo_Main_1.png';
import photoMain_2 from '/public/images/photo_Main_2.png';
import photoMain_3 from '/public/images/photo_Main_3.png';

import Blog from './Blog/Blog';
import ImagesCarousel from './Carousel/ImagesCarousel';
import Sets from './Sets/Sets';

const MainContent = () => {
  const images = [photoMain_1, photoMain_2, photoMain_3];

  return (
    <div>
      <ImagesCarousel images={images} />
      <Sets />
      <Blog />
    </div>
  );
};

export default MainContent;
