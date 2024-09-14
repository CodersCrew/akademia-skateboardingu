import { Button, Title } from '@tremor/react';
import { useState } from 'react';

import { Description } from './Descripton';
import { Photo } from './Photo';
import { Rating } from './Rating';

export function Product() {
  const [rating, setRating] = useState();

  return (
    <div>
      <div>
        <Photo src="" alt="" />
        <Title />
        <Rating rating={rating} setRating={setRating} />
        <Description />
      </div>
      <div>
        <Button />
      </div>
    </div>
  );
}
