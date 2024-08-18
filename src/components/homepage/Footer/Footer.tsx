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
  { id: 0, iconComponent: IoLogoFacebook, href: '#facebook' },
  { id: 1, iconComponent: IoLogoInstagram, href: '#instagram' },
  { id: 2, iconComponent: IoLogoTiktok, href: '#tiktok' }
];

export function Footer() {
  return (
    <footer className="w-full bg-black text-white">
      <div className="flex flex-wrap gap-5 px-5 py-6">
        <div>
          <FooterTitle>{footerElements.firstList.title}</FooterTitle>
          <ul className="flex flex-col gap-1">
            {footerElements.firstList.items.map(item => {
              if (item.sublist) {
                return (
                  <li className="max-w-fit font-roboto text-xs" key={item.id}>
                    {item.name}
                    <ul className="flex flex-col gap-1 pl-4">
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
        <div className="flex flex-col items-end">
          <FooterTitle>{footerElements.secondList.title}</FooterTitle>
          <ul className="flex flex-col items-end gap-1">
            {footerElements.secondList.items.map(item => (
              <FooterItem href={item.href} key={item.id}>
                {item.name}
              </FooterItem>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-end">
          <FooterTitle>{footerElements.thirdList.title}</FooterTitle>
          <ul className="flex flex-col items-end gap-1">
            {footerElements.thirdList.items.map(item => (
              <FooterItem href={item.href} key={item.id}>
                {item.name}
              </FooterItem>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-end">
          <div className="flex items-center gap-1">
            <Image
              src="/images/homepage/logo.png"
              alt=""
              width={20}
              height={20}
            />
            <p className="py-1 text-end font-poetsen-one text-sm text-white">
              Akademia Skateboardingu
            </p>
          </div>
          <p className="font-roboto text-xs font-semibold text-amber-300">
            Jeździj z nami!
          </p>
          <ul className="flex gap-2 pt-2">
            {footerIcons.map(icon => (
              <li key={icon.id} className="hover:text-purple-400">
                <Link href={icon.href}>
                  <icon.iconComponent size={16} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-amber-300 px-5 py-2 text-center font-poetsen-one text-xs">
        2024 © Copyright Akademia Skateboardingu
      </div>
    </footer>
  );
}
