'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { IconType } from 'react-icons';
import { IoLogoFacebook, IoLogoInstagram, IoLogoTiktok } from 'react-icons/io5';

import NavbarBrand from './NavbarBrand';
import NavbarMenu from './NavbarMenu';
import NavbarToggle from './NavbarToggle';

export type NavbarItemType = {
  id: number;
  name: string;
  href: string;
};

export type NavbarDropdownType = {
  id: number;
  name: string;
  sublist: NavbarItemType[];
};

export type NavbarElementType = NavbarItemType | NavbarDropdownType;

export type NavbarIconType = {
  id: number;
  iconComponent: IconType;
  href: string;
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
      { id: 12, name: 'Wyjazdy', href: '/oferta/wyjazdy' },
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
  {
    id: 1,
    iconComponent: IoLogoInstagram,
    href: '#instagram'
  },
  { id: 2, iconComponent: IoLogoTiktok, href: '#tiktok' }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const currentPathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [currentPathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 flex flex-col items-center justify-between border-b border-[#3C3C3C] bg-[#171717]">
      <div className="flex w-full justify-between px-5 py-2">
        <NavbarBrand />
        <NavbarToggle isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>
      <NavbarMenu
        isOpen={isOpen}
        currentPathname={currentPathname}
        menuElements={menuElements}
        menuIcons={menuIcons}
      />
    </nav>
  );
}
