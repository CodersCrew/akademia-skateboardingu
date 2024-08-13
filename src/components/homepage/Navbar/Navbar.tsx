'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {
  IoClose,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTiktok,
  IoMenu
} from 'react-icons/io5';

import { MenuButton } from './MenuButton';

export type MenuItem = {
  id: number;
  name: string;
  href?: string;
  sublist?: MenuItem[];
};

const menuItems = [
  { id: 0, name: 'Strona główna', href: '/' },
  {
    id: 1,
    name: 'Oferta',
    sublist: [
      { id: 10, name: 'Zajęcia grupowe', href: '/oferta/zajecia-grupowe' },
      {
        id: 11,
        name: 'Zajęcia indywidualne',
        href: '/oferta/zajecia-indywidualne'
      },
      { id: 12, name: 'Wyjazdy', href: '/oferta/wyjazdy' },
      { id: 13, name: 'Warsztaty', href: '/oferta/warsztaty' },
      { id: 14, name: 'Współpraca', href: '/oferta/wspolpraca' }
    ]
  },
  {
    id: 2,
    name: 'Akademia',
    href: '/akademia'
  },
  {
    id: 3,
    name: 'Cennik',
    href: '/cennik'
  },
  {
    id: 4,
    name: 'Instruktor',
    href: '/instruktor'
  },
  {
    id: 5,
    name: 'Opinie',
    href: '/opinie'
  },
  {
    id: 6,
    name: 'Galeria',
    href: '/galeria'
  },
  {
    id: 7,
    name: 'Kontakt',
    href: '/kontakt'
  },
  {
    id: 8,
    name: 'Skateshop',
    sublist: [
      { id: 80, name: 'Deski', href: '/skateshop/deski' },
      { id: 81, name: 'Decki', href: '/skateshop/decki' },
      { id: 82, name: 'Akcesoria', href: '/skateshop/akcesoria' }
    ]
  }
];

const menuIcons = [
  { id: 0, iconComponent: IoLogoFacebook, href: '#facebook' },
  { id: 1, iconComponent: IoLogoInstagram, href: '#instagram' },
  { id: 2, iconComponent: IoLogoTiktok, href: '#tiktok' }
];

export function Navbar() {
  // TODO -> change to false after implementing the mobile menu
  const [isOpen, setIsOpen] = useState(true);

  return (
    <nav className="sticky top-0 z-50 flex flex-col items-center justify-between border-b border-[#3C3C3C] bg-[#171717] ">
      <div className="flex w-full justify-between px-5 py-2">
        <div className="flex items-center">
          <Image
            src="/images/homepage/logo.png"
            alt=""
            width={32}
            height={32}
          />
          <p className="p-2 font-poetsen-one text-base text-white">
            Akademia Skateboardingu
          </p>
        </div>
        <button
          onClick={() => {
            isOpen ? setIsOpen(false) : setIsOpen(true);
          }}
          className="md:hidden"
        >
          {isOpen ? (
            <IoClose size={32} color="#FFFFFF" />
          ) : (
            <IoMenu size={32} color="#FFFFFF" />
          )}
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-14 flex h-[calc(100vh-56px)] w-full flex-col justify-between overflow-y-scroll bg-neutral-700">
          <ul>
            {menuItems.map(item => {
              if (item.sublist) {
                return (
                  <MenuButton
                    key={item.id}
                    text={item.name}
                    sublist={item.sublist}
                  />
                );
              } else {
                return (
                  <MenuButton
                    key={item.id}
                    text={item.name}
                    hrefTo={item.href}
                  />
                );
              }
            })}
          </ul>
          <ul className="mt-3 flex flex-row gap-5 border-t border-white bg-neutral-900 p-3">
            {menuIcons.map(icon => (
              <li key={icon.id} className="text-white hover:text-purple-400">
                <Link href={icon.href}>
                  <icon.iconComponent size={24} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
