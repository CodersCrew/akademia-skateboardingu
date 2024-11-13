import { Transition } from '@headlessui/react';
import Link from 'next/link';
import { Fragment } from 'react';

import { NavbarElementType, NavbarIconType } from './Navbar';
import NavbarDropdown from './NavbarDropdown';
import NavbarItem from './NavbarItem';

type NavbarMenuProps = {
  isOpen: boolean;
  currentPathname: string;
  menuElements: NavbarElementType[];
  menuIcons?: NavbarIconType[];
  navbarMenuClassName?: string;
};

export default function NavbarMenu({
  isOpen,
  currentPathname,
  menuElements,
  menuIcons
}: NavbarMenuProps) {
  return (
    <Transition
      as={Fragment}
      show={isOpen}
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
            if ('sublist' in item) {
              return (
                <NavbarDropdown
                  key={item.id}
                  sublist={item.sublist}
                  currentPathname={currentPathname}
                >
                  {item.name}
                </NavbarDropdown>
              );
            } else {
              return (
                <NavbarItem
                  key={item.id}
                  href={item.href}
                  isActive={currentPathname === item.href}
                >
                  {item.name}
                </NavbarItem>
              );
            }
          })}
        </ul>
        <ul className="mt-3 flex flex-row gap-5 border-t border-white bg-neutral-900 p-3">
          {menuIcons &&
            menuIcons.map(icon => (
              <li key={icon.id} className="text-white hover:text-purple-400">
                <Link href={icon.href}>
                  <icon.iconComponent size={24} />
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </Transition>
  );
}
