import AboutUs from '../components/AboutUs/AboutUs';
import Banner from '../components/Banner/Banner';
import Contact from '../components/Contact/Contact';
import FAQ from '../components/FAQ/FAQ';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/navbar/Navbar';

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

const AcademyPage = () => {
  return (
    <div>
      <Navbar />
      <Banner items={items} />
      <AboutUs />
      <Contact />
      <FAQ />
      <Footer />
    </div>
  );
};

export default AcademyPage;
