import photoMain_1 from '/public/images/photo_Main_1.png';
import photoMain_2 from '/public/images/photo_Main_2.png';
import photoMain_3 from '/public/images/photo_Main_3.png';

import { Blog } from './Blog';
import { ImagesCarousel } from './ImagesCarousel';
import { Sets } from './Sets';

export function MainContent() {
  const images = [photoMain_1, photoMain_2, photoMain_3];

  return (
    <div>
      <ImagesCarousel images={images} />
      <Sets />
      <Blog />
    </div>
  );
}
