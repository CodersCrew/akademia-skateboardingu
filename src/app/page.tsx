import CommentsSection from '@/components/homepage/sections/CommentsSection';
import {
  FifthSection,
  FirstSection,
  FourthSection,
  Navbar,
  SecondSection,
  SeventhSection,
  SixthSection,
  ThirdSection
} from '@/homepage/index';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <CommentsSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
    </>
  );
}
