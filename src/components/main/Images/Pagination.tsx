'use-client';

import { useState } from 'react';

const usePagination = (length: number) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex(prevIndex => (prevIndex + 1) % length);
  const prev = () =>
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? length - 1 : prevIndex - 1
    );
  const goToIndex = (index: number) => setCurrentIndex(index);

  return { currentIndex, next, prev, goToIndex };
};

export default usePagination;
