import photoMain_1 from '/public/images/photo_Main_1.png';
import photoMain_2 from '/public/images/photo_Main_2.png';

import Title from '../Common/Title';
import Buttons from './Buttons';

const Sets = () => {
  const images = [photoMain_1, photoMain_2];
  const paths = ['/sets/beginner', '/sets/advanced'];
  const text = ['POCZĄTKUJĄCY', 'ZAAWANSOWANI'];

  return (
    <div className="h-567">
      <Title title="KOMPLETY:" />
      <Buttons images={images} paths={paths} text={text} />
    </div>
  );
};

export default Sets;
