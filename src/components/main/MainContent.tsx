import { IoImageSharp } from 'react-icons/io5';

import photoMain_1 from '/public/images/photo_Main_1.png';
import photoMain_2 from '/public/images/photo_Main_2.png';
import photoMain_3 from '/public/images/photo_Main_3.png';

import ImagesCarousel from './Carousel/ImagesCarousel';
import Sets from './Sets/Sets';

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
