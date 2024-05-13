import { Button, Title } from '@tremor/react';

import { Description } from './Descripton';
import { Photo } from './Photo';
import { Rating } from './Rating';

const Product = () => {
  return (
    <div>
      <div>
        <Photo src={} alt="" />
        <Title />
        <Rating />
        <Description />
      </div>
      <div>
        <Button />
      </div>
    </div>
  );
};
