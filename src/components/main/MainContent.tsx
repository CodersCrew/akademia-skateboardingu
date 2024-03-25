'use client';

import Blog from './Blog/Blog';
import Images from './Images/Images';
import Refferals from './Refferals/Refferals';
import Sets from './Sets/Sets';

const MainContent = () => {
  return (
    <>
      <Images />
      <Sets />
      <Images />
      <Refferals />
      <Blog />
    </>
  );
};

export default MainContent;
