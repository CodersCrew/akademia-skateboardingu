'use client';

import { Transition } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Fragment } from 'react';
import {
  IoClose,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTiktok,
  IoMenu
} from 'react-icons/io5';

import { MenuItem } from './MenuItem';
import { MenuList } from './MenuList';

export type MenuItemType = {
  id: number;
  name: string;
  href: string;
};

export type MenuListType = {
  id: number;
  name: string;
  sublist: MenuItemType[];
};

const menuElements = [
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
      { id: 12, name: 'Wyjazdy', href: '#/oferta/wyjazdy' },
      { id: 13, name: 'Warsztaty', href: '#/oferta/warsztaty' },
      { id: 14, name: 'Współpraca', href: '#/oferta/wspolpraca' }
    ]
  },
  {
    id: 2,
    name: 'Akademia',
    href: '#/akademia'
  },
  {
    id: 3,
    name: 'Cennik',
    href: '#/cennik'
  },
  {
    id: 4,
    name: 'Instruktor',
    href: '#/instruktor'
  },
  {
    id: 5,
    name: 'Opinie',
    href: '#/opinie'
  },
  {
    id: 6,
    name: 'Galeria',
    href: '#/galeria'
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
      { id: 80, name: 'Deski', href: '#/skateshop/deski' },
      { id: 81, name: 'Decki', href: '#/skateshop/decki' },
      { id: 82, name: 'Akcesoria', href: '#/skateshop/akcesoria' }
    ]
  }
];

const menuIcons = [
  { id: 0, iconComponent: IoLogoFacebook, href: '#facebook' },
  { id: 1, iconComponent: IoLogoInstagram, href: '#instagram' },
  { id: 2, iconComponent: IoLogoTiktok, href: '#tiktok' }
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <nav className="sticky top-0 z-50 flex flex-col items-center justify-between border-b border-[#3C3C3C] bg-[#171717]">
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
          className="md:hidden"
          aria-label="Mobile menu"
          onClick={() =>
            setIsMobileMenuOpen(isMobileMenuOpen => !isMobileMenuOpen)
          }
        >
          {isMobileMenuOpen ? (
            <IoClose
              size={32}
              color="#FFFFFF"
              className="data-[] transition duration-1000 ease-in "
            />
          ) : (
            <IoMenu
              size={32}
              color="#FFFFFF"
              className="transition duration-1000 ease-in "
            />
          )}
        </button>
      </div>
      <Transition
        as={Fragment}
        show={isMobileMenuOpen}
        enter="transition-transform ease-in duration-300"
        enterFrom="transform translate-x-full"
        enterTo="transform translate-x-0"
        leave="transition-transform ease-out duration-300"
        leaveFrom="transform translate-x-0"
        leaveTo="transform translate-x-full"
      >
        <div className="absolute left-0 top-14 z-40 flex h-[calc(100vh-56px)] w-full flex-col justify-between overflow-y-auto bg-neutral-700">
          <ul>
            {menuElements.map(item => {
              if (item.sublist) {
                return (
                  <MenuList
                    key={item.id}
                    sublist={item.sublist}
                    pathname={pathname}
                  >
                    {item.name}
                  </MenuList>
                );
              } else {
                return (
                  <MenuItem key={item.id} href={item.href} pathname={pathname}>
                    {item.name}
                  </MenuItem>
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
      </Transition>
    </nav>
  );
}
