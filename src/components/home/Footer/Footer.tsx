import Image from 'next/image';
import Link from 'next/link';
import { IoLogoFacebook, IoLogoInstagram, IoLogoTiktok } from 'react-icons/io5';

import { FooterItem } from './FooterItem';
import { FooterTitle } from './FooterTitle';

const footerElements = {
  firstList: {
    id: 0,
    title: 'Menu',
    items: [
      { id: 0, name: 'Strona główna', href: '/' },
      {
        id: 1,
        name: 'Oferta',
        href: '#/oferta',
        sublist: [
          { id: 10, name: 'Zajęcia grupowe', href: '#/oferta/zajecia-grupowe' },
          {
            id: 11,
            name: 'Zajęcia indywidualne',
            href: '#/oferta/zajecia-indywidualne'
          },
          { id: 12, name: 'Warsztaty', href: '#/oferta/warsztaty' },
          { id: 13, name: 'Eventy', href: '#/oferta/eventy' },
          { id: 14, name: 'Współpraca', href: '#/oferta/wspolpraca' }
        ]
      },
      { id: 2, name: 'Akademia', href: '#/akademia' },
      { id: 3, name: 'Cennik', href: '#/cennik' },
      { id: 4, name: 'Instruktor', href: '#/instruktor' },
      { id: 5, name: 'Opinie', href: '#/opinie' },
      { id: 6, name: 'Galeria', href: '#/galeria' }
    ]
  },
  secondList: {
    id: 1,
    title: 'Sklep AS',
    items: [
      { id: 0, name: 'Deski', href: '#/sklep/deski' },
      { id: 1, name: ' Decki', href: '#/sklep/decki' },
      { id: 2, name: 'Akcesoria', href: '#/sklep/akcesoria' }
    ]
  },
  thirdList: {
    id: 2,
    title: 'Regulaminy',
    items: [
      { id: 0, name: 'Polityka prywatności', href: '#/polityka-prywatnosci' },
      { id: 1, name: 'Regulamin', href: '#/regulamin' },
      { id: 2, name: 'Ciasteczka', href: '#/ciasteczka' }
    ]
  }
};

const footerIcons = [
  {
    id: 0,
    iconComponent: IoLogoFacebook,
    href: '#facebook',
    aria: 'Go to Facebook'
  },
  {
    id: 1,
    iconComponent: IoLogoInstagram,
    href: '#instagram',
    aria: 'Go to Instagram'
  },
  { id: 2, iconComponent: IoLogoTiktok, href: '#tiktok', aria: 'Go to TikTok' }
];

export function Footer() {
  return (
    <footer className="w-full bg-black text-white">
      <div className="flex flex-col justify-between gap-5 px-5 py-6 sm:flex-row sm:flex-wrap sm:px-12 md:px-12 lg:px-16">
        <div>
          <FooterTitle>{footerElements.firstList.title}</FooterTitle>
          <ul className="flex flex-col gap-2">
            {footerElements.firstList.items.map(item => {
              if (item.sublist) {
                return (
                  <li
                    className="max-w-fit font-roboto text-xs lg:text-base "
                    key={item.id}
                  >
                    <Link href={item.href} className="hover:text-purple-400">
                      {item.name}
                    </Link>
                    <ul className="mt-2 flex flex-col gap-2 pl-4">
                      {item.sublist.map(subitem => (
                        <FooterItem href={subitem.href} key={subitem.id}>
                          {subitem.name}
                        </FooterItem>
                      ))}
                    </ul>
                  </li>
                );
              } else {
                return (
                  <FooterItem href={item.href} key={item.id}>
                    {item.name}
                  </FooterItem>
                );
              }
            })}
          </ul>
        </div>
        <div className="flex flex-col">
          <FooterTitle>{footerElements.secondList.title}</FooterTitle>
          <ul className="flex flex-col gap-2">
            {footerElements.secondList.items.map(item => (
              <FooterItem href={item.href} key={item.id}>
                {item.name}
              </FooterItem>
            ))}
          </ul>
        </div>
        <div className="flex flex-col">
          <FooterTitle>{footerElements.thirdList.title}</FooterTitle>
          <ul className="flex flex-col gap-2">
            {footerElements.thirdList.items.map(item => (
              <FooterItem href={item.href} key={item.id}>
                {item.name}
              </FooterItem>
            ))}
          </ul>
        </div>
        <div className="flex w-full flex-col items-end lg:w-fit">
          <div className="flex items-center gap-2 lg:gap-4">
            <Image
              src="/images/homepage/logo.png"
              alt="Logo Akademii Skateboardingu"
              width={20}
              height={20}
              className="lg:scale-150"
            />
            <p className="py-1 text-end font-poetsen-one text-sm text-white lg:text-xl">
              Akademia Skateboardingu
            </p>
          </div>
          <p className="font-roboto text-xs font-semibold text-amber-300 lg:text-sm">
            Jeździj z nami!
          </p>
          <ul className="flex gap-2 pt-2 lg:gap-4 lg:text-sm">
            {footerIcons.map(icon => (
              <li key={icon.id} className="hover:text-purple-400">
                <Link href={icon.href} aria-label={icon.aria}>
                  <icon.iconComponent size={16} className="lg:scale-150" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-amber-300 px-5 py-2 text-center font-poetsen-one text-xs">
        {new Date().getFullYear()} © Copyright Akademia Skateboardingu
      </div>
    </footer>
  );
}
