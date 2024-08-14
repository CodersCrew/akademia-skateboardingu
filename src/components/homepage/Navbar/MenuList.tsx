import { Transition } from '@headlessui/react';
import { useState } from 'react';
import { Fragment } from 'react';
import { IoCaretDown } from 'react-icons/io5';

import { MenuItem } from './MenuItem';
import { MenuItemType } from './Navbar';

export interface MenuListProps {
  children: string;
  pathname: string;
  sublist: MenuItemType[];
  menuListClassName?: string;
}

export function MenuList({
  children,
  pathname,
  sublist,
  menuListClassName
}: MenuListProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li
      className={`font-roboto text-xs font-bold uppercase leading-5 tracking-widest text-white ${menuListClassName}`}
    >
      <button
        className="flex w-full items-center gap-2 px-5 py-3 text-start uppercase hover:bg-purple-400 hover:text-neutral-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        {children}
        <IoCaretDown size={12} color="#FFFFFF" />
      </button>
      <Transition
        as={Fragment}
        show={isOpen}
        enter="transition-transform ease-in duration-150"
        enterFrom="transform translate-x-full"
        enterTo="transform translate-x-0"
        leave="transition-transform ease-out duration-150"
        leaveFrom="transform translate-x-0"
        leaveTo="transform translate-x-full"
      >
        <ul>
          {sublist.map(subitem => (
            <MenuItem
              key={subitem.id}
              href={subitem.href}
              pathname={pathname}
              menuItemClassName="pl-12 pr-5"
            >
              {subitem.name}
            </MenuItem>
          ))}
        </ul>
      </Transition>
    </li>
  );
}
