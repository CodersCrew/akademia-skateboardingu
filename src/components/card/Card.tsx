'use client';

import ButtonTimetable from './ButtonTimetable';
import Description from './Description';
import FormLink from './FormLink';
import Header from './Header';

const HeaderSection = () => {
  return (
    <>
      <Header />
      <Description />
      <ButtonTimetable />
      <FormLink />
    </>
  );
};

export default HeaderSection;
