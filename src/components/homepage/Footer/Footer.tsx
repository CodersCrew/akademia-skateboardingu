import Image from 'next/image';
import Link from 'next/link';
import { IoLogoFacebook, IoLogoInstagram, IoLogoTiktok } from 'react-icons/io5';

import { FooterItem } from './FooterItem';
import { FooterTitle } from './FooterTitle';

const footerElements = {
  menu: {
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
  sklep: {
    id: 1,
    title: 'Sklep AS',
    items: [
      { id: 0, name: 'Deski', href: '#/sklep/deski' },
      { id: 1, name: ' Decki', href: '#/sklep/decki' },
      { id: 2, name: 'Akcesoria', href: '#/sklep/akcesoria' }
    ]
  },
  regulaminy: {
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
    <footer className="w-full text-white">
      <div className="grid grid-cols-3  grid-rows-3 gap-2 px-5 py-6">
        <div className="col-span-1 row-span-3">
          <FooterTitle>{footerElements.menu.title}</FooterTitle>
          <ul className="flex flex-col gap-1">
            {footerElements.menu.items.map(item => {
              if (item.sublist) {
                return (
                  <li key={item.id}>
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
        <div className="col-span-2 row-span-1 flex flex-col items-end">
          <FooterTitle>{footerElements.sklep.title}</FooterTitle>
          <ul className="flex flex-col items-end gap-1">
            {footerElements.sklep.items.map(item => (
              <FooterItem href={item.href} key={item.id}>
                {item.name}
              </FooterItem>
            ))}
          </ul>
        </div>
        <div className="col-span-2 row-span-1 flex flex-col items-end">
          <FooterTitle>{footerElements.regulaminy.title}</FooterTitle>
          <ul className="flex flex-col items-end gap-1">
            {footerElements.regulaminy.items.map(item => (
              <FooterItem href={item.href} key={item.id}>
                {item.name}
              </FooterItem>
            ))}
          </ul>
        </div>
        {/* {footerElements.map(element => (
          <div key={element.id} className="max-h-fit">
            <FooterTitle>{element.title}</FooterTitle>
            <ul>
              {element.items.map(item => {
                if (item.sublist) {
                  return (
                    <li key={item.id}>
                      <ul className="pl-4">
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
        ))} */}
        <div className="col-span-2 row-span-1 flex flex-col items-end ">
          <div className="flex flex-wrap items-center gap-1">
            <Image
              src="/images/homepage/logo.png"
              alt=""
              width={20}
              height={20}
              className="hidden min-[350px]:block"
            />
            <p className="py-1 font-poetsen-one text-sm text-white">
              Akademia Skateboardingu
            </p>
          </div>
          <p className="font-roboto text-xs font-semibold text-amber-300">
            Jeździj z nami!
          </p>
          <div className="flex gap-2 pt-2">
            {footerIcons.map(icon => (
              <Link href={icon.href} key={icon.id}>
                <icon.iconComponent size={16} />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-amber-300 px-5 py-2 text-center font-poetsen-one text-xs">
        2024 © Copyright Akademia Skateboardingu
      </div>
    </footer>
  );
}
