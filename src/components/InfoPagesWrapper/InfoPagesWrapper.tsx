import React, { ReactNode } from 'react';

import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Navbar from '../navbar/Navbar';

const items = [
  {
    src: 'images/skate_cut.png',
    key: 'baner1',
    message: 'Poznajmy się!'
  },
  {
    src: 'images/skate_cut.png',
    key: 'baner2',
    message: 'bądźmy',
    subMessage: 'w kontakcie!'
  },
  {
    src: 'images/skate_cut.png',
    key: 'baner3',
    message: 'inni',
    subMessage: 'pytali o...'
  }
];

type TInfoPageLayoutProps = {
  children: ReactNode;
};

const InfoPagesWrapper = ({ children }: TInfoPageLayoutProps) => {
  return (
    <div>
      <Navbar />
      <Banner items={items} />
      {children}
      <Footer />
    </div>
  );
};

export default InfoPagesWrapper;
