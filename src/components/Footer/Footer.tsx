import Image from 'next/image';
import Link from 'next/link';

const skateAcademyLinks = [
  { name: 'FAQ', pathname: '/' },
  { name: 'O NAS', pathname: '/' },
  { name: 'KONTAKT', pathname: '/' },
  { name: 'REGULAMIN', pathname: '/' },
  { name: 'POLITYKA PRYWATNOŚCI', pathname: '/' }
];
const shoppingLinks = [
  { name: 'DOSTAWY', pathname: '/' },
  { name: 'PŁATNOŚĆ', pathname: '/' },
  { name: 'REKLAMACJE', pathname: '/' },
  { name: 'ZWROTY', pathname: '/' },
  { name: 'TABELA ROZMIARÓW', pathname: '/' }
];

const Footer = () => (
  <div className="mx-[4.688rem] flex items-start justify-between border-t border-black pb-12 pt-[1.938rem]">
    <div className="flex gap-[3.75rem]">
      <div className="p-2.5">
        <h5 className="mb-6">SKLEP AS</h5>
        <ul>
          {skateAcademyLinks.map(({ name, pathname }) => (
            <li key={name}>
              <Link href={pathname}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-2.5">
        <h5 className="mb-6">ZAKUPY</h5>
        <ul>
          {shoppingLinks.map(({ name, pathname }) => (
            <li key={name}>
              <Link href={pathname}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className="flex flex-col items-end">
      <Image
        alt="Akademia Skate"
        height={82}
        src="/logo/as-black-logo.svg"
        width={82}
        className="mb-2.5"
      />
      <h5 className="font-bold">AKADEMIA SKATEBOARDINGU</h5>
      <p className="text-sm">Jeździj z nami!</p>
    </div>
  </div>
);

export default Footer;
